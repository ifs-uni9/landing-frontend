import { GetStaticProps } from 'next'
import Head from 'next/head'
import FeaturesSection from '../components/features/FeaturesSection'
import FooterSection from '../components/footer/FooterSection'
import HeroSection from '../components/hero/HeroSection'

export default function Home() {
  return (
    <main>
      <Head>
        <title>iBurger - Administre sua hamburgueria de forma eficiente com a plataforma iBurger</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#da532c"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      
        <meta name="description" content="Nunca foi tão fácil administrar seu negócio, com o iBurger você faz isso de forma eficiente, simples e segura." />
        <meta
          name="keywords"
          content="iburger, app iburger, app, app para hamburguerias, adiministração de hamburgueria, administração, hamburgueria, restaurante hamburgueria, restaurante, saas"
        />
        <meta property="og:title" content="IBurger" />
        <meta
          property="og:description"
          content="Nunca foi tão fácil administrar seu negócio, com o iBurger você faz isso de forma eficiente, simples e segura."
        />
        <meta property="og:type" content="text/html; charset=iso-8859-1" />
        <meta property="og:url" content="https://iburger.vercel.app/" />
        <meta
          property="og:image"
          content=""
        />
        <meta property="og:site_name" content="iBurger" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="twitter:title" content="iBurger - Administre sua hamburgueria de forma eficiente, simples e  segura." />
        <meta
          property="twitter:description"
          content=""
        />
        <meta
          property="twitter:description"
          content="Administre sua hamburgueria com eficiencia e simplicidade com a iBurger"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="iBurger" />
        <meta name="copyright" content="©️2020 - iBurger" />
      </Head>

      <HeroSection />
      <FeaturesSection />
      <FooterSection />
    </main>
  )
}
