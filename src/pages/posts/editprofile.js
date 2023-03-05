import React, { Component } from 'react';
import { Inter, Open_Sans } from '@next/font/google'
import { Container, CssBaseline, Box } from "@mui/material/";

import settingsSideBar from './generalSettings';


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