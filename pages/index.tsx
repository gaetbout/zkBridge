import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ConnectStarkWallet from './components/ConnectStarkWallet'
import ConnectZkSyncWallet from './components/ConnectZkSyncWallet'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>zkBridge</title>
        <meta name="description" content="Bridge from L2 to L2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
        <ul>
          <ConnectStarkWallet />
          <ConnectZkSyncWallet />
        </ul>
      </nav>
      <main className={styles.main}>
        <a className={styles.card}>
          <h1 className={styles.title}>
            Welcome to <span className={styles.underline}>zkBridge!</span>
          </h1>

          <input type="text" placeholder="From..." /> ETH
          <br />
          <input type="text" placeholder="To..." /> ETH
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by a lot of coffee
        </a>
      </footer>
    </div>
  )
}
