"use strict";
exports.id = 234;
exports.ids = [234];
exports.modules = {

/***/ 2234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8281);
/* harmony import */ var _mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3365);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9801);
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3467);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7235);
/* harmony import */ var _mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_PrivacyTip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6675);
/* harmony import */ var _mui_icons_material_PrivacyTip__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PrivacyTip__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8017);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_Diversity3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1808);
/* harmony import */ var _mui_icons_material_Diversity3__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Diversity3__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(419);
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material___WEBPACK_IMPORTED_MODULE_10__);












const makeToolBar = function(username, avatar, login) {
//     const [anchorEl, setAnchorEl] = useState(null);
//     const openMenu = (event) => {
//         setAnchorEl(event.currentTarget);
//     }
//     const closeMenu = () => {
//         setAnchorEl(null);
//     }
//     const [anchorDrawer, setAnchorDrawer] = useState(null);
//     const openDrawer = (event) => {
//         setAnchorDrawer(event.currentTarget);
//     }
//     const closeDrawer = () => {
//         setAnchorDrawer(null);
//     }
//     return (
//         <Box >
//             <AppBar position="fixed">
//                 {/* <Toolbar sx={{height: 90, backgroundColor:"background.default", borderBottom: 0.1, borderColor: "divider"}}> */}
//                     {/* {login? */}
//                 <Toolbar sx={{height: 90, backgroundColor:"background.default"}}>
//                     <Button onClick={openDrawer}><MenuIcon></MenuIcon></Button>
//                     <Drawer
//                         anchor='left'
//                         open={Boolean(anchorDrawer)}
//                         onClose={closeDrawer}
//                         sx ={{color: "black"}}
//                         PaperProps={{
//                             sx: {
//                               backgroundColor: "black",
//                               color: "divider",
//                               flexGrow: 1
//                             }
//                         }}
//                     // onOpen={toggleDrawer(anchorDrawer, true)}
//                     >
//                         <Box sx ={{width: 180, mt: 3}}>
//                             <List sx ={{ml: 1}}>
//                                 <ListItem key={"Home"} disablePadding >
//                                     <ListItemButton href="/posts/dashboard">
//                                         <ListItemIcon>
//                                             <HomeIcon />
//                                         </ListItemIcon>
//                                         <ListItemText primary={"Home"}/>
//                                     </ListItemButton>
//                                 </ListItem>
//                                 <ListItem key={"Search"} disablePadding>
//                                     <ListItemButton>
//                                         <ListItemIcon>
//                                             <SearchIcon />
//                                         </ListItemIcon>
//                                         <ListItemText primary={"Search"} />
//                                     </ListItemButton>
//                                 </ListItem>
//                                 {/* <ListItem key={"Settings"} disablePadding>
//                                     <ListItemButton>
//                                         <ListItemIcon>
//                                             <SettingsIcon />
//                                         </ListItemIcon>
//                                         <ListItemText primary={"Settings"} />
//                                     </ListItemButton>
//                                 </ListItem> */}
//                                 <ListItem key={"Friends"} disablePadding>
//                                     <ListItemButton>
//                                         <ListItemIcon>
//                                             <Diversity3Icon />
//                                         </ListItemIcon>
//                                         <ListItemText primary={"Friends"} />
//                                     </ListItemButton>
//                                 </ListItem>
//                             </List>
//                             <Divider sx={{height:0.1, width: 1}}/>
//                             <List sx ={{ml: 1}}>
//                                 <ListItem key={"Create Playlist"} disablePadding>
//                                     <ListItemButton>
//                                         {/* <ListItemIcon> */}
//                                             {/* <InboxIcon /> */}
//                                         {/* </ListItemIcon> */}
//                                         <ListItemText primary={"Your Playlists"}  />
//                                     </ListItemButton>
//                                 </ListItem>
//                                 <ListItem key={"Matched Playlist"} disablePadding>
//                                     <ListItemButton >
//                                         {/* <ListItemIcon>
//                                             {/* <InboxIcon /> */}
//                                         {/* </ListItemIcon> */} 
//                                         <ListItemText primary={"Matched Playlist"}  />
//                                     </ListItemButton>
//                                 </ListItem>
//                                 <ListItem key={"Episodes"} disablePadding>
//                                     <ListItemButton>
//                                         {/* <ListItemIcon> */}
//                                             {/* <InboxIcon /> */}
//                                         {/* </ListItemIcon> */}
//                                         <ListItemText primary={"Episodes"} />
//                                     </ListItemButton>
//                                 </ListItem>
//                             </List>
//                         </Box>
//                     </Drawer>
//                     {/* </React.Fragment> */}
//                     <Box sx ={{flexGrow: 10}}></Box>
//                     <Box
//                         direction="row"
//                         sx={{ width: 1 / 4, flexDirection: "row", flexGrow: 3 }}>
//                         {/* <Typography variant='h1' sx={{ ml: 2}}>
//               Spotify
//             </Typography> */}
//                         {/* <Typography variant='h2' sx={{ flexGrow: 3 }}>
//                             MATCHED
//                         </Typography> */}
//                          <Button
//                             href="/"
//                             >
//                             <img
//                                 sx={{mt: 10, flexGrow: 1, objectFit: "contain", alignItems: "end" }}
//                                 component="img"
//                                 height="60"
//                                 src="/icon.png"
//                                 // alt="Paella dish"
//                             />
//                         </Button>
//                     </Box>
//                     <Box sx ={{flexGrow: 3}}></Box>
//                     <Button onClick={openMenu} sx = {{flexGrow: 1}}>
//                         <Avatar alt={username} src={avatar} />
//                     </Button>
//                     <Menu
//                         id="userMenu"
//                         // aria-labelledby="demo-positioned-button"
//                         anchorEl={anchorEl}
//                         open={Boolean(anchorEl)}
//                         keepMounted
//                         onClose={closeMenu}
//                     >
//                         <MenuItem ><ManageAccountsIcon />
//                             <Box sx={{ ml: 2 }} />
//                             <Link href="/posts/profile" underline="none" color="white">Profile</Link>
//                         </MenuItem>
//                         {/* <MenuItem ><DashboardIcon />
//                             <Box sx={{ ml: 2 }} />
//                             <Link href="/posts/dashboard" underline="none" color="white">Dashboard</Link>
//                         </MenuItem> */}
//                         <Divider />
//                         <MenuItem ><SettingsIcon/>
//                             <Box sx={{ ml: 2 }} />
//                             <Link href="/posts/accountoverview" underline="none" color="white">Settings</Link>
//                         </MenuItem>
//                         <MenuItem ><PrivacyTipIcon/>
//                             <Box sx={{ ml: 2 }} />
//                             <Link href="/" underline="none" color="white">Privacy Settings</Link>
//                         </MenuItem>
//                         <MenuItem ><LogoutIcon/>
//                             <Box sx={{ ml: 2 }} />
//                             <Link href="/" underline="none" color="white">Logout</Link>
//                         </MenuItem>
//                     </Menu>
//                 </Toolbar>
//                     {/* : 
//                     <Toolbar sx={{height: 110, backgroundColor:"background.default"}}>
//                       {/* <Box sx = {{flexGrow: 1}}></Box> */}
//                          {/* <Typography variant='h1' sx={{ ml: 2}}>
//                            Spotify
//                          </Typography> */}
//                          {/* <Button
//                             href="/"
//                             >
//                         {/* <Image> */}
//                             {/* <img
//                                 sx={{mt: 10, flexGrow: 1, objectFit: "contain", alignItems: "end" }}
//                                 component="img"
//                                 height="80"
//                                 src="/logo.jpg"
//                                 // alt="Paella dish" */}
//                             {/* /> */}
//                         {/* </Image> */}
//                         {/* </Button>
//                         <Box style={{
//                                 // width: image.width,
//                                 flex:18
//                             }}></Box> */}
//                    {/* </Box> */}
// {/*                          
//                          <Button
//                                variant="text"
//                                size = "medium"
//                                href="/posts/newaccount"
//                            >
//                                Sign Up
//                          </Button>
//                          <Box style={{ */}
//                 {/* //                 // width: image.width,
//                 //                 flex:0.3
//                 //             }}></Box>
//                 //          <Button */}
//                 {/* //                variant="contained"
//                 //                size = "medium"
//                 //                sx={{ color:"primary"}}
//                 //                href="/posts/first-post"
//                 //            >
//                 //                Login */}
//                 {/* //          </Button>
//                 //   </Toolbar>  */}
//             </AppBar>
//         </Box>
//     )
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeToolBar); //<Box sx={{ ml: 1, flexGrow: 1, display: 'flex' }}></Box>
 //<Box sx={{ mt: 3, flexGrow: 1, display: 'flex' }}></Box>


/***/ })

};
;