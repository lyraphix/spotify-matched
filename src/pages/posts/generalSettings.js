import * as React from 'react';
import { useState } from 'react';
import { Inter, Open_Sans } from '@next/font/google'
import CameraIcon from '@mui/icons-material/Camera';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { List, ListItem, CardMedia, Stack, ListItemButton, ListItemText, ListItemIcon, Divider, Drawer, Link, MenuItem, Menu, Avatar, AppBar, Toolbar, Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";
import SettingsIcon from '@mui/icons-material/Settings';

import makeToolBar from "./reuseables";

const inter = Inter({ subsets: ['latin'] })

export default function profile() {

  const avatar = "/hollow.jpeg"
  const username = "aHollowTest"

  const set1 = "Names of Settings/add more later"
  const set2 = "placeholders"
  const set3 = "placeholders"
  const set4 = "placeholders"
  const set5 = "placeholders"

  return (
    <Container sx={{
      flexGrow: 1
    }}>
      <CssBaseline />
      <Box sx={{
        flexGrow: 1
      }}>
        render() {
          makeToolBar()}

        <Box sx={{ mt: 12, flexGrow: 1 }}>
          <Box
            direction="row"
            sx={{ justifyContent: "left", alignItems: 'center' }}>
            <Grid
              container
              direction="row"
              sx={{ flexGrow: 1, direction: "column", justifyContent: "left", }}>
              <Grid
                container
                direction="row"
              >
                <Box sx={{ flexGrow: 0.1 }}></Box>
                <Button
                  style={{ borderRadius: 125 }}
                  component="label"
                >
                  <input
                    type="file"
                    hidden
                    id="profilpic"
                    name="profilepic"
                  />
                  <Avatar

                    sx={{ height: '125px', width: '125px', flexGrow: 1 }}
                    size="medium" alt="UserProfile" src={avatar} />
                </Button>
                <Box sx={{ flexGrow: 0.1 }}></Box>
                <Grid
                  sx={{ mt: 5, flexGrow: 1 }}>
                  <Typography variant='h1'>
                    {username}
                  </Typography>
                  <Typography variant='h10'>
                    ㅡ.ㅡ ㅡ.ㅡ ㅡ.ㅡ ㅡ.ㅡ ㅡ.ㅡ ㅡ.ㅡ ㅡ.ㅡ ㅡ.ㅡ ㅡ.ㅡ ㅡ.ㅡ ㅡ.ㅡ ㅡ.ㅡ
                  </Typography>
                  <Box sx={{ mt: 1, flexGrow: 1 / 2, display: 'flex', direction: 'row' }}>

                    <Button variant='h10'
                      style={{ borderRadius: 80, alignItems: 'center', justifyContent: 'center', color: 'black', backgroundColor: 'white' }}
                      component="label"                      
                    >
                      <input
                          type="file"
                          hidden
                          id="profilpic"
                          name="profilepic"
                          />
                      <CameraIcon />
                      <Box sx={{ ml: 1, flexGrow: 1, display: 'flex' }}></Box>
                      <Typography variant='h10'>
                        Upload Profile Picture
                      </Typography>
                    </Button>
                    <Box sx={{ ml: 1, flexGrow: 1 / 10, display: 'flex' }}></Box>
                    <Button variant='h10'
                      style={{ borderRadius: 80, alignItems: 'center', justifyContent: 'center', color: 'black', backgroundColor: 'white' }}

                    >
                      <Typography variant='h10'>
                        Save
                      </Typography>
                    </Button>
                  </Box>


                </Grid>
              </Grid>
              <Grid container
                direction="row">
                <Box sx={{ flexGrow: 0.05 }}></Box>

                <Stack sx={{ mt: 3, flexGrow: 1 }}
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                >

                  <Box sx={{ alignItems: "center", justifyContent: "center", direction: "row" }}>
                    <Button variant='h1'
                      style={{ alignItems: 'center', justifyContent: 'center', color:'white' }}

                    >
                      <Typography variant='h1'>
                        Privacy Settings
                      </Typography>
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      display: "grid",
                      alignItems: "center",
                      justifyContent: "center",
                      direction: "row"
                    }}>
                    <Button variant='h1'
                      style={{ alignItems: 'center', justifyContent: 'center', color:'white' }}

                    >
                      <Typography variant='h1'>
                        Notifications
                      </Typography>
                    </Button>
                  </Box>
                  <Box sx={{ justifyContent: "center", alignItems: 'center' }}>
                  <Button variant='h1'
                      style={{ alignItems: 'center', justifyContent: 'center', color:'white' }}

                    >
                      <Typography variant='h1'>
                        About
                      </Typography>
                    </Button>
                  </Box>
                </Stack>
              </Grid>


            </Grid>



          </Box>
        </Box>
      </Box>

      <Box
        fullHeight
        sx={{
          flexGrow: 1, mt: 10, display: 'flex',
          flexGrow: 1,
          flexDirection: "column"
        }}

      >
        <Box sx={{ mt: 1, flexGrow: 1 / 2, display: 'flex', direction: 'row' }}>
        <SettingsIcon />
        <Box sx={{ ml: 1}}></Box>
        <Typography
          variant='h1'
        >

          General Settings

        </Typography>
          </Box>

        <Box sx={{ mt: 3, flexGrow: 1, display: 'flex' }}></Box>
        <Stack
          direction="column"
          divider={<Divider orientation="horizontal" flexItem />}
          spacing={2}
        >
          <Button variant='h9'>
            <Grid

            >
              <Grid item xs={2} sx={{ flexGrow: 1 }}>
                <Typography> {set1} </Typography>
              </Grid>
            </Grid>

          </Button>

          <Button variant='h9'>
            <Grid

            >
              <Grid item xs={2} sx={{ flexGrow: 1 }}>
                <Typography> {set2} </Typography>
              </Grid>
            </Grid>

          </Button>

          <Button variant='h9'>
            <Grid

            >
              <Grid item xs={2} sx={{ flexGrow: 1 }}>
                <Typography> {set3} </Typography>
              </Grid>
            </Grid>

          </Button>

          <Button variant='h9'>
            <Grid

            >
              <Grid item xs={2} sx={{ flexGrow: 1 }}>
                <Typography> {set4} </Typography>
              </Grid>
            </Grid>

          </Button>

          <Button variant='h9'>
            <Grid

            >
              <Grid item xs={2} sx={{ flexGrow: 1 }}>
                <Typography> {set5} </Typography>
              </Grid>
            </Grid>

          </Button>
          <Button variant='h9' sx = {{backgroundColor:'red'}}>
            <Grid

            >
              <Grid item xs={2} sx={{ flexGrow: 1 }}>
                <Typography> Delete/Deactivate Account </Typography>
              </Grid>
            </Grid>

          </Button>

        </Stack>
      </Box>


    </Container>
  )
}
