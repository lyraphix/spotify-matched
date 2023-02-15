import * as React from 'react';
import { useState } from 'react';
import { Inter, Open_Sans } from '@next/font/google'
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { List, ListItem, CardMedia,Stack, ListItemButton, ListItemText, ListItemIcon, Divider, Drawer, Link, MenuItem, Menu, Avatar, AppBar, Toolbar, Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";

import makeToolBar from "./reuseables";


const inter = Inter({ subsets: ['latin'] })

export default function profile() {

    const avatar = "/hollow.jpeg"
    const username = "aHollowTest"
    const mood = "mood"

    const follower = "1352"
    const following = "25"
    const recentlylistened = "726"

    const song1 = "route to data base name song 1"
    const song2 = "placeholders"
    const song3 = "placeholders"
    const song4 = "placeholders"
    const song5 = "placeholders"

    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const closeMenu = () => {
        setAnchorEl(null);
    }

    //const UploadAndDisplayImage = () => {
    //    const [selectedImage, setSelectedImage] = useState(null);
    //}


    return (
        <Container>
            <CssBaseline />
            <Box>
                render() {
                    makeToolBar()}

                <Box
                    sx={{
                        ml: -10, mt: 12, flexGrow: 1
                    }}
                >
                    <Grid
                        container
                        direction="row"
                        justifyContent="left"
                        spacing={1}
                        alignItems="center"
                    >
                        <Grid item xs={6}

                            sx={{ flexGrow: 1, alignItems: "stretch", direction: "column", justifyContent: "left", }}>
                            <Button
                                //onClick={}
                                //sx={{ height: '250px', width: '250px' }}
                                style={{ borderRadius: 125, flexGrow: 1 }}
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
                            <Box sx={{ mt: 2, flexGrow: 1, display: 'flex' }}></Box>
                            <Stack sx={{ flexGrow: 1 }}
                                direction="row"
                                divider={<Divider orientation="vertical" flexItem />}
                                spacing={2}
                            >
                                <Box>
                                    <Typography variant='h1'> {follower}</Typography>
                                    <Typography variant='h9'> Follower</Typography>
                                </Box>
                                <Box>
                                    <Typography variant='h1'> {following}</Typography>
                                    <Typography variant='h9'> Following</Typography>
                                </Box>
                                <Box>
                                    <Typography variant='h1'> {recentlylistened}</Typography>
                                    <Typography variant='h9'>Recent</Typography>
                                </Box>
                            </Stack>

                        </Grid>
                        <Grid
                            sx={{ ml: -55, flexGrow: 1 }}>
                            <Typography variant='h1'>
                                {username}
                            </Typography>
                            <Typography variant='h10'>
                                {mood}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}
                            sx={{ flexGrow: 1, alignItems: "center", direction: "column", justifyContent: "center"}}>
                            <Button
                                style={{ borderRadius: 80, flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}

                                sx={{ color: 'black', backgroundColor: "white" }}
                            >
                                {<Typography
                                    sx={{ minHeight: '20px', minWidth: '120px' }}
                                >

                                    Follow

                                </Typography>}
                            </Button>
                        </Grid>

                    </Grid>
                </Box>
            </Box>

            <Box
                fullHeight
                sx={{
                    flexGrow: 1, mt: 10, ml: -10, display: 'flex',
                    flexGrow: 1,
                    flexDirection: "column"
                }}

            >
                <Typography
                    variant='h1'
                >

                    Featured Music

                </Typography>
                <Grid
                    container
                    direction="row"
                    justifyContent="left"
                    spacing={1}
                    alignItems="flex-start">


                    <Grid item xs={2} sx={{ flexGrow: 3 }}>
                        <Button
                            style={{ minHeight: '250px', minWidth: '250px', flexGrow: 1 }}
                            fullWidth
                            fullHeight
                            variant="text"
                            size="medium"
                            sx={{ mt: 3, color: 'forth.text', backgroundColor: 'white' }}
                            href="/posts/first-post"

                        >
                            <Grid direction="column" sx={{ mt: 2, flexGrow: 1, display: 'flex', direction: "column", justifyContent: "left", }}>

                                 {/*<CardMedia
                    component="img"
                    height="200px"
                    width= '200px'
                    image={avatar}
                    alt="Paella dish"
            /> */}
                            </Grid>
                        </Button>
                        {/* <Box  sx={{flexGrow:1, display: 'flex'}}></Box>/ */}
                    </Grid>
                    <Box sx={{ flexGrow: 1 / 2, display: 'flex' }}></Box>
                    <Grid item xs={2} sx={{ flexGrow: 3 }}>
                        <Button
                            fullWidth
                            fullHeight
                            style={{ minHeight: '250px', minWidth: '250px', flexGrow: 1 }}
                            variant="text"
                            size="medium"
                            sx={{ mt: 3, color: 'secondary.text', backgroundColor: 'white' }}
                            href="/posts/first-post"
                        >
                            <Grid direction="column" sx={{ mt: 2, flexGrow: 1, display: 'flex', direction: "column", justifyContent: "left", }}>
                                {/* <Paper > */}

                                {/* <Image style={{backgroundImage: `url(${"static/src/img/Friends.jpg"})`}}></Image> */}
                                {/* <CardMedia
                    component="img"
                    height="130"
                    image="/static/src/img/friends.png"
                    alt="Paella dish"
                /> */}
                            </Grid>


                        </Button>


                    </Grid>
                    <Box sx={{ flexGrow: 1 / 2, display: 'flex' }}></Box>


                    <Grid item xs={2} sx={{ flexGrow: 3 }}>
                        <Button
                            fullWidth
                            fullHeight
                            // style={{ 
                            //   flexGrow:1}}
                            style={{ minHeight: '250px', minWidth: '250px', flexGrow: 1 }}
                            variant="text"
                            size="medium"
                            sx={{ mt: 3, color: 'primary.text', backgroundColor: 'white' }}
                            href="/posts/first-post"
                        >
                            <Grid direction="column" sx={{ mt: 2, flexGrow: 1, display: 'flex', direction: "column", justifyContent: "left", }}>
                                {/* <Paper > */}

                                {/* <Image style={{backgroundImage: `url(${"static/src/img/Friends.jpg"})`}}></Image> */}
                                {/* <CardMedia
                    component="img"
                    height="130"
                    image="/static/src/img/friends.png"
                    alt="Paella dish"
                /> */}
                            </Grid>

                        </Button>
                    </Grid>
                    <Box sx={{ flexGrow: 1 / 2, display: 'flex' }}></Box>
                    <Grid item xs={2} sx={{ flexGrow: 3 }}>
                        <Button
                            style={{ minHeight: '250px', minWidth: '250px', flexGrow: 1 }}
                            fullWidth
                            fullHeight
                            variant="text"
                            size="medium"
                            sx={{ mt: 3, color: 'forth.text', backgroundColor: 'white' }}
                            href="/posts/first-post"

                        >
                            <Grid direction="column" sx={{ mt: 2, flexGrow: 1, display: 'flex', direction: "column", justifyContent: "left", }}>

                                {/* <CardMedia
                    component="img"
                    height="130"
                    image="/static/src/img/friends.png"
                    alt="Paella dish"
                /> */}
                            </Grid>
                        </Button>
                        {/* <Box  sx={{flexGrow:1, display: 'flex'}}></Box>/ */}
                    </Grid>
                    <Box sx={{ flexGrow: 1 }}></Box>

                </Grid>
                <Box sx={{ mt: 3, flexGrow: 1, display: 'flex' }}></Box>
                <Typography
                    variant='h1'
                >

                    Recently Listened

                </Typography>
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
                                <Typography> {song1} </Typography>
                            </Grid>
                        </Grid>

                    </Button>

                    <Button variant='h9'>
                        <Grid
                            
                        >
                            <Grid item xs={2} sx={{ flexGrow: 1 }}>
                                <Typography> {song2} </Typography>
                            </Grid>
                        </Grid>

                    </Button>

                    <Button variant='h9'>
                        <Grid
                            
                        >
                            <Grid item xs={2} sx={{ flexGrow: 1 }}>
                                <Typography> {song3} </Typography>
                            </Grid>
                        </Grid>

                    </Button>

                    <Button variant='h9'>
                        <Grid
                            
                        >
                            <Grid item xs={2} sx={{ flexGrow: 1 }}>
                                <Typography> {song4} </Typography>
                            </Grid>
                        </Grid>

                    </Button>

                    <Button variant='h9'>
                        <Grid
                            
                        >
                            <Grid item xs={2} sx={{ flexGrow: 1 }}>
                                <Typography> {song5} </Typography>
                            </Grid>
                        </Grid>

                    </Button>

                </Stack>
            </Box>


        </Container>
    )
}
