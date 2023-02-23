import * as React from 'react';
import { useState } from 'react';
import { Inter, Open_Sans } from '@next/font/google'
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { CardMedia, Card, Image, Paper, IconButton, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider, Drawer, Link, MenuItem, Menu, Avatar, AppBar, Toolbar, Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";

import makeToolBar from "./reuseables"; //functions
import { QuestionAnswer } from '@mui/icons-material';

const inter = Inter({ subsets: ['latin'] })


// import { Formik, field, form} from 'formik'
// import Link from 'next/link';

export const isMobileDevice = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
export default function Dashboard() {
  const avatar = ""
  const username = ""

  const user1 = "user"
  const user2 = "user"
  const user3 = "user"
  const user4 = "user"
  const user5 = "user"
  const friend1 = "placeholder"
  const friend2 = "placeholder"
  const plist1 = "more placeholders"
  const plist2 = "less placeholders"

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

  const [an1, setan1] = useState(null);
  const openMenu1 = (event) => {
    setan1(event.currentTarget);
  }
  const closeMenu1 = () => {
    setan1(null);
  }
  const [an2, setan2] = useState(null);
  const openMenu2 = (event) => {
    setan2(event.currentTarget);
  }
  const closeMenu2 = () => {
    setan2(null);
  }

  // window.mobileCheck = function() {
  //   let check = false;
  //   (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  //   return check;
  // };

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
          <Typography variant="h2Large">Hi, Y/N</Typography>
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
            direction= "row"
            justifyContent="space-evenly"
            alignItems="flex-start"
            sx ={{display: 'flex',}}

          >
            {/* <Box sx={{ flexGrow: 5, display: 'flex' }}></Box> */}
            <Box sx={{ flexGrow: 0.5 }}></Box>

            <Box sx={{ mb: 0.5, flexGrow: 0.5, flexGrow: 1 }}>
              <Button
                style={{ minHeight: '150px', flexGrow: 1}}
                fullWidth
                // fullHeight
                variant="text"
                size="medium"
            sx={{ direction: 'column',   justifyContent: "center",  mt: 0, color: 'secondary.text', backgroundColor:"secondary.main", alignItems: "end", display: "flex", flexDirection: "row", objectFit: "scale-down"}}
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
                    sx={{mt: 10, flexGrow: 1, objectFit: "contain", alignItems: "end" }}
                    component="img"
                    height="60"
                    src="/friends.jpg"
                    // alt="Paella dish"
                  />
                <Typography variant='iconFont' >Friends</Typography>

                {/* </Grid>s */}
              </Button>
              <Button
                style={{ minHeight: '205px', flexGrow: 3 }}
                fullWidth
                // fullHeight
                // style={{ 
                //   flexGrow:1}}
                variant="text"
                size="medium"
                sx={{ mt: 0.5, color: 'third.text', backgroundColor:"third.main", alignItems: "stretch"}}
                href="/posts/vibe-picker"
              >
                <Grid container direction= "column" sx={{mt:0, flexGrow:1, display: 'flex', alignItems: "stretch", direction: "column", justifyContent: "left", }}>
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
                </Grid>
              </Button>
              
            </Box>
            <Box sx={{flexGrow:1}}></Box>
            <Box sx={{ mb: 0.5, flexGrow: 8, flexDirection:"row" }}>
              <Button
                fullWidth
                // fullHeight
                // style={{ 
                //   flexGrow:1}}
                style={{ minHeight: '358px', flexGrow: 1 }}
                variant="text"
                size="medium"
                sx={{ mt: 0, color: 'forth.text', backgroundColor:"forth.main", alignItems: "end", display: "flex", flexDirection: "row", objectFit: "scale-down" }}
                href="/posts/your-match"
                >
                  {/* <Grid direction= "column" sx={{mt:0, flexGrow:1, display: 'flex', alignItems: "end", direction: "column", justifyContent: "center", objectFit: "cover"}}>
                  <Card styles={styles.card}> */}
                   
                    <Typography style={styles.overlay} variant='iconFont'>Your Match</Typography>

                  {/* </Card>  */}
                {/* </Grid> */}
                
              </Button>


            </Box>
            <Box sx={{ flexGrow: 1, flexDirection:"row" }}></Box>
            <Box sx={{ mb: 0.5, flexGrow: 8 }}>
              <Button
                fullWidth
                // fullHeight
                // style={{ 
                //   flexGrow:1}}
                style={{ minHeight: '358px', flexGrow: 1 }}
                variant="text"
                size="medium"
                sx={{ mt: 0, color: 'primary.text', backgroundColor:"primary.mainPage", alignItems: "stretch"}}
                href="/posts/first-post"
              >
                 <Grid container direction= "column" sx={{mt:2, flexGrow:1, display: 'flex', alignItems: "stretch", direction: "column", justifyContent: "left", }}>
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
      </Box>

    </Container>
  )
}

