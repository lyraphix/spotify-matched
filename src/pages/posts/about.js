import React, { Component } from 'react';
import { Stack,Container, CssBaseline, Typography, Box} from "@mui/material/";
import makeToolBar from "./reuseables";

const about = function (login) {



  return (

    <Container sx={{
      flexGrow: 1
    }}>
      <CssBaseline />
      <Box sx={{
        flexGrow: 1
      }}>
        {makeToolBar(login)}

        <Box sx={{ // The Whole Page
          mt: 20,
          mb: 3
        }}>
          <Box // Big Letters

            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              direction: "row"
            }}>
            {/* <Box sx ={{mt:10, ml:20, flexGrow:2}}></Box> */}
            <Typography variant="h2Large"><b>About Us</b></Typography>

          </Box>
          <Box // Smaller

            sx={{
              display: "flex",
              justifyContent: "left",
              direction: "row"
            }}>
            <Stack
              direction="column"

              //divider={<Divider orientation="horizontal" flexItem />}
              spacing={2}
            >
              <Typography variant="h9"><b>

                With Musaic, it’s easy to find the right playlist customized just for you and your friends.
                Explore new genres, people, chord progression, or even choose your songs based on just your mood.
                There are millions of tracks and episodes on Spotify.


              </b></Typography>

              <Typography variant="h9"><b>


                So whether you’re behind the wheel, working out, partying or relaxing, you can use Musaic to find the best music for you.
                Choose what you want to listen to, or let our AI surprise you. With Musiac, you can blend your music tastes together or find others just like you.
                Log in with your Spotify account, and try Musiac out today!

              </b></Typography>
            </Stack>
          </Box>
        </Box>

      </Box>

    </Container>
  )
}
export default about;