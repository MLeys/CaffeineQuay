import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
  palette: {
    primary: {
      light: '#4d4dff',
      main: '#0000ff',
      dark: '#0000cc',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#6eff14',
      main: '#39ff14',
      dark: '#00cc00',
      contrastText: '#000000',
    },
    accent: {
      light: '#ff4081',
      main: '#f50057',
      dark: '#c51162',
      contrastText: '#ffffff',
    },
    neonPurple: {
      light: '#a033ff',
      main: '#7000ff',
      dark: '#4c00cc',
      contrastText: '#ffffff',
    },
    neonPink: {
      light: '#ff69b4',
      main: '#ff1493',
      dark: '#c60063',
      contrastText: '#ffffff',
    },
  },
});
export default theme;

