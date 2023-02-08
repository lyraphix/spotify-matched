import * as React from 'react';
import { useState } from 'react';
import { Inter, Open_Sans } from '@next/font/google'
import { Link, MenuItem, Menu, Avatar, AppBar, Toolbar, Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";

const inter = Inter({ subsets: ['latin'] })
// import { Formik, field, form} from 'formik'
// import Link from 'next/link';
export default function Dashboard() {
  
  const avatar = ""
  const username = ""

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = (event) =>{
    setAnchorEl(event.currentTarget);
  }
  const closeMenu = () =>{
    setAnchorEl(null);
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
                         <Typography variant='h2' sx={{ flexGrow: 2 }}>
                           MATCHED
                         </Typography>
                         <Button onClick={openMenu}>
                         <Avatar alt={username} src={avatar} />
                         </Button>
                         <Menu
                            id="userMenu"
                            // aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            keepMounted
                            onClose={closeMenu}
                          >
                            <MenuItem ><Link href="" underline="none" color="white">{'Profile'}</Link></MenuItem>
                            <MenuItem ><Link href="/" underline="none" color="white">{'Logout'}</Link></MenuItem>
                          </Menu>
                    
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
              
        </Box>
        <Box
          sx={{
            mt: 10,
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
