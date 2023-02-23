import * as React from 'react';
import { useState } from 'react';
import { Inter, Open_Sans } from '@next/font/google'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import SearchIcon from '@mui/icons-material/Search';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider, Drawer, Link, MenuItem, Menu, Avatar, AppBar, Toolbar, Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";

const makeToolBar = function (username, avatar, login) {

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

    return (



        <Box >
            <AppBar position="fixed">
                {/* <Toolbar sx={{height: 90, backgroundColor:"background.default", borderBottom: 0.1, borderColor: "divider"}}> */}
                    {login?
                <Toolbar sx={{height: 90, backgroundColor:"background.default"}}>
                    <Button onClick={openDrawer}><MenuIcon></MenuIcon></Button>
                    <Drawer
                        anchor='left'
                        open={Boolean(anchorDrawer)}
                        onClose={closeDrawer}
                        sx ={{color: "black"}}
                        PaperProps={{
                            sx: {
                              backgroundColor: "black",
                              color: "divider",
                              flexGrow: 1
                            }
                        }}
                    // onOpen={toggleDrawer(anchorDrawer, true)}
                    >
                        <Box sx ={{width: 180, mt: 3}}>
                            <List sx ={{ml: 1}}>
                                <ListItem key={"Home"} disablePadding >
                                    <ListItemButton href="/posts/dashboard">
                                        <ListItemIcon>
                                            <HomeIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={"Home"}/>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem key={"Search"} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <SearchIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={"Search"} />
                                    </ListItemButton>
                                </ListItem>
                                {/* <ListItem key={"Settings"} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <SettingsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={"Settings"} />
                                    </ListItemButton>
                                </ListItem> */}
                                <ListItem key={"Friends"} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Diversity3Icon />
                                        </ListItemIcon>
                                        <ListItemText primary={"Friends"} />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                            <Divider sx={{height:0.1, width: 1}}/>
                            <List sx ={{ml: 1}}>
                                <ListItem key={"Create Playlist"} disablePadding>
                                    <ListItemButton>
                                        {/* <ListItemIcon> */}
                                            {/* <InboxIcon /> */}
                                        {/* </ListItemIcon> */}
                                        <ListItemText primary={"Your Playlists"}  />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem key={"Matched Playlist"} disablePadding>
                                    <ListItemButton >
                                        {/* <ListItemIcon>
                                            {/* <InboxIcon /> */}
                                        {/* </ListItemIcon> */} 
                                        <ListItemText primary={"Matched Playlist"}  />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem key={"Episodes"} disablePadding>
                                    <ListItemButton>
                                        {/* <ListItemIcon> */}
                                            {/* <InboxIcon /> */}
                                        {/* </ListItemIcon> */}
                                        <ListItemText primary={"Episodes"} />
                                    </ListItemButton>
                                </ListItem>

                            </List>
                        </Box>
                    </Drawer>
                    {/* </React.Fragment> */}
                    <Box sx ={{flexGrow: 10}}></Box>
                    <Box
                        direction="row"
                        sx={{ width: 1 / 4, flexDirection: "row", flexGrow: 3 }}>
                        {/* <Typography variant='h1' sx={{ ml: 2}}>
              Spotify
            </Typography> */}
                        {/* <Typography variant='h2' sx={{ flexGrow: 3 }}>
                            MATCHED
                        </Typography> */}
                         <Button
                            href="/"
                            >
                            <img
                                sx={{mt: 10, flexGrow: 1, objectFit: "contain", alignItems: "end" }}
                                component="img"
                                height="60"
                                src="/icon.png"
                                // alt="Paella dish"
                            />
                        </Button>
                    </Box>
                    <Box sx ={{flexGrow: 3}}></Box>

                    <Button onClick={openMenu} sx = {{flexGrow: 1}}>
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
                        <MenuItem ><ManageAccountsIcon />
                            <Box sx={{ ml: 2 }} />
                            <Link href="/posts/profile" underline="none" color="white">Profile</Link>
                        </MenuItem>
                        {/* <MenuItem ><DashboardIcon />
                            <Box sx={{ ml: 2 }} />
                            <Link href="/posts/dashboard" underline="none" color="white">Dashboard</Link>
                        </MenuItem> */}
                        <Divider />
                        <MenuItem ><SettingsIcon/>
                            <Box sx={{ ml: 2 }} />
                            <Link href="/posts/accountoverview" underline="none" color="white">Settings</Link>
                        </MenuItem>
                        <MenuItem ><PrivacyTipIcon/>
                            <Box sx={{ ml: 2 }} />
                            <Link href="/" underline="none" color="white">Privacy Settings</Link>
                        </MenuItem>
                        <MenuItem ><LogoutIcon/>
                            <Box sx={{ ml: 2 }} />
                            <Link href="/" underline="none" color="white">Logout</Link>
                        </MenuItem>
                    </Menu>
                </Toolbar>

                    : 
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
                  </Toolbar>}

                    
            </AppBar>
        </Box>


    )


}

export default makeToolBar;

//<Box sx={{ ml: 1, flexGrow: 1, display: 'flex' }}></Box>
//<Box sx={{ mt: 3, flexGrow: 1, display: 'flex' }}></Box>

