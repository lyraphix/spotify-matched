import { Inter } from '@next/font/google'
import { AppBar, Toolbar, Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";


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

// Initialize Firebase 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//const db = getFirestore(app);

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  function open({link}) {
    return window.open("/posts/first-post")
  }
  return (
    <Container>
      <CssBaseline />  
      <Box >
               <AppBar position="fixed">
                  <Toolbar>
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
        <Box
          sx={{
            mt: 20,
            ml: -15,
          }}>

          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
          >

            <Grid item xs={4}>
              <Button
                style={{ minWidth: '200px', minHeight: '40px' }}
                variant="text"
                size="medium"
                sx={{ color: 'white', fontWeight: 'bold' }}
                href="/posts/first-post"
              >
                Home
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                style={{ minWidth: '200px', minHeight: '40px' }}
                variant="text"
                size="medium"
                sx={{ flexGrow: 1, color: 'white' }}
                href="/posts/first-post"
              >
                Search
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                style={{ minWidth: '200px', minHeight: '40px' }}
                variant="text"
                size="medium"
                sx={{ flexGrow: 1, color: 'white' }}
                href="/posts/first-post"
              >
                Friends
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                style={{ minWidth: '200px', minHeight: '40px' }}
                variant="text"
                size="medium"
                sx={{ mt: 3, color: 'white' }}
                href="/posts/first-post"
              >
                Create Playlist
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                style={{ minWidth: '200px', minHeight: '40px' }}
                variant="text"
                size="medium"
                sx={{ flexGrow: 1, color: 'white' }}
                href="/posts/first-post"
              >
                Matched Playlist
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                style={{ minWidth: '200px', minHeight: '40px' }}
                variant="text"
                size="medium"
                sx={{ flexGrow: 1, color: 'white' }}
                href="/posts/first-post"
              >
                Episodes
              </Button>
            </Grid>
          </Grid>

        </Box>

        <Box>
          <Box
            sx={{
              mt: -35,
              ml: 25,

            }}>
            <Typography variant="h1">
              Personalize Top Genres
            </Typography>
          </Box>
          <Box
            sx={{
              mt: 0,
              ml: 25,

            }}>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="flex-start"
            >

              <Grid item xs={4}>
                <Button
                  style={{ minWidth: '275px', minHeight: '200px' }}
                  variant="text"
                  size="medium"
                  sx={{ mt: 3, color: 'white' }}
                  href="/posts/first-post"
                >
                  Start Matching
                </Button>
              </Grid>

              <Grid item xs={4}>
                <Button
                  style={{ minWidth: '275px', minHeight: '200px' }}
                  variant="text"
                  size="medium"
                  sx={{ mt: 3, color: 'white' }}
                  href="/posts/first-post"
                >
                  Exact Match
                </Button>
              </Grid>

              <Grid item xs={4}>
                <Button
                  style={{ minWidth: '275px', minHeight: '200px' }}
                  variant="text"
                  size="medium"
                  sx={{ mt: 3, color: 'white' }}
                  href="/posts/first-post"
                >
                  Personalized Match
                </Button>
              </Grid>

            </Grid>
          </Box>

        </Box>
    </Container>
  )
}
