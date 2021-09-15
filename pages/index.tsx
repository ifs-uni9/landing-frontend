import { GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <section className={styles.container}>
      <Head>
        <title>iBurger - Keep working</title>
        <meta name="description" content="A beautiful and resilient managing tool for your hamburger" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Welcome to <span>iBurger!</span>
        </h1>
      </main>
    </section>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  }
}