// import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";


// import { Formik, field, form} from 'formik'
// import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  function open({link}) {
    return window.open("/posts/first-post")
  }
  return (
    <Container>
      {/* <CssBaseline />    */}
      <Grid Container spacing = {2}>
      <Box
            sx={{
              margin: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
              // backgroundColor: 'primary.light',
            }}>
          {/* <Grid item xs={2}> */}
            <Box sx={{
              margin: 10,
              display: 'flex',
              flexDirection: 'row',
            }}>
              
              <Typography variant='h1'>
                Spotify
              </Typography>
              <Typography variant='h2'>
                MATCHED
              </Typography>
              <></>
            </Box>

          {/* </Grid> */}
          {/* <div> */}
            {/* <name1 className={styles.header}>{"Spotify"}</name1>
            <name2 className={styles.header2}>{"MATCHED"}</name2> */}
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
          {/* </div> */}
          {/* <></> */}
        
        <Box item xs={12} sm={6} sx={
          {alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',}
        }>
        <Button
            variant="contained"
            size = "medium"
            sx={{ mt: 15, mb: 10 }}
            href="/posts/first-post"
        >
            Sign Up
        </Button>
        </Box>
        <div>
          SPOTIFY MAAAAATCHED!!!
        </div>
        
      </Box>
      </Grid>
    </Container>
  )
}
