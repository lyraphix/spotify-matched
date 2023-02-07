// import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { AppBar, Toolbar, Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";


// import { Formik, field, form} from 'formik'
// import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Dashboard() {
  function open({link}) {
    return window.open("/posts/first-post")
  }
  return (
    <Container>
      <CssBaseline />  
      <Box >
               <AppBar position="static">
                  <Toolbar>
                         <Typography variant='h1' sx={{ ml: 2}}>
                           Spotify
                         </Typography>
                         <Typography variant='h2' sx={{ flexGrow: 2 }}>
                           MATCHED
                         </Typography>
                         <Typography variant='h2' sx={{ flexGrow: 11 }}>
                           Dashboard
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
