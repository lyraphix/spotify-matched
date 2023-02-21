// import '@/styles/globals.css'
import { Inter } from '@next/font/google'
import { createTheme, ThemeProvider } from '@mui/material';
// @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');


export default function App({ Component, pageProps }) {
  // const inter = Inter({ subsets: ['latin'] })
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#608108',
        light: '#B5C68C',
        dark: '#394221',
        text: "white"
      },
      secondary: {
        main: '#9BB9D8',
        light: '#92AFCE',
        dark: '#0C233B',
        text: "white"

      },
      third: {
        main: '#A02937',
        light: '#F0D7DA',
        dark: '#3D1519',
        text: "white"

      },
      forth: {
        main: '#DD7C22',
        light: '#E9BF98',
        dark: '#54361A',
        text: "white"

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
        fontSize: '1.7rem',
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 150,
        fontStretch: "condensed",
        fontFamily: "cursive",
      },
      iconFont: {
        // fontFamily: `"Gill Sans", sans-serif`,
        fontWeight: 700,
        fontSize: '1.3rem',
      },
      h3: {
        fontWeight: 5,
        fontSize: '1rem',
      },
      h2Large: {
        fontSize: '4rem',
        fontWeight: 150,
        fontStretch: "condensed",
        fontFamily: "cursive",
      },
    },
    
  });
  return <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
}
