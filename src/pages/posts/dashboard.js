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

  const user1 = "user"
  const user2 = "user"
  const user3 = "user"
  const user4 = "user"
  const friend1 = "placeholder"
  const friend2 = "placeholder"
  const plist1 = "more placeholders"
  const plist2 = "less placeholders"

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const closeMenu = () => {
    setAnchorEl(null);
  }
  const [an1, setan1] = useState(null);
  const openMenu1 = (event) => {
    setan1(event.currentTarget);
  }
  const closeMenu1 = () => {
    setan1(null);
  }
  const [an2, setan2] = useState(null);
  const openMenu2 = (event) => {
    setan2(event.currentTarget);
  }
  const closeMenu2 = () => {
    setan2(null);
  }

  return (
    <Container>
      <CssBaseline />
      <Box >
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant='h1' sx={{ ml: 2 }}>
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
              <MenuItem ><Link href="/posts/dashboardtrial" underline="none" color="white">{'Profile'}</Link></MenuItem>
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
              onClick={openMenu1}
              style={{ minWidth: '200px', minHeight: '40px' }}
              variant="text"
              size="medium"
              sx={{ flexGrow: 1, color: 'white' }}
            //href="/posts/first-post"
            >
              Friends
            </Button>
            <Menu
              id="friendMenu"
              // aria-labelledby="demo-positioned-button"
              anchorEl={an1}
              open={Boolean(an1)}
              keepMounted
              onClose={closeMenu1}
            >
              <MenuItem ><Link href="" underline="none" color="white">{friend1}</Link></MenuItem>
              <MenuItem ><Link href="/" underline="none" color="white">{friend2}</Link></MenuItem>
            </Menu>
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
              onClick={openMenu2}
              style={{ minWidth: '200px', minHeight: '40px' }}
              variant="text"
              size="medium"
              sx={{ flexGrow: 1, color: 'white' }}
            //href="/posts/first-post"
            >
              Matched Playlist
            </Button>
            <Menu
              id="playListMenu"
              // aria-labelledby="demo-positioned-button"
              anchorEl={an2}
              open={Boolean(an2)}
              keepMounted
              onClose={closeMenu2}
            >
              <MenuItem ><Link href="" underline="none" color="white">{plist1}</Link></MenuItem>
              <MenuItem ><Link href="/" underline="none" color="white">{plist2}</Link></MenuItem>
            </Menu>
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


      <Box
        sx={{
          mt: 10,
          ml: 25,

        }}>
        <Typography variant="h1">
          Connect with your Friends
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
          <Grid item xs={2}>
            <Button
              style={{ minWidth: '150px', minHeight: '150px' }}
              variant="text"
              size="medium"
              sx={{ mt: 3, color: 'white' }}
              href="/posts/first-post"
            >
              {"" + user1}
            </Button>
          </Grid>

          <Grid item xs={2}>
            <Button
              style={{ minWidth: '150px', minHeight: '150px' }}
              variant="text"
              size="medium"
              sx={{ mt: 3, color: 'white' }}
              href="/posts/first-post"
            >
              {"" + user2}
            </Button>
          </Grid>

          <Grid item xs={2}>
            <Button
              style={{ minWidth: '150px', minHeight: '150px' }}
              variant="text"
              size="medium"
              sx={{ mt: 3, color: 'white' }}
              href="/posts/first-post"
            >
              {"" + user3}
            </Button>
          </Grid>

          <Grid item xs={2}>
            <Button
              style={{ minWidth: '150px', minHeight: '150px' }}
              variant="text"
              size="medium"
              sx={{ mt: 3, color: 'white' }}
              href="/posts/first-post"
            >
              {"" + user4}
            </Button>
          </Grid>

          <Grid item xs={2}>
            <Button
              style={{ minWidth: '150px', minHeight: '150px' }}
              variant="text"
              size="medium"
              sx={{ mt: 3, color: 'white' }}
              href="/posts/first-post"
            >
              Concerts
            </Button>
          </Grid>

        </Grid>
      </Box>
    </Container>
  )
}
