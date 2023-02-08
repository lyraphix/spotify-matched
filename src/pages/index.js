import { Inter } from '@next/font/google'
import { AppBar, Toolbar, Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";


// import { Formik, field, form} from 'formik'
// import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  function open({link}) {
    return window.open("/posts/first-post")
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
                         <Typography variant='h2' sx={{ flexGrow: 11 }}>
                           MATCHED
                         </Typography>
                   {/* </Box> */}
                         <Button
                               variant="text"
                               size = "medium"
                               sx={{ flexGrow: 1 }}
                               href="/posts/first-post"
                           >
                               Login
                         </Button>
                         <Button
                               variant="contained"
                               size = "medium"
                               href="/posts/first-post"
                           >
                               Sign Up
                         </Button>
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
