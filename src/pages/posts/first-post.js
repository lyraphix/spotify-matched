// import Link from 'next/link';
// import styles from '@/styles/Home.module.css'
// import { Card, Row, Text, Input, Spacer, Button } from "@nextui-org/react";
import { Paper, Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, createTheme, ThemeProvider, Button, Link} from "@mui/material/";
import { Card } from "@nextui-org/react";

// const inter = Inter({ subsets: ['latin'] })
//  const signedIn = false;
//  const username = "";
//  const avatar = "";

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
        default: '#232222',
      },
    },
    spacing: 8,
    shape: {
      borderRadius: 4,
    },
    typography: {
      h1: {
        fontFamily: `"Gill Sans", sans-serif`,
        fontWeight: 500,
        fontSize: '2.5rem',
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: 100,
        fontStretch: "condensed",
        fontFamily: "cursive",
      },
      h3: {
        fontWeight: 5,
        fontSize: '1rem',
      },
    },
    
  });

  const background = {
    paperContainer: {
        backgroundImage: `url(${"static/src/img/main.jpg"})`
    }
  };
  // function login() {
  //   return (
  //     <login>
  //       inputs = {{}}
  //     </login>
  //   )
  // }
  // function open({link}) {
  //   return window.open("/posts/first-post")
  // }
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
              
              <Typography variant='h1' color={"white"}>
                Spotify
              </Typography>
              <Typography variant='h2' color={"white"}>
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
                    <Link href="/posts/tos" >
                    {'Terms of Service'}
                  </Link> and the <Link href="https://www.gdprprivacypolicy.net/live.php?token=RYjiEytOOHcu0QGU3fMFSlUObDcusrYS" >
                    {'Privacy Policy'}
                  </Link> of this page.</Typography>}
                  />
                </Grid>
              </Grid>
              <Button
                // onclick={signup()}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                href="/posts/dashboard1"
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
