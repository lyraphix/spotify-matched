
import { Divider, Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, createTheme, ThemeProvider, Button, Link } from "@mui/material/";
import { Card } from "@nextui-org/react";
import { signIn } from 'next-auth/react';

export default function FirstPost() {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        // main: '#608108',
        main: '#3eb575',
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
        main: '#ffffff',
      },
      // text: {
      //   primary: '#ffffff',
      // },
      background: {
        default: '#19191B',
        lighter: '#2A2E2C'
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

  const background = {
    paperContainer: {
      backgroundImage: `url(${"static/src/img/main.jpg"})`
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            marginButtom: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

          }}>
          <Box sx={{
            margin: 3,
            display: 'flex',
            flexDirection: 'row',
          }}>

            <Button
              href="/"
            >
              {/* <Image> */}
              <img
                sx={{ mt: 5, flexGrow: 1, objectFit: "contain", alignItems: "end" }}
                component="img"
                height="100"
                src="/logo.jpg"
              // alt="Paella dish"
              />
              {/* </Image> */}
            </Button>
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
                      <Link href="/posts/newaccount" >
                        {'Create an account'}
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ height: 0.1, width: 1, backgroundColor: "background.main" }} />
                <Button
                  onClick={() => signIn()}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  href="/posts/dashboard"
                >
                  Login with
                </Button>
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
