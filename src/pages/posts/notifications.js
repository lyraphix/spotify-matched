import React from 'react';

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
                {settingsSideBar('Notifications')}

                
            </Box>
        </Container>
    )
}