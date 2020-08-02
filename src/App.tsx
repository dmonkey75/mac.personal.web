import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Hero, Container, About, Skills, Works, Footer } from './components/index'; 
import OpenSansWoff2 from './fonts/open-sans-v17-latin-regular.woff2';
import OpenSans700Woff2 from './fonts/open-sans-v17-latin-700.woff2';
import RalewayWoff2 from './fonts/raleway-v17-latin-800.woff2'; 

const opensans = {
  fontFamily: 'opensans',  
  fontWeight: 400,
  src: ` 
    url(${OpenSansWoff2}) format('woff2'),
    url(${OpenSans700Woff2}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const raleway = {
  fontFamily: 'raleway',  
  fontWeight: 400,
  src: ` 
    url(${RalewayWoff2}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};


let theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#607d8b',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#ff1744',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
      'opensans', 
      'raleway',
      'sans-serif'
    ].join(','),
    h1: { 
      fontFamily: 'raleway'
    },
    h2: { 
      fontWeight: 700,
      color: '#607d8b'
    },
    h3: { 
      fontWeight: 700,
      color: '#607d8b'
    },
    h4: { 
      fontWeight: 700,
      color: '#607d8b'
    },
    h5: {
      fontWeight: 700,
      color: '#607d8b'
    },
    h6: {
      fontWeight: 700,
      color: '#607d8b'
    }
  }, 
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [opensans, raleway]
      },
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Hero />
      <Container>
        <About />
        <Skills /> 
        <Works />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App; 