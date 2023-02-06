import Link from 'next/link';
import styles from '@/styles/Home.module.css'
import { Container, Card, Row, Text, Input, Spacer, Button } from "@nextui-org/react";

export default function FirstPost() {
  function login() {
    return (
      <login>
        inputs = {{}}
      </login>
    )
  }
  function open({link}) {
    return window.open("/posts/first-post")
  }
  return (
        <main className={styles.loginPage}>
          <Spacer y={1} />
          <name1 className={styles.header}>{"Login"}</name1>
        
          <Spacer y={4} />
          <Input placeholder = "Email" />
          <Input placeholder = "Password" />
          <Spacer y={1} />
          <Button onClick={open}>Login</Button>
          <h1 className={styles.text}>
            <Link href="/">Back to home</Link>
          </h1>
          <Spacer y={6} />
        </main>
    )
}