// import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Button } from "@nextui-org/react";
import styles from '@/styles/Home.module.css'
// import { Formik, field, form} from 'formik'
// import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  function open({link}) {
    return window.open("/posts/first-post")
  }
  return (
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <name1 className={styles.header}>{"Spotify"}</name1>
            <name2 className={styles.header2}>{"MATCHED"}</name2>
            {/* <a
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
            </a> */}
          </div>
        </div>
        <login>

        </login>

        <login>
          <Button onClick={open}>Login</Button>
        </login>
        

        <div className={styles.center}>
          SPOTIFY MAAAAATCHED!!!
          {/* <Link href="/posts/first-post">Read Our first page!</Link> */}
        </div>

      </main>
  )
}
