import * as React from 'react';
import { useState } from 'react';
import { Inter, Open_Sans } from '@next/font/google'
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider, Drawer, Link, MenuItem, Menu, Avatar, AppBar, Toolbar, Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";

import makeToolBar from "./reuseables"; //functions

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
    <Container >
      <CssBaseline />
      render() {//clean
        makeToolBar(username, avatar)}

      <Box sx={{
        mt: 10,
        // ml:5,
        // mr:5,
        mb: 5
        // ml:20, 
        // alignItems:"center",
        // justify:"center", 
        // direction: "row"
      }}>
        <Box
          sx={{
            // flexGrow:1,
            // mt:10, 
            // ml:5, 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            direction: "row"
          }}>
          {/* <Box sx ={{mt:10, ml:20, flexGrow:2}}></Box> */}
          <Typography variant="h2">You can just remove the code instead of commenting out if its margin stuff</Typography>
        </Box>
        <Box
          sx={{
            mt: 5,
            ml: 5,
            display: 'flex'

          }}>

          <Typography variant="h1">
            Personalize Top Genres
          </Typography>
        </Box>
        <Box
          fullHeight
          sx={{
            // mt: 0,
            // ml: 10,
            display: 'flex',
            flexGrow: 1,
            flexDirection: "column"
          }}>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="flex-start"
          >

            <Box sx={{ flexGrow: 1, display: 'flex' }}></Box>
            <Grid item xs={4} sx={{ flexGrow: 3 }}>
              <Button
                style={{ minHeight: '200px', flexGrow: 1 }}
                fullWidth
                fullHeight
                // style={{ 
                //   flexGrow:1}}
                variant="text"
                size="medium"
                sx={{ mt: 3, color: 'white' }}
                href="/posts/first-post"
              >
                {/* <Box sx={{flexGrow:1, display: 'flex'}}></Box> */}
                Start Matching
                {/* <Box sx={{flexGrow:1, display: 'flex'}}></Box> */}
              </Button>
            </Grid>
            <Box sx={{ flexGrow: 1 / 2, display: 'flex' }}></Box>
            <Grid item xs={4} sx={{ flexGrow: 3 }}>
              <Button
                fullWidth
                fullHeight
                // style={{ 
                //   flexGrow:1}}
                style={{ minHeight: '200px', flexGrow: 1 }}
                variant="text"
                size="medium"
                sx={{ mt: 3, color: 'white' }}
                href="/posts/first-post"
              >
                Exact Match
              </Button>


            </Grid>
            <Box sx={{ flexGrow: 1 / 2, display: 'flex' }}></Box>


            <Grid item xs={4} sx={{ flexGrow: 3 }}>
              <Button
                fullWidth
                fullHeight
                // style={{ 
                //   flexGrow:1}}
                style={{ minHeight: '200px', flexGrow: 1 }}
                variant="text"
                size="medium"
                sx={{ mt: 3, color: 'white', justifyContent: "center" }}
                href="/posts/first-post"
              >
                Personalized Match
              </Button>
            </Grid>
            <Box sx={{ flexGrow: 1 }}></Box>
          </Grid>
        </Box>
      </Box>


      <Box
        sx={{
          // mt: 5,
          ml: 5,
          // mb:5,
          display: 'flex'

        }}>
        <Typography variant="h1">
          Connect with your Friends
        </Typography>
      </Box>

      <Box
        sx={{
          mb: 5,
          // ml: 5,
          display: 'flex'
        }}>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          <Grid item xs={2} sx={{ flexGrow: 3 }}>
            <Button
              fullWidth
              fullHeight
              style={{ minHeight: '130px' }}
              variant="text"
              size="medium"
              sx={{ mt: 3, color: 'white' }}
              href="/posts/first-post"
            >
              {"" + user1}
            </Button>
          </Grid>

          <Grid item xs={2} sx={{ flexGrow: 3 }}>
            <Button
              fullWidth
              fullHeight
              style={{ minHeight: '130px' }}
              variant="text"
              size="medium"
              sx={{ mt: 3, color: 'white' }}
              href="/posts/first-post"
            >
              {"" + user2}
            </Button>
          </Grid>

          <Grid item xs={2} sx={{ flexGrow: 3 }}>
            <Button
              fullWidth
              fullHeight
              style={{ minHeight: '130px' }}
              variant="text"
              size="medium"
              sx={{ mt: 3, color: 'white' }}
              href="/posts/first-post"
            >
              {"" + user3}
            </Button>
          </Grid>

          <Grid item xs={2} sx={{ flexGrow: 3 }}>
            <Button
              fullWidth
              fullHeight
              style={{ minHeight: '130px' }}
              variant="text"
              size="medium"
              sx={{ mt: 3, color: 'white' }}
              href="/posts/first-post"
            >
              {"" + user4}
            </Button>
          </Grid>

          <Grid item xs={2} sx={{ flexGrow: 3 }}>
            <Button
              fullWidth
              fullHeight
              style={{ minHeight: '130px' }}
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
