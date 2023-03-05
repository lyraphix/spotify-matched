import React from 'react';
import { Container, CssBaseline, Typography, Box, Grid, Button } from "@mui/material/";


import makeToolBar from "./reuseables"; //functions

export const isMobileDevice = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
export default function Dashboard() {
  const avatar = ""
  const username = ""

  const styles = {
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
    },
    card: {
      position: 'relative',
    },
    overlay: {
      position: 'absolute',
      top: '40px',
      left: '40px'
    }
  }

  return (
    <Container >
      <CssBaseline />
      render() {//clean
        makeToolBar(username, avatar)}

      <Box sx={{ // The Whole Page
        mt: 15,
        mb: 3
      }}>
        <Box // Greeting

          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            direction: "row"
          }}>
          {/* <Box sx ={{mt:10, ml:20, flexGrow:2}}></Box> */}
          
        </Box>

        <Box // Buttons
          // fullHeight
          sx={{
            mt: 8,
            display: 'flex',
            flexGrow: 1,
            flexDirection: "column"
          }}>
          {/* <Box sx={{ flexGrow: 5, display: 'flex', flexDirection:"column" }}></Box> */}

          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="flex-start"
            sx={{ display: 'flex', }}

          >
            {/* <Box sx={{ flexGrow: 5, display: 'flex' }}></Box> */}
            <Box sx={{ flexGrow: 0.5 }}></Box>

            <Box sx={{ mb: 0.5, flexGrow: 0.5, flexGrow: 1 }}>
              <Button
                style={{ minHeight: '150px', minWidth: '200px', flexGrow: 1 }}
                fullWidth
                // fullHeight
                variant="text"
                size="medium"
                sx={{ direction: 'column', justifyContent: "center", mt: 0, color: 'secondary.text', backgroundColor: "secondary.main", alignItems: "strech", display: "flex", flexDirection: "row", objectFit: "scale-down", justifyContent: 'left' }}
                href="/posts/first-post"
              >
                {/* <Grid direction= "column" sx={{flexGrow:1, display: 'flex', alignItems: "end", direction: "column", justifyContent: "center", objectFit: "cover"}}> */}
                {/* <CardMedia
                    component="img"
                    height="130"
                    image="/static/src/img/friends.png"
                    alt="Paella dish"
                /> */}
                <img
                  sx={{ mt: 10, flexGrow: 1, objectFit: "contain", alignItems: "end" }}
                  component="img"
                  height="60"
                  src="/friends.jpg"
                // alt="Paella dish"
                />
                <Typography variant='iconFont' >Friends</Typography>

                {/* </Grid>s */}
              </Button>
              <Button
                style={{ minHeight: '205px', minWidth: '200px', flexGrow: 3, alignItems: "stretch", display: "flex", flexDirection: "row", objectFit: "scale-down", justifyContent: "left" }}
                fullWidth
                // fullHeight
                // style={{ 
                //   flexGrow:1}}
                variant="text"
                size="medium"
                sx={{ mt: 0.5, color: 'third.text', backgroundColor: "third.main", alignItems: "stretch" }}
                href="/posts/vibe-picker"
              >
                {//<Grid container direction= "column" sx={{mt:0, flexGrow:1, display: 'flex', alignItems: "stretch", direction: "column", justifyContent: "left", }}>
                }
                {/* <Paper > */}
                <Typography variant='iconFont'>Vibe</Typography>
                <Typography variant='iconFont'>Picker</Typography>

                {/* <Image style={{backgroundImage: `url(${"static/src/img/Friends.jpg"})`}}></Image> */}
                {/* <CardMedia
                    component="img"
                    height="130"
                    image="/static/src/img/friends.png"
                    alt="Paella dish"
                /> */}
              {//</Grid>
              }
            </Button>

        </Box>
        <Box sx={{ flexGrow: 0.5 }}></Box>
        <Box sx={{ mb: 0.5, flexGrow: 8, flexDirection: "row" }}>
          <Button
            fullWidth
            // fullHeight
            // style={{ 
            //   flexGrow:1}}
            style={{ minHeight: '358px', minWidth: '200px', flexGrow: 1 }}
            variant="text"
            size="medium"
            sx={{ mt: 0, color: 'forth.text', backgroundColor: "forth.main", alignItems: "stretch", display: "flex", flexDirection: "row", objectFit: "scale-down", justifyContent: "left" }}
            href="/posts/your-match"
          >
            {/* <Grid direction= "column" sx={{mt:0, flexGrow:1, display: 'flex', alignItems: "end", direction: "column", justifyContent: "center", objectFit: "cover"}}>
                  <Card styles={styles.card}> */}

            <Typography style={styles.overlay} variant='iconFont'>Your Match</Typography>

            {/* </Card>  */}
            {/* </Grid> */}

          </Button>


        </Box>
        <Box sx={{ flexGrow: 0.5, flexDirection: "row" }}></Box>
        <Box sx={{ mb: 0.5, flexGrow: 8 }}>
          <Button
            fullWidth
            // fullHeight
            // style={{ 
            //   flexGrow:1}}
            style={{ minHeight: '358px', minWidth: '200px', flexGrow: 1 }}
            variant="text"
            size="medium"
            sx={{ mt: 0, color: 'primary.text', backgroundColor: "primary.mainPage", alignItems: "stretch" }}
            href="/posts/friendmatch"
          >
            <Grid container direction="column" sx={{ mt: 2, flexGrow: 1, display: 'flex', alignItems: "stretch", direction: "column", justifyContent: "left", }}>
              {/* <Paper > */}
              <Typography variant='iconFont'>Match</Typography>
              <Typography variant='iconFont'>With</Typography>
              <Typography variant='iconFont'>Friends</Typography>


              {/* <Image style={{backgroundImage: `url(${"static/src/img/Friends.jpg"})`}}></Image> */}
              {/* <CardMedia
                    component="img"
                    height="130"
                    image="/static/src/img/friends.png"
                    alt="Paella dish"
                /> */}
            </Grid>

          </Button>
        </Box>
        <Box sx={{ flexGrow: 0.5 }}></Box>
      </Grid>
    </Box>
      </Box >

    </Container >
  )
}

