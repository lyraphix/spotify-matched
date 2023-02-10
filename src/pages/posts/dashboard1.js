import * as React from 'react';
import { useState } from 'react';
import { Inter, Open_Sans } from '@next/font/google'
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider, Drawer, Link, MenuItem, Menu, Avatar, AppBar, Toolbar, Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";

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
  const [anchorDrawer, setAnchorDrawer] = useState(null);
  const openDrawer = (event) => {
    setAnchorDrawer(event.currentTarget);
  }
  const closeDrawer = () => {
    setAnchorDrawer(null);
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
    <Container >
      <CssBaseline />
      <Box >
        <AppBar position="fixed">
          <Toolbar>
          
          {/* <React.Fragment key={anchorDrawer}> */}
            <Button onClick={openDrawer}><MenuIcon></MenuIcon></Button>
            <Drawer
              anchor='left'
              open={Boolean(anchorDrawer)}
              onClose={closeDrawer}
              // onOpen={toggleDrawer(anchorDrawer, true)}
            >
              <Box>
              <List>
                    <ListItem key={"Home"} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <InboxIcon />/
                        </ListItemIcon>
                        <ListItemText primary={"Home"} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem key={"Search"} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <InboxIcon />/
                        </ListItemIcon>
                        <ListItemText primary={"Search"} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem key={"Friends"} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <InboxIcon />/
                        </ListItemIcon>
                        <ListItemText primary={"Friends"} />
                      </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <List>
                <ListItem key={"Create Playlist"} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Create Playlist"} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem key={"Matched Playlist"} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Matched Playlist"} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem key={"Episodes"} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Episodes"} />
                      </ListItemButton>
                    </ListItem>

                </List>
              </Box>
            </Drawer>
          {/* </React.Fragment> */}
            <Box
            direction="row"
            sx = {{width: 1/4, flexDirection:"row", flexGrow: 3}}>
            {/* <Typography variant='h1' sx={{ ml: 2}}>
              Spotify
            </Typography> */}
            <Typography variant='h2' sx={{ flexGrow: 3}}>
              MATCHED
            </Typography>
            </Box>
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
      {/* <Box
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

      </Box> */}

      <Box sx ={{
          mt:10, 
          // ml:5,
          // mr:5,
          mb:5
          // ml:20, 
          // alignItems:"center",
          // justify:"center", 
          // direction: "row"
          }}>
        <Box
        sx ={{
          // flexGrow:1,
          // mt:10, 
          // ml:5, 
          display:"flex",
          alignItems:"center",
          justifyContent:"center", 
          direction: "row"}}>
        {/* <Box sx ={{mt:10, ml:20, flexGrow:2}}></Box> */}
        <Typography variant="h2">Hi, you are annoying today!</Typography>
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
            flexGrow:1,
            flexDirection:"column"
          }}>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="flex-start"
          >
            
            <Box sx={{flexGrow:1, display: 'flex'}}></Box>
            <Grid item xs={4} sx={{flexGrow:3}}>
              <Button
                style={{ minHeight: '200px', flexGrow:1}}
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
            <Box sx={{flexGrow:1/2, display: 'flex'}}></Box>
            <Grid item xs={4} sx={{flexGrow:3}}>
              <Button
              fullWidth
              fullHeight
                // style={{ 
                //   flexGrow:1}}
                style={{ minHeight: '200px', flexGrow:1}}
                variant="text"
                size="medium"
                sx={{ mt: 3, color: 'white' }}
                href="/posts/first-post"
              >
                Exact Match
              </Button>
            

            </Grid>
            <Box sx={{flexGrow:1/2, display: 'flex'}}></Box>


            <Grid item xs={4} sx={{flexGrow:3}}>
              <Button
              fullWidth
              fullHeight
                // style={{ 
                //   flexGrow:1}}
                style={{ minHeight: '200px', flexGrow:1}}
                variant="text"
                size="medium"
                sx={{ mt: 3, color: 'white', justifyContent:"center"}}
                href="/posts/first-post"
              >
                Personalized Match
              </Button>
            </Grid>
            <Box sx={{flexGrow:1}}></Box>
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
          spacing = {2}
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          <Grid item xs={2} sx={{flexGrow:3}}>
            <Button
            fullWidth
            fullHeight
              style={{minHeight: '130px' }}
              variant="text"
              size="medium"
              sx={{ mt: 3, color: 'white' }}
              href="/posts/first-post"
            >
              {"" + user1}
            </Button>
          </Grid>

          <Grid item xs={2} sx={{flexGrow:3}}>
            <Button
            fullWidth
            fullHeight
              style={{minHeight: '130px' }}
              variant="text"
              size="medium"
              sx={{ mt: 3, color: 'white' }}
              href="/posts/first-post"
            >
              {"" + user2}
            </Button>
          </Grid>

          <Grid item xs={2} sx={{flexGrow:3}}>
            <Button
            fullWidth
            fullHeight
              style={{minHeight: '130px' }}
              variant="text"
              size="medium"
              sx={{ mt: 3, color: 'white' }}
              href="/posts/first-post"
            >
              {"" + user3}
            </Button>
          </Grid>

          <Grid item xs={2} sx={{flexGrow:3}}>
            <Button
            fullWidth
            fullHeight
              style={{minHeight: '130px' }}
              variant="text"
              size="medium"
              sx={{ mt: 3, color: 'white' }}
              href="/posts/first-post"
            >
              {"" + user4}
            </Button>
          </Grid>

          <Grid item xs={2} sx={{flexGrow:3}}>
            <Button
            fullWidth
            fullHeight
              style={{minHeight: '130px' }}
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
