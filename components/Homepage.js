import React from "react";
import Head from "next/head";
import { signIn } from "next-auth/react";
import { getSession, getProviders, useSession } from "next-auth/react";

import { Inter } from '@next/font/google'
import { Card, Link, AppBar, Toolbar, Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";



const inter = Inter({ subsets: ['latin'] })

const Homepage = ({ providers }) => {
  return (
    <Container>
      <CssBaseline />  
      <Box >
               <AppBar position="fixed" >
                  {/* <Toolbar sx={{height: 100, backgroundColor:"background.default", borderBottom: 0.1, borderColor: "divider"}}> */}
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
                  </Toolbar>
               </AppBar>
               <Box sx={{height: 1000, color: "background.lighter"}}></Box>
              {/* <Box sx={{height: 100, display: "flex", color: "background.lighter"}}> */}
               <Box sx={{height: 100, color: "background.lighter"}}>
                  <Box sx = {{display: "flex"}}>
                  <Box sx={{flexGrow: 3, flexDirection: "row", color: "background.lighter"}}></Box>
                {/* <Box> */}
                

                  {/* <link sx={{flexGrow: 1, flexDirection: "row",}} href="/posts/about"> About us</link> */}
                  <Link href = "/posts/aboutNonLogin" >
                      {'About us'}
                    </Link>
                  <Box sx={{flexGrow: 1, flexDirection: "row"}}></Box>
                  <Link href="/" >
                        {'People'}
                    </Link>
                  <Box sx={{flexGrow: 1, flexDirection: "row"}}></Box>
                  <Link href="/" >
                      {'Contact'}
                  </Link>
                  <Box sx={{flexGrow: 1, flexDirection: "row"}}></Box>
                  <Link href="/posts/tos" >
                      {'Terms of Service'}
                  </Link>
                {/* </Box> */}
                  
                  <Box sx={{flexGrow: 3, flexDirection: "row", color: "background.lighter"}}></Box>
                  </Box>
                  <Box sx = {{mt: 2, display: "flex"}}>
                    <Box sx={{flexGrow: 6, flexDirection: "row"}}></Box>
                    <Typography variant = "text" sx={{flexGrow: 3, flexDirection: "row",}}> @ 2023 8BITS</Typography>
                    <Box sx={{flexGrow: 3, flexDirection: "row"}}></Box>
                  </Box>
                </Box>
                
               {/* </Box> */}
         </Box>
    </Container>
  );
};

export default Homepage;
