import { Inter } from '@next/font/google'
import { ImageButton, AppBar, Toolbar, Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";


// import { Formik, field, form} from 'formik'
// import Link from 'next/link';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVw00OfAUktA4aI0Y98vHAiS-ITSp3v50",
  authDomain: "spotifly-997dd.firebaseapp.com",
  projectId: "spotifly-997dd",
  storageBucket: "spotifly-997dd.appspot.com",
  messagingSenderId: "869795366490",
  appId: "1:869795366490:web:d8bcf837eb81da5168ba63",
  measurementId: "G-LH0JWX82X5"
};

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  function open({link}) {
    return window.open("/posts/first-post")
  }
  return (
    <Container >
      <CssBaseline />  
      <Box >
               <AppBar position="fixed" >
                  {/* <Toolbar sx={{height: 100, backgroundColor:"background.default", borderBottom: 0.1, borderColor: "divider"}}> */}
                  <Toolbar sx={{height: 110, backgroundColor:"background.default"}}>
                      {/* <Box sx = {{flexGrow: 1}}></Box> */}
                         {/* <Typography variant='h1' sx={{ ml: 2}}>
                           Spotify
                         </Typography> */}
                         <Button
                            href="/"
                            >
                            
                        {/* <Image> */}
                            <img
                                sx={{mt: 10, flexGrow: 1, objectFit: "contain", alignItems: "end" }}
                                component="img"
                                height="80"
                                src="/logo.jpg"
                                // alt="Paella dish"
                            />
                        {/* </Image> */}
                        </Button>
                        <Box style={{
                                // width: image.width,
                                flex:13
                            }}></Box>
                   {/* </Box> */}
                         <Button
                               variant="text"
                               size = "medium"
                               sx={{ flexGrow: 1, color:"primary"}}
                               href="/posts/first-post"
                           >
                               Login
                         </Button>
                         <Button
                               variant="contained"
                               size = "medium"
                               href="/posts/newaccount"
                           >
                               Sign Up
                         </Button>
                  </Toolbar>
               </AppBar>
         </Box>
    </Container>
  )
}
