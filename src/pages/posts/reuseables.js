import * as React from 'react';
import { useState } from 'react';
import { Inter, Open_Sans } from '@next/font/google'
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider, Drawer, Link, MenuItem, Menu, Avatar, AppBar, Toolbar, Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";

const makeToolBar = function (username, avatar) {

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
                <Toolbar sx={{height: 75, backgroundColor:"background.default", borderBottom: 0.1, borderColor: "divider"}}>

                    {/* <React.Fragment key={anchorDrawer}> */}
                    <Button onClick={openDrawer}><MenuIcon></MenuIcon></Button>
                    <Drawer
                        anchor='left'
                        open={Boolean(anchorDrawer)}
                        onClose={closeDrawer}
                        
                    // onOpen={toggleDrawer(anchorDrawer, true)}
                    >
                        <Box >
                            <List >
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
                            <List>
                                <ListItem key={"Create Playlist"}>
                                    <ListItemButton>
                                        {/* <ListItemIcon> */}
                                            {/* <InboxIcon /> */}
                                        {/* </ListItemIcon> */}
                                        <ListItemText primary={"Your Playlists"} disablePadding />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem key={"Matched Playlist"} >
                                    <ListItemButton >
                                        {/* <ListItemIcon>
                                            {/* <InboxIcon /> */}
                                        {/* </ListItemIcon> */} 
                                        <ListItemText primary={"Matched Playlist"} disablePadding />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem key={"Episodes"} >
                                    <ListItemButton>
                                        {/* <ListItemIcon> */}
                                            {/* <InboxIcon /> */}
                                        {/* </ListItemIcon> */}
                                        <ListItemText primary={"Episodes"} disablePadding/>
                                    </ListItemButton>
                                </ListItem>

                            </List>
                        </Box>
                    </Drawer>
                    {/* </React.Fragment> */}
                    <Box
                        direction="row"
                        sx={{ width: 1 / 4, flexDirection: "row", flexGrow: 3 }}>
                        {/* <Typography variant='h1' sx={{ ml: 2}}>
              Spotify
            </Typography> */}
                        <Typography variant='h2' sx={{ flexGrow: 3 }}>
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
                        <MenuItem ><Link href="/posts/profile" underline="none" color="white">{'Profile'}</Link></MenuItem>
                        <MenuItem ><Link href="/" underline="none" color="white">{'Logout'}</Link></MenuItem>
                    </Menu>

                </Toolbar>
            </AppBar>
        </Box>


    )


}
export default makeToolBar;