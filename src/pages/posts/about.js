import React, { Component } from 'react';
import { Inter, Open_Sans } from '@next/font/google'
import { List, ListItem, CardMedia, Stack, ListItemButton, ListItemText, ListItemIcon, Divider, Drawer, Link, MenuItem, Menu, Avatar, AppBar, Toolbar, Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

import makeToolBar from "./reuseables";

const inter = Inter({ subsets: ['latin'] })
const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

class BounceAbout extends Component {
    render() {
      const key = Math.random(); // generate a random key
      return (
        <Bounce key={key}><Typography variant="h2Large"><b>About Us</b></Typography></Bounce>
      );
    }
  }

export default function about() { 

  const words = 'With Musaic, it\’s easy to find the right music or podcast for every moment \– on your phone, your computer, your tablet and more.There are millions of tracks and episodes on Spotify. So whether you\’re behind the wheel, working out, partying or relaxing, the right music or podcast is always at your fingertips. Choose what you want to listen to, or let Spotify surprise you. You can also browse through the collections of friends, artists, and celebrities, or create a radio station and just sit back. Soundtrack your life with Spotify. Subscribe or listen for free.'

  return (

    <Container sx={{
      flexGrow: 1
    }}>
      <CssBaseline />
      <Box sx={{
        flexGrow: 1
      }}>
        {makeToolBar()}

        <Box sx={{ // The Whole Page
          mt: 15,
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
              alignItems: "center",
              justifyContent: "left",
              direction: "row"
            }}>
            {/* <Box sx ={{mt:10, ml:20, flexGrow:2}}></Box> */}
            <Typography variant="h9"><b>{words}</b></Typography>
          </Box>
        </Box>

      </Box>

    </Container>
  )
}
