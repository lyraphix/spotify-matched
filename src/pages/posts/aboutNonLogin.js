// Delete after integrated backend

import React, { Component } from 'react';
import { Inter, Open_Sans } from '@next/font/google'
import { List, ListItem, CardMedia, Stack, ListItemButton, ListItemText, ListItemIcon, Divider, Drawer, Link, MenuItem, Menu, Avatar, AppBar, Toolbar, Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

import makeToolBar from "./reuseables";

const inter = Inter({ subsets: ['latin'] })
const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;
const login = false;

class BounceAbout extends Component {
  render() {
    const key = Math.random(); // generate a random key
    return (
      <Bounce key={key}><Typography variant="h2Large"><b>About Us</b></Typography></Bounce>
    );
  }
}

const about = function (login) {



  return (

    <Container sx={{
      flexGrow: 1
    }}>
      <CssBaseline />
      <Box sx={{
        flexGrow: 1
      }}>
        <AppBar position="fixed" >
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
                                flex:18
                            }}></Box>
                   {/* </Box> */}
                         
                         <Button
                               variant="text"
                               size = "medium"
                               href="/posts/newaccount"
                           >
                               Sign Up
                         </Button>
                         <Box style={{
                                // width: image.width,
                                flex:0.3
                            }}></Box>
                         <Button
                               variant="contained"
                               size = "medium"
                               sx={{ color:"primary"}}
                               href="/posts/first-post"
                           >
                               Login
                         </Button>
                  </Toolbar>
               </AppBar>

        <Box sx={{ // The Whole Page
          mt: 20,
          mb: 3
        }}>
          <Box // Big Letters

            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              direction: "row"
            }}>
            {/* <Box sx ={{mt:10, ml:20, flexGrow:2}}></Box> */}
            <BounceAbout />

          </Box>
          <Box // Smaller

            sx={{
              display: "flex",
              justifyContent: "left",
              direction: "row"
            }}>
            <Stack
              direction="column"

              //divider={<Divider orientation="horizontal" flexItem />}
              spacing={2}
            >
              <Typography variant="h9"><b>

                With Musaic, it’s easy to find the right playlist customized just for you and your friends.
                Explore new genres, people, chord progression, or even choose your songs based on just your mood.
                There are millions of tracks and episodes on Spotify.


              </b></Typography>

              <Typography variant="h9"><b>


                So whether you’re behind the wheel, working out, partying or relaxing, you can use Musaic to find the best music for you.
                Choose what you want to listen to, or let our AI surprise you. With Musiac, you can blend your music tastes together or find others just like you.
                Log in with your Spotify account, and try Musiac out today!

              </b></Typography>
            </Stack>
          </Box>
        </Box>

      </Box>

    </Container>
  )
}
export default about;