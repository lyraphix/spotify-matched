// import '@/styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material';
// @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');


export default function App({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#449b7a',
        light: '#c8d4d0',
        dark: '#2B3B5D',
      },
      secondary: {
        main: '#608ab8',
        light: '#A5BED6',
        dark: '#3F6758',
      },
      third: {
        main: '#e15868',
        light: '#E6A8AF',
        dark: '#90444C',
      },
      divider: '#ffffff',
      info: {
        main:'#ffffff',
      },
      // text: {
      //   primary: '#ffffff',
      // },
      background: {
        default: '#19191B',
      },
      
    },
    background: {
      default: '#19191B',
      paper: '#000000',
    },
    spacing: 8,
    shape: {
      borderRadius: 4,
    },
    typography: {
      h1: {
        fontFamily: `"Gill Sans", sans-serif`,
        fontWeight: 350,
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
  return <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
}
