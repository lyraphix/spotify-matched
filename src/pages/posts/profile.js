import * as React from 'react';
import { useState } from 'react';
import { Inter, Open_Sans } from '@next/font/google'
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider, Drawer, Link, MenuItem, Menu, Avatar, AppBar, Toolbar, Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";

import makeToolBar from "./reuseables";


const inter = Inter({ subsets: ['latin'] })

export default function profile() {

    const avatar = "/hollow.jpeg"
    const username = "aHollowTest"



    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const closeMenu = () => {
        setAnchorEl(null);
    }

    const UploadAndDisplayImage = () => {
        const [selectedImage, setSelectedImage] = useState(null);
    }


    return (
        <Container>
            <CssBaseline />
            <Box>
                render() {
                    makeToolBar()}

                <Box
                    sx={{
                        ml: -10, mt: 15
                    }}
                >
                    <Grid
                        container
                        direction="column"
                        justifyContent="left"
                        spacing={2}
                        alignItems="center"
                    >
                        <Grid item xs={4}>
                            <Button
                                //onClick={}
                                //sx={{ height: '250px', width: '250px' }}
                                style={{ borderRadius: 245 }}
                                component="label"
                            >

                                <input
                                    type="file"
                                    hidden
                                />
                                <Avatar

                                    sx={{ height: '250px', width: '250px' }}
                                    size="medium" alt="UserProfile" src={avatar} />
                            </Button>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant='h1'>
                                {username}
                            </Typography>
                        </Grid>




                    </Grid>



                </Box>


            </Box>
        </Container>
    )
}