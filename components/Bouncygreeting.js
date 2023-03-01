import React, { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import { CardMedia, Card, Image, Paper, IconButton, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider, Drawer, Link, MenuItem, Menu, Avatar, AppBar, Toolbar, Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";


const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

const BouncyGreeting = () => {
  const { data: session, status } = useSession();
  const key = Math.random(); // generate a random key
  return (
    <Bounce key={key}><Typography variant="h2Large">Hi, {session?.user?.name}</Typography></Bounce>
  );
}

export default BouncyGreeting