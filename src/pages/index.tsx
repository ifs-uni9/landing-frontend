import { GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <section className={styles.container}>
      <Head>
        <title>iBurger - Keep working</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="A beautiful and resilient managing tool for your hamburger" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#FF5473" />
        <meta
          name="keywords"
          content="iburger, app iburger, app, app para hamburguerias, adiministração de hamburgueria, administração, hamburgueria, restaurante hamburgueria, restaurante, saas"
        />
        <meta property="og:title" content="IBurger" />
        <meta
          property="og:description"
          content="Administre sua hamburgueria com segurança e eficiencia com a Iburger!"
        />
        <meta property="og:type" content="text/html; charset=iso-8859-1" />
        <meta property="og:url" content="https://iburger.vercel.app/" />
        <meta
          property="og:image"
          content=""
        />
        <meta property="og:site_name" content="Iburger" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="twitter:title" content="Iburger - hamburgueria" />
        <meta
          property="twitter:description"
          content=""
        />
        <meta
          property="twitter:description"
          content="Administre sua hamburgueria com segurança eficiencia com a Iburger!"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Iburger" />
        <meta name="copyright" content="©️2020 Iburger" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Welcome to <span>iBurger!</span>
        </h1>
        <p>Administre </p>
      </main>
    </section>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  }
}