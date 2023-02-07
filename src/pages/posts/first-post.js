// import Link from 'next/link';
// import styles from '@/styles/Home.module.css'
// import { Card, Row, Text, Input, Spacer, Button } from "@nextui-org/react";
import { Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, createTheme, ThemeProvider, Button, Link} from "@mui/material/";
import { Card } from "@nextui-org/react";

const mongoose = require('mongoose');
const User = require('.models/user'); 

const db = 'mongodb+srv://data:data8bits@cluster0.4fmz5wr.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology:true})
  .then((result) => console.log('connected to db'))
  .catch((err) => console.log(err));

  function signup() {
    const user_name = document.getElementById('email');
    const password_unhashed = document.getElementById('password');
  
    app.get('/add-user', (req,res) => {
      const user = new User({
        username: user_name,
        passwordkey: password_unhashed
      });
    
      user.save()
      .then((result) => {
          res.send(result)
      })
      .catch((err) => {
        HTMLFormControlsCollection.log(err);
      });
    })
  }
    
export default function FirstPost() {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#24da54',
        light: '#b3eaa9',
        dark: '#0c3b19',
      },
      secondary: {
        main: '#7574ff',
        light: '#5756b5',
        dark: '#1b2d4a',
      },
      divider: 'rgba(255,255,255,0.12)',
      info: {
        main:'#ffffff',
      },
      background: {
        default: '#cbcbcb',
      },
    },
    spacing: 8,
    shape: {
      borderRadius: 4,
    },
    typography: {
      h1: {
        fontFamily: `"Gill Sans", sans-serif`,
        fontWeight: 100,
        fontSize: '2.5rem',
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: 10,
        fontStretch: "condensed",
        fontFamily: "cursive",
      },
      h3: {
        fontWeight: 5,
        fontSize: '1rem',
      },
    },
    
  });
  function login() {
    return (
      <login>
        inputs = {{}}
      </login>
    )
  }
  function open({link}) {
    return window.open("/posts/first-post")
  }
  return (
    <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
          <CssBaseline />   
          <Box
          sx={{
              marginTop: 10,
              marginButtom: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              // backgroundColor: 'primary.light',
            }}>    
            <Box sx={{
              margin: 5,
              display: 'flex',
              flexDirection: 'row',
            }}>
              
              <Typography variant='h1' color={"info"}>
                Spotify
              </Typography>
              <Typography variant='h2' color={"info"}>
                MATCHED
              </Typography>
              <></>
            </Box>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              // backgroundColor: 'primary.light',
            }}
          >
            
            <Box
            sx={{
              margin: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              // backgroundColor: 'primary.light',
            }}>
            <Typography variant="h1">
              Login
            </Typography>
            {/* onSubmit={handleSubmit}  */}
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label={<Typography variant='h3'>I accept the 
                    <Link href="https://www.termsofservicegenerator.net/live.php?token=HvXPylMhj0isjb0BWhdDDjTGyqHLDEMR" >
                    {'Terms of Service'}
                  </Link> and the <Link href="https://www.gdprprivacypolicy.net/live.php?token=RYjiEytOOHcu0QGU3fMFSlUObDcusrYS" >
                    {'Privacy Policy'}
                  </Link> of this page.</Typography>}
                  />
                </Grid>
              </Grid>
              <Button
                onclick="signup();"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                <Typography variant='h3' color="info.main">
                  <Link href="/" >
                    {'Back to last page'}
                  </Link>
                  </Typography>
                </Grid>
              </Grid>
              <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // backgroundColor: 'primary.light',
              }}></Box>
            </Box>
            </Box>
          </Card>
          </Box> 
          </Container>
      </ThemeProvider>
    )
}
