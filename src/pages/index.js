// import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { AppBar, Toolbar,Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";


// import { Formik, field, form} from 'formik'
// import Link from 'next/link';

// const inter = Inter({ subsets: ['latin'] })
// const signedIn = false;
// const username = "";
// const avatar = "";

export default function Home() {
  // function checkSignedIn() {
  //   if (signedIn)
  //   return 
  // }
  return (
    <Container>
      <CssBaseline />   
        <Box >
              <AppBar position="static">
                <Toolbar>
                  {/* <Box sx={
                      {alignItems: 'left',
                      display: 'flex',
                      flexDirection: 'row'}
                    }> */}
                          
                        <Typography variant='h1' sx={{ ml: 2}}>
                          Spotify
                        </Typography>
                        <Typography variant='h2' sx={{ flexGrow: 11 }}>
                          MATCHED
                        </Typography>
                  {/* </Box> */}
                        <Button
                              variant="text"
                              size = "medium"
                              sx={{ flexGrow: 1 }}
                              href="/posts/first-post"
                          >
                              Login
                        </Button>
                        <Button
                              variant="contained"
                              size = "medium"
                              href="/posts/first-post"
                          >
                              Sign Up
                        </Button>
                  
                </Toolbar>
              </AppBar>
        </Box>

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

          <Box
            sx={{
              margin: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
              // backgroundColor: 'primary.light',
            }}>
        <div>
          SPOTIFY MAAAAATCHED!!!
        </div>
        
      </Box>
    </Container>
  )
}
