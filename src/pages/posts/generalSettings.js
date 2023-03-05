import * as React from 'react';
import CallMadeIcon from '@mui/icons-material/CallMade';
import DeleteIcon from '@mui/icons-material/Delete';
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import EditIcon from '@mui/icons-material/Edit';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import PostAddIcon from '@mui/icons-material/PostAdd';
import InfoIcon from '@mui/icons-material/Info';
import { Stack, Divider, Link, Avatar, Container, CssBaseline, Typography, Box, Grid, Button } from "@mui/material/";
import SettingsIcon from '@mui/icons-material/Settings';

import makeToolBar from "./reuseables";

const settingsSideBar = function (currentlocation) {

  const avatar = "/hollow.jpeg"
  const username = "aHollowTest"
  currentlocation = currentlocation.toString()

  return (

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
                  <Typography variant="iconFont">
                    {username}
                  </Typography>
                </Grid>
                <Grid
                  sx={{ mt: 5, flexGrow: 1 }}>
                  <Typography variant="h2Large" color="pink">
                    {currentlocation}
                  </Typography>
                </Grid>
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

            Settings

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
                <Link href="/posts/accountoverview" underline="hover" variant='iconFont' color='white'>
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
                <Link href="/posts/editprofile" underline="hover" variant='iconFont' color='white'>
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
                <Link href="/posts/language" underline="hover"  variant='iconFont' color='white'>
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
                <Link href="/posts/themeSettings" underline="hover"  variant='iconFont' color='white'>
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
                <Link href="/posts/notifications" underline="hover"  variant='iconFont' color='white'>
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
                <Link href="/posts/privacySettings" underline="hover"  variant='iconFont' color='white'>
                  Privacy Settings
                </Link>
              </Box>

            </Grid>
          </Grid>

          <Grid>
            <Grid item xs={2} sx={{ flexGrow: 1 }}>
              <Box sx={{ mt: 1, flexGrow: 1, display: 'flex', direction: 'row', justifyContent: "left" }}>
                <InfoIcon />
                <Box sx={{ ml: 2 }} />
                <Link href="/posts/about" underline="hover"  variant='iconFont' color='white'>
                {/* <Button href='/posts/about' underline="hover"  variant='iconFont' color='white'> */}
                  About
                </Link>
              </Box>

            </Grid>
          </Grid>

          <Grid>
            <Grid item xs={2} sx={{ flexGrow: 1 }}>
              <Box sx={{ mt: 1, flexGrow: 1, display: 'flex', direction: 'row', justifyContent: "left" }}>
                <CallMadeIcon />
                <Box sx={{ ml: 2 }} />
                <Link href="/posts/support" underline="hover"  variant='iconFont' color='white'>
                  Support Us
                </Link>
              </Box>

            </Grid>
          </Grid>

          <Grid>
            <Grid item xs={2} sx={{ flexGrow: 1 }}>
              <Box sx={{ mt: 1, flexGrow: 1, display: 'flex', direction: 'row', justifyContent: "left" }}>
                <PostAddIcon />
                <Box sx={{ ml: 2 }} />
                <Link href="https://www.gdprprivacypolicy.net/live.php?token=RYjiEytOOHcu0QGU3fMFSlUObDcusrYS" underline="hover"  variant='iconFont' color='white'>
                  Terms of Service
                </Link>
              </Box>

            </Grid>
          </Grid>

          <Grid>
            <Grid item xs={2} sx={{ flexGrow: 1 }}>
              <Box sx={{ mt: 1, flexGrow: 1, display: 'flex', direction: 'row', justifyContent: "left" }}>
                <DeleteIcon />
                <Box sx={{ ml: 2 }} />
                <Link href="#" underline="hover"  variant='iconFont' color='white'>
                  Delete Account
                </Link>
              </Box>

            </Grid>
          </Grid>



        </Stack>
      </Box>

    </Box>

  )
}
export default settingsSideBar;
