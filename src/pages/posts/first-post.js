import Link from 'next/link';
// import styles from '@/styles/Home.module.css'
// import { Card, Row, Text, Input, Spacer, Button } from "@nextui-org/react";
import { Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";


export default function FirstPost() {
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
    // <ThemeProvider>
          <Container component="main" maxWidth="xs">
          <CssBaseline />        
          <Box
            sx={{
              marginTop: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              // backgroundColor: 'primary.light',
            }}
          >
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
                    label={<Typography variant='h3'>I accept the <Link href="/tos" color="info">
                    {'Terms of Service'}
                  </Link> of this page.</Typography>}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                <Typography variant='h3'><Link href="/" color="info">
                    {'Back to last page'}
                  </Link></Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
          </Container>
        // </ThemeProvider>
    )
}
