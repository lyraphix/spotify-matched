import * as React from 'react';
import { Inter} from '@next/font/google'
import { IconButton,  Container, CssBaseline, Typography, Box, TextField, Button } from "@mui/material/";

import makeToolBar from "./reuseables"; //functions
import { GroupAdd} from '@mui/icons-material';

export default function FriendMatch() {
  const login = true;
  const avatar = ""
  const username = ""
  const clicked = ""

  const handleClick = () =>{

  }

  return (
    <Container >
      <CssBaseline />
      render() {//clean
        makeToolBar(username, avatar, login)}

<Box sx={{
        mt: 15,
        mb: 3
      }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            direction: "row"
          }}>
          <Typography variant="h2Large" fontSize={'3.5rem'}>Friends Match</Typography>
        </Box>
        <Box
          // fullHeights
          sx={{
            mt: 5,
            ml: 5,
            mr: 2,

            display: 'flex',
            flexGrow: 1,
            flexDirection: "row",
            alignItems: "center",
          }}>
          <Box sx={{ flexGrow:1, flexDirection:"row" }}></Box>
          <Typography variant="text" >Your Link</Typography>
          <TextField
                    required
                    // fullWidth
                    name="token1"
                    label="User 1 Playlist Token"
                    type="token1"
                    id="token1"
                    sx = {{flexGrow: 1,alignSelf: "center"}}
                  />
           <Box sx={{ flexGrow:1, flexDirection:"row" }}></Box>
          
        </Box>
        {/* <Box
          // fullHeights
          sx={{
            mt: 5,
            ml: 5,
            mr: 2,

            display: 'flex',
            flexGrow: 1,
            flexDirection: "row",
            alignItems: "center",
          }}>
          <Box sx={{ flexGrow:1, flexDirection:"row" }}></Box>
          <TextField
                    required
                    // fullWidth
                    name="token2"
                    label="User 2 Playlist Token"
                    type="token2"
                    id="token2"
                    sx = {{flexGrow: 1,alignSelf: "center"}}
                  />
           <Box sx={{ flexGrow:1, flexDirection:"row" }}></Box>
          
        </Box> */}
        <Box
          // fullHeights
          sx={{
            mt: 5,
            ml: 5,
            mr: 2,

            display: 'flex',
            flexGrow: 1,
            flexDirection: "row",
            alignItems: "center",
          }}>
          <Box sx={{ flexGrow:1, flexDirection:"row" }}></Box>
          <IconButton sx={{ flexDirection:"row" }}>
            <GroupAdd/>
          </IconButton>
           <Box sx={{ flexGrow:1, flexDirection:"row" }}></Box>
          
        </Box>
        <Box
          // fullHeight
          sx={{
            mt:5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            direction: "row"
          }}>
            <Button
                               variant="contained"
                               size = "medium"
                              //  href=""
                           >
                               Generate Playlist 
                         </Button>
        </Box>
      </Box>
       
      
    </Container>
  )
}

