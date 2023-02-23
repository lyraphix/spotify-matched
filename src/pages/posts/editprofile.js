import React, { Component } from 'react';
import { Inter, Open_Sans } from '@next/font/google'
import { List, ListItem, CardMedia, Stack, ListItemButton, ListItemText, ListItemIcon, Divider, Drawer, Link, MenuItem, Menu, Avatar, AppBar, Toolbar, Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

import makeToolBar from "./reuseables";
import settingsSideBar from './generalSettings';

const inter = Inter({ subsets: ['latin'] })

export default function accountoverview() {


    return (

        <Container sx={{
            flexGrow: 1
        }}>
            <CssBaseline />
            <Box sx={{
                flexGrow: 1
            }}>
                {settingsSideBar('Edit Profile')}

                
            </Box>
        </Container>
    )
}