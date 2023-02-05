import Link from 'next/link';
import styles from '@/styles/Home.module.css'

export default function FirstPost() {
  return (
        <main className={styles.FirstPost}>
          <h1 className={styles.description}>
            First Page
            <Link href="/">Back to home</Link>
          </h1>
        </main>
    )
}