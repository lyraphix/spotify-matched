import { Inter } from '@next/font/google'
import { AppBar, Toolbar, Container, CssBaseline, Typography, Box, Grid, TextField, FormControlLabel, Checkbox, ThemeProvider, Button } from "@mui/material/";


// import { Formik, field, form} from 'formik'
// import Link from 'next/link';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { topTracks } from './spotify';

import Head from "next/head";
import { useState } from "react"; 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVw00OfAUktA4aI0Y98vHAiS-ITSp3v50",
  authDomain: "spotifly-997dd.firebaseapp.com",
  projectId: "spotifly-997dd",
  storageBucket: "spotifly-997dd.appspot.com",
  messagingSenderId: "869795366490",
  appId: "1:869795366490:web:d8bcf837eb81da5168ba63",
  measurementId: "G-LH0JWX82X5"
};

export default function Home() {



  const fetchTopTracks = async () => {
    const response = await fetch("/api/top-tracks");
    const trackData = await response.json();

    fs.writeFile("test.txt", trackData, function(err) {
        if (err) {
            console.log(err);
        }
    });
  };
  

  return (
        <div>
        <main>
          <button onClick={fetchTopTracks}>Get top tracks</button>
          
        </main>
        </div>
      );
}
