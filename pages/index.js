import Head from 'next/head'
import Image from "next/legacy/image";
import Featured from '../components/Featured'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lalapan Shop</title>
        <meta name="description" content="Lalapan ikan ayam cumi wader lele empal daging" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Featured/>


    </div>
  )
}
