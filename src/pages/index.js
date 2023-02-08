import { Inter } from '@next/font/google'
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
