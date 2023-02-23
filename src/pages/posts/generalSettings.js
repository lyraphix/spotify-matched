import * as React from 'react';
import { useState } from 'react';
import { Inter, Open_Sans } from '@next/font/google'
import CallMadeIcon from '@mui/icons-material/CallMade';
import CameraIcon from '@mui/icons-material/Camera';
import DeleteIcon from '@mui/icons-material/Delete';
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import EditIcon from '@mui/icons-material/Edit';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import InfoIcon from '@mui/icons-material/Info';
import { Stack, Divider, Link, Avatar, Container, CssBaseline, Typography, Box, Grid, Button } from "@mui/material/";
import SettingsIcon from '@mui/icons-material/Settings';

import makeToolBar from "./reuseables";

const inter = Inter({ subsets: ['latin'] })

export default function profile() {

  const avatar = "/hollow.jpeg"
  const username = "aHollowTest"

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
        <Box sx={{ // The Whole Page
          mt: 15,
          mb: 3
        }}>
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
                    <Typography variant="h2Large">
                      {username}
                    </Typography>
                    <Typography variant='h10'>

                    </Typography>
                    {/*<Box sx={{ mt: 1, flexGrow: 1 / 2, display: 'flex', direction: 'row' }}>

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
                  </Box>*/}


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
                        style={{ alignItems: 'center', justifyContent: 'center', color: 'white' }}
                        href="https://www.gdprprivacypolicy.net/live.php?token=RYjiEytOOHcu0QGU3fMFSlUObDcusrYS"
                      >
                        <Typography variant='iconFont'>
                          Terms of Service
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
                        style={{ alignItems: 'center', justifyContent: 'center', color: 'white' }}

                      >
                        <Typography variant='iconFont'>
                          Support Us
                        </Typography>
                        <Box sx={{ ml: 2 }} />
                        <CallMadeIcon />
                      </Button>
                    </Box>
                    <Box sx={{ justifyContent: "center", alignItems: 'center' }}>
                      <Button variant='h1'
                        style={{ alignItems: 'center', justifyContent: 'center', color: 'white' }}
                        href='/posts/about'
                      >
                        <Typography variant='iconFont'>
                          About
                        </Typography>
                        <Box sx={{ ml: 2 }} />
                        <InfoIcon />
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
            <Box sx={{ ml: 1 }}></Box>
            <Typography
              variant='h1'
            >

              General Settings

            </Typography>
          </Box>

          <Box sx={{ mt: 3, flexGrow: 1, display: 'flex' }}></Box>
          <Stack
            direction="column"
            //divider={<Divider orientation="horizontal" flexItem />}
            spacing={2}
          >
            <Grid>
              <Grid item xs={2} sx={{ flexGrow: 1 }}>
                <Box sx={{ mt: 1, flexGrow: 1, display: 'flex', direction: 'row', justifyContent: "left" }}>
                  <HomeIcon />
                  <Box sx={{ ml: 2 }} />
                  <Link href="#" underline="hover" component="button" variant='iconFont' color='white'>
                    Account Overview
                  </Link>
                </Box>

              </Grid>
            </Grid>

            <Grid>
              <Grid item xs={2} sx={{ flexGrow: 1 }}>
                <Box sx={{ mt: 1, flexGrow: 1, display: 'flex', direction: 'row', justifyContent: "left" }}>
                  <EditIcon />
                  <Box sx={{ ml: 2 }} />
                  <Link href="#" underline="hover" component="button" variant='iconFont' color='white'>
                    Edit Profile
                  </Link>
                </Box>

              </Grid>
            </Grid>

            <Grid>
              <Grid item xs={2} sx={{ flexGrow: 1 }}>
                <Box sx={{ mt: 1, flexGrow: 1, display: 'flex', direction: 'row', justifyContent: "left" }}>
                  <LanguageIcon />
                  <Box sx={{ ml: 2 }} />
                  <Link href="#" underline="hover" component="button" variant='iconFont' color='white'>
                    Language
                  </Link>
                </Box>

              </Grid>
            </Grid>


            <Grid>
              <Grid item xs={2} sx={{ flexGrow: 1 }}>
                <Box sx={{ mt: 1, flexGrow: 1, display: 'flex', direction: 'row', justifyContent: "left" }}>
                  <ColorLensIcon />
                  <Box sx={{ ml: 2 }} />
                  <Link href="#" underline="hover" component="button" variant='iconFont' color='white'>
                    Theme
                  </Link>
                </Box>

              </Grid>
            </Grid>


            <Grid>
              <Grid item xs={2} sx={{ flexGrow: 1 }}>
                <Box sx={{ mt: 1, flexGrow: 1, display: 'flex', direction: 'row', justifyContent: "left" }}>
                  <NotificationsActiveIcon />
                  <Box sx={{ ml: 2 }} />
                  <Link href="#" underline="hover" component="button" variant='iconFont' color='white'>
                    Notifications
                  </Link>
                </Box>

              </Grid>
            </Grid>


            <Grid>
              <Grid item xs={2} sx={{ flexGrow: 1 }}>
                <Box sx={{ mt: 1, flexGrow: 1, display: 'flex', direction: 'row', justifyContent: "left" }}>
                  <PrivacyTipIcon />
                  <Box sx={{ ml: 2 }} />
                  <Link href="#" underline="hover" component="button" variant='iconFont' color='white'>
                    Privacy
                  </Link>
                </Box>

              </Grid>
            </Grid>


            <Grid>
              <Grid item xs={2} sx={{ flexGrow: 1 }}>
                <Box sx={{ mt: 1, flexGrow: 1, display: 'flex', direction: 'row', justifyContent: "left" }}>
                  <DeleteIcon />
                  <Box sx={{ ml: 2 }} />
                  <Link href="#" underline="hover" component="button" variant='iconFont' color='white'>
                    Delete Account
                  </Link>
                </Box>

              </Grid>
            </Grid>



          </Stack>
        </Box>

      </Box>
    </Container>
  )
}
