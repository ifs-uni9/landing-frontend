import React, { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import axios from "axios";
import Lottie, {Options} from "react-lottie";
import * as animationData from "../../assets/loading.json";

const lottieDefaultOptions: Options = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  },
};

function HeroSection() {
  const [showMenu, setShowMenu] = useState(false);
  const [email, setEmail] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const captchaRef = useRef<HCaptcha>(null);

  const onShowMenuClicked = useCallback(() => {
    setShowMenu(!showMenu);
  }, [showMenu]);

  const onVerifyCaptcha = useCallback((token) => {
    setCaptchaToken(token);
  }, []);

  const onClickSend = useCallback(async () => {
    const hasError = error && email === "";

    setLoading(true);
    if (!hasError && captchaToken) {
      try {
        const {data} = await axios.post("/api/mail", {
          email,
          response: captchaToken,
        });
        
        if (data.code === "success") {
          setError(null);
          toast.success("Email enviado! Aguarde nosso contato.");
          setEmail("");
          setCaptchaToken("");
          captchaRef.current?.resetCaptcha();
        } else {
          setLoading(false);
          setError(data.message);
          
          captchaRef.current?.resetCaptcha();
        }
      } catch (err: any) {
        setLoading(false);
        setError("Opa! Parece que algo saiu errado. Tente novamente.");
        captchaRef.current?.resetCaptcha();
      } finally {
        setLoading(false);
        captchaRef.current?.resetCaptcha();
      }
    } else {
      if (!captchaToken) {
        setError("Por favor, verifique o captcha.");
        setLoading(false);
      }
    }
  }, [email, error, captchaToken]);

  return (
    <section
      id="home"
      className="w-full px-3 antialiased bg-hero-background lg:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center w-full h-24 select-none">
          <div className="relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center">
            <a href="#" className="w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0">
              <span className="p-1 text-xl font-black leading-none text-white select-none">
                <span>iBurger</span>
                <span>.</span>
              </span>
            </a>
            <div
              className={
                "fixed top-0 left-0 z-40 items-center hidden w-full h-full p-3 text-xl bg-gray-900 bg-opacity-50 md:text-sm lg:text-base md:w-3/4 md:bg-transparent md:p-0 md:relative md:flex " +
                (showMenu ? "flex" : "hidden")
              }
            >
              <div className="flex-col w-full h-auto overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
                <div className="flex flex-col items-center justify-center w-full h-full mt-12 text-center text-gray-100 md:text-gray-50 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                  <a
                    href="#home"
                    className="inline-block px-4 py-2 mx-2 font-medium text-left text-brand-400 md:text-white md:px-0 lg:mx-3 md:text-center"
                  >
                    Inicio
                  </a>
                  <a
                    href="#features"
                    className="inline-block px-0 py-2 mx-2 font-medium text-left md:px-0 hover:text-gray-400 md:hover:text-white lg:mx-3 md:text-center"
                  >
                    Funcionalidades
                  </a>
                </div>
                <div className="flex flex-col items-center justify-end w-full h-full pt-4 md:w-1/3 md:flex-row md:py-0" />
              </div>
            </div>
            <div
              onClick={onShowMenuClicked}
              className={
                "absolute right-0 z-50 flex flex-col items-end w-10 h-10 p-2 mr-4 rounded-full cursor-pointer md:hidden hover:bg-gray-900 hover:bg-opacity-10 " +
                (showMenu ? "text-gray-400" : "text-gray-100")
              }
            >
              {showMenu ? (
                <svg
                  className="w-6 h-6"
                  x-show="showMenu"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  x-cloak=""
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  x-cloak=""
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </div>
          </div>
        </nav>
        <div className="container py-32 mx-auto text-center sm:px-4">
          <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
            <span className="block">Gerencie sua hamburgueria</span>
            <span className="relative inline-block mt-3 text-transparent text-white">
              com segurança e eficiência
            </span>
          </h1>
          <div className="max-w-lg mx-auto mt-6 text-sm text-center text-gray-100 md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">
            Se você está procurando uma solução para a sua empresa, fique por
            dentro do lançamento através do seu e-mail!
          </div>
          <form
            className={
              (error ? "border-red-600 border-2 " : "border-none ") +
              "relative flex items-center max-w-md mx-auto mt-12 overflow-hidden text-center rounded-full"
            }
          >
            <input
              type="text"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Endereço de e-mail"
              className="w-full h-12 px-6 py-2 font-medium text-gray-900 focus:outline-none"
            />
            <span className="relative top-0 right-0 block">
              <button
                type="button"
                className="inline-flex items-center w-32 h-12 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-brand border border-transparent hover:bg-brand-500 focus:outline-none active:bg-brand-800"
                onClick={onClickSend}
              >
                Enviar
              </button>
            </span>
          </form>
          {error && <p className={"mt-2 text-red-600"}>{error}</p>}
          {loading && <Lottie options={lottieDefaultOptions}
                              isStopped={!loading}
                              width={120}
                              isClickToPauseDisabled
                              isPaused={!loading}/>}

          <div className="flex flex-col items-center mt-4 text-sm text-gray-100">
            <HCaptcha
              sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY as string}
              ref={captchaRef}
              onVerify={onVerifyCaptcha}
            />
            <p className="mt-2">
              Ao se inscrever, você concorda com nossos{" "}
              <span className="hover:underline">
                <Link href={"/terms"}>termos e serviços.</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
