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
        main: '#608108',
        light: '#B5C68C',
        dark: '#394221',
      },
      secondary: {
        main: '#043D7A',
        light: '#92AFCE',
        dark: '#0C233B',
      },
      third: {
        main: '#A02937',
        light: '#F0D7DA',
        dark: '#3D1519',
      },
      divider: '#ffffff',
      info: {
        main:'#ffffff',
      },
      // text: {
      //   primary: '#ffffff',
      // },
      background: {
        default: '#19191B',
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
      fontSize: '1.8rem',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 150,
      fontStretch: "condensed",
      fontFamily: "cursive",
    },
    iconFont: {
      fontFamily: `"Gill Sans", sans-serif`,
      fontWeight: 500,
      fontSize: '1rem',
    },
    h3: {
      fontWeight: 5,
      fontSize: '1rem',
    },
  },
  });

  // const background = {
  //   paperContainer: {
  //       backgroundImage: `url(${"static/src/img/main.jpg"})`
  //   }
  // };

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
              
              {/* <Typography variant='h1' color={"white"}>
                Spotify
              </Typography> */}
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
                href="/posts/dashboard"
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
