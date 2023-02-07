// import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { AppBar, Toolbar, Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";


// import { Formik, field, form} from 'formik'
// import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  function open({link}) {
    return window.open("/posts/first-post")
  }
  return (
    <Container>
      <CssBaseline />  
      <Box >
               <AppBar position="static">
                 <Toolbar>
      {/* <Box
            sx={{
              margin: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
              // backgroundColor: 'primary.light',
            }}> */}
          {/* <Grid item xs={2}> */}
            {/* <Box sx={{
              margin: 10,
              display: 'flex',
              flexDirection: 'row',
            }}> */}
              
              <Typography variant='h1'>
                Spotify
              </Typography>
              <Typography variant='h2'>
                MATCHED
              </Typography>
              <></>
            {/* </Box> */}

        
        <Button
            variant="contained"
            size = "medium"
            sx={{ mt: 15, mb: 10 }}
            href="/posts/first-post"
        >
            Sign Up
        </Button>
        </Toolbar>
               </AppBar>
         </Box>
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
      {/* </Box> */}
      {/* </Grid> */}
    </Container>
  )
}
