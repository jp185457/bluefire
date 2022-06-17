/* eslint-disable react/function-component-definition */
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import logoBlue from '../lib/assets/logos/logo-blue.png';
// import RestMenu from './RestMenu';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <Image className={styles.logo} src={logoBlue} width={250} height={250} />
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Blue Fire!</a>
      </h1>

      <p className={styles.description}>
        Your one stop shop for all your menu needs!
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>GraphQL Menu &rarr;</h2>
          <p>Get our freshest burgers called through our latest GraphQL API</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>REST Menu &rarr;</h2>
          <p>
            Kick back with a pizza made by our best chefs and called through our
            REST API
          </p>
        </a>
      </div>
    </main>

    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  </div>
);

export default Home;
