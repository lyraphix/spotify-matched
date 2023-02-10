// import '@/styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material';
// @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');


export default function App({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#24da54',
        light: '#b3eaa9',
        dark: '#0c3b19',
      },
      secondary: {
        main: '#7574ff',
        light: '#5756b5',
        dark: '#1b2d4a',
      },
      divider: 'rgba(255,255,255,0.12)',
      info: {
        main:'#ffffff',
      }
      // text: {
      //   primary: '#ffffff',
      // },
      
    },
    background: {
      default: '#000000',
      paper: '#000000',
    },
    spacing: 8,
    shape: {
      borderRadius: 4,
    },
    typography: {
      h1: {
        fontFamily: `"Gill Sans", sans-serif`,
        fontWeight: 500,
        fontSize: '1.8rem',
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 150,
        fontStretch: "condensed",
        fontFamily: "cursive",
      },
      h3: {
        fontWeight: 5,
        fontSize: '1rem',
      },
    },
    
  });
  return <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
}
