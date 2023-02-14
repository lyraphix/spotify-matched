import * as React from 'react';
import { useState } from 'react';
import { Inter, Open_Sans } from '@next/font/google'
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { IconButton, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider, Drawer, Link, MenuItem, Menu, Avatar, AppBar, Toolbar, Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";

import makeToolBar from "./reuseables"; //functions
import { QuestionAnswer } from '@mui/icons-material';

const inter = Inter({ subsets: ['latin'] })


// import { Formik, field, form} from 'formik'
// import Link from 'next/link';
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

      <Box sx={{
        mt: 10,
        // ml:5,
        // mr:5,
        mb: 3
        // ml:20, 
        // alignItems:"center",
        // justify:"center", 
        // direction: "row"
      }}>
        <Box
          sx={{
            // flexGrow:1,
            // mt:10, 
            // ml:5, 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            direction: "row"
          }}>
          {/* <Box sx ={{mt:10, ml:20, flexGrow:2}}></Box> */}
          <Typography variant="h2Large">Hi, Y/N</Typography>
        </Box>
        <Box
          sx={{
            mt: 2,
            ml: 5,
            display: 'flex'

          }}>

          <Typography variant="h1">
            Personalize Top Genres
          </Typography>
          {/* <IconButton >
            <HelpOutlineIcon/>
          </IconButton> */}
        </Box>
        <Box
          fullHeight
          sx={{
            // mt: 0,
            // ml: 10,
            display: 'flex',
            flexGrow: 1,
            flexDirection: "column"
          }}>
          <Grid
            container
            spacing={2}
            // direction= {!window.mobileCheck? "row" : "column"}
            direction= "row"
            justifyContent="space-evenly"
            alignItems="flex-start"
          >

            <Box sx={{ flexGrow: 1, display: 'flex' }}></Box>
            <Grid item xs={4} sx={{ flexGrow: 3 }}>
              <Button
                style={{ minHeight: '200px', flexGrow: 1 }}
                fullWidth
                fullHeight
                // style={{ 
                //   flexGrow:1}}
                variant="text"
                size="medium"
                sx={{ mt: 3, color: 'primary.dark', backgroundColor:"primary.light"}}
                href="/posts/first-post"
              >
                {/* <Box sx={{flexGrow:1, display: 'flex'}}></Box> */}
                <Paper ></Paper>
                <Typography variant='iconFont'>Start Matching</Typography>
                {/* <Box sx={{flexGrow:1, display: 'flex'}}></Box> */}
              </Button>
              {/* <Box  sx={{flexGrow:1, display: 'flex'}}></Box>/ */}
            </Grid>
            <Box sx={{ flexGrow: 1 / 2, display: 'flex' }}></Box>
            <Grid item xs={4} sx={{ flexGrow: 3 }}>
              <Button
                fullWidth
                fullHeight
                // style={{ 
                //   flexGrow:1}}
                style={{ minHeight: '200px', flexGrow: 1 }}
                variant="text"
                size="medium"
                sx={{ mt: 3, color: 'secondary.dark', backgroundColor:"secondary.light" }}
                href="/posts/first-post"
              >
                <Typography variant='iconFont'>Exact Match</Typography>
                
              </Button>


            </Grid>
            <Box sx={{ flexGrow: 1 / 2, display: 'flex' }}></Box>


            <Grid item xs={4} sx={{ flexGrow: 3 }}>
              <Button
                fullWidth
                fullHeight
                // style={{ 
                //   flexGrow:1}}
                style={{ minHeight: '200px', flexGrow: 1 }}
                variant="text"
                size="medium"
                sx={{ mt: 3, color: 'third.dark', backgroundColor:"third.light", justifyContent: "center" }}
                href="/posts/first-post"
              >
                {/* <Box sx={{ mt: 3, color: 'white', justifyContent:"center", alignItems:"center",
                direction: "row"}}> */}
                <Typography variant='iconFont' letterSpacing={0.5}>Your Match</Typography>

                  
                  {/* </Box> */}
                
              </Button>
            </Grid>
            <Box sx={{ flexGrow: 1 }}></Box>
          </Grid>
        </Box>
      </Box>


      <Box
        sx={{
          // mt: 5,
          ml: 5,
          // mb:5,
          display: 'flex'

        }}>
        <Typography variant="h1">
          Connect with your Friends
        </Typography>
      </Box>

      <Box
        sx={{
          mb: 5,
          // ml: 5,
          display: 'flex'
        }}>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          <Grid item xs={2} sx={{ flexGrow: 3 }}>
            <Button
              fullWidth
              fullHeight
              style={{ minHeight: '130px' }}
              variant="text"
              size="medium"
              sx={{ mt: 3, color: 'info.main', backgroundColor:"third.dark" }}
              href="/posts/first-post"
            >
                <Typography variant='iconFont' letterSpacing={0.5}>{"" + user1}</Typography>

              
            </Button>
          </Grid>
          {/* <Box sx={{flexGrow:1/100}}></Box> */}

          <Grid item xs={2} sx={{ flexGrow: 3 }}>
            <Button
              fullWidth
              fullHeight
              style={{ minHeight: '130px' }}
              variant="text"
              size="medium"
              sx={{ mt: 3, color: 'info.main', backgroundColor:"secondary.dark" }}
              href="/posts/first-post"
            >
                <Typography variant='iconFont' letterSpacing={0.5}>{"" + user2}</Typography>

            </Button>
          </Grid>
          {/* <Box sx={{flexGrow:1/20}}></Box> */}

          <Grid item xs={2} sx={{ flexGrow: 3 }}>
            <Button
              fullWidth
              fullHeight
              style={{ minHeight: '130px' }}
              variant="text"
              size="medium"
              sx={{ mt: 3, color: 'info.main', backgroundColor:"primary.dark" }}
              href="/posts/first-post"
            >
                <Typography variant='iconFont' letterSpacing={0.5}>{"" + user3}</Typography>

            </Button>
          </Grid>
          {/* <Box sx={{flexGrow:1/20}}></Box> */}

          <Grid item xs={2} sx={{ flexGrow: 3 }}>
            <Button
              fullWidth
              fullHeight
              style={{ minHeight: '130px' }}
              variant="text"
              size="medium"
              sx={{ mt: 3, color: 'info.main', backgroundColor:"secondary.dark" }}
              href="/posts/first-post"
            >
                <Typography variant='iconFont' letterSpacing={0.5}>{"" + user4}</Typography>

            </Button>
          </Grid>
          {/* <Box sx={{flexGrow:1/20}}></Box> */}

          <Grid item xs={2} sx={{ flexGrow: 3 }}>
            <Button
              fullWidth
              fullHeight
              style={{ minHeight: '130px' }}
              variant="text"
              size="medium"
              sx={{ mt: 3, color: 'info.main', backgroundColor:"third.dark"}}
              href="/posts/first-post"
            >
                <Typography variant='iconFont' letterSpacing={0.5}>{"" + user5}</Typography>

            </Button>
          </Grid>
          {/* <Box sx={{flexGrow:1/10}}></Box> */}

        </Grid>
      </Box>
    </Container>
  )
}
