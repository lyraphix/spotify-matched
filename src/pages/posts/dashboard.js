import * as React from 'react';
import { useState } from 'react';
import { Inter, Open_Sans } from '@next/font/google'
import { Link, MenuItem, Menu, Avatar, AppBar, Toolbar, Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";

const inter = Inter({ subsets: ['latin'] })
// import { Formik, field, form} from 'formik'
// import Link from 'next/link';
export default function Dashboard() {
  
  const avatar = ""
  const username = ""

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = (event) =>{
    setAnchorEl(event.currentTarget);
  }
  const closeMenu = () =>{
    setAnchorEl(null);
  }

  return (
    <Container>
      <CssBaseline />  
      <Box >
               <AppBar position="fixed">
                  <Toolbar>
                         <Typography variant='h1' sx={{ ml: 2}}>
                           Spotify
                         </Typography>
                         <Typography variant='h2' sx={{ flexGrow: 2 }}>
                           MATCHED
                         </Typography>
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
                            <MenuItem ><Link href="" underline="none" color="white">{'Profile'}</Link></MenuItem>
                            <MenuItem ><Link href="/" underline="none" color="white">{'Logout'}</Link></MenuItem>
                          </Menu>
                    
                  </Toolbar>
               </AppBar>
         </Box>
        <Box
             sx={{
               margin: 8,
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',

               // backgroundColor: 'primary.light',
             }}>
              
        <Box sx={{mt:5}}>
          Dashboard
        </Box>
        </Box>
    </Container>
  )
}
