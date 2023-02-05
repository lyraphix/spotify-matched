import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
// import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  function Header({ title }) {
    return <h1 className={styles.header}>{title ? title : "Default title"}</h1>
  }
  function open({link}) {
    return window.open("/posts/first-post")
  }
  return (


      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <Header title="Spotify Match" />
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div>
          Read Our first page!
          
          <button onClick={open}>First Page</button>
        </div>
        

        <div className={styles.center}>
          SPOTIFY MAAAAATCHED!!!
          {/* <Link href="/posts/first-post">Read Our first page!</Link> */}
        </div>

      </main>
  )
}
