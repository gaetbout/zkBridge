import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ConnectStarkWallet from './components/ConnectStarkWallet'
import ConnectZkSyncWallet from './components/ConnectZkSyncWallet'
import { useState } from "react";

export default function Home() {
  const [getStarkAddress, setStarkAddress] = useState('')
  const [getZkSyncAddress, setZkSyncAddress] = useState('')
  return (
    <div className={styles.container}>
      <Head>
        <title>zkBridge</title>
        <meta name="description" content="Bridge from L2 to L2" />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>
      <nav className={styles.nav}>
        <ul>
          <li><img src="name.jpeg" alt="Logo" /></li>
          <span>
            <ConnectStarkWallet setStarkAddress={setStarkAddress} />
            <ConnectZkSyncWallet getZkSyncAddress={getZkSyncAddress} setZkSyncAddress={setZkSyncAddress} />
          </span>
        </ul>
      </nav>
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>
            Welcome to <span className={styles.underline}>zkBridge!</span>
          </h1>
          <div className={styles.skalala}>
            From
            <br />
            <p>{getStarkAddress}</p>
            <br />
            To
            <br />
            <input type="text" value={getZkSyncAddress} placeholder="To..." />
          </div>
          <div className={styles.skalala}>
            Amount
            <input type="number" placeholder="0.00" />
          </div>
          <button>Submit</button>
        </div>
      </main>

      <footer className={styles.footer}>
        Powered by coffee and candies
      </footer>
    </div >
  )
}
