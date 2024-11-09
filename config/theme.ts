import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  typography: {
    h1: {
      fontFamily: `'Lalezar'`,
      color: "#16423C",
    },

    h2: {
      fontFamily: `'Lalezar'`,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#16423C",
      light: "rgba(0,0,0,.1)",
    },
    secondary: {
      main: "#C4DAD2",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "3px",
          padding: 0,
          textTransform: "none",
          minWidth: 0,
          minHeight: 0,
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  typography: {
    h1: {
      fontFamily: `'Lalezar'`,
      color: "#6A9C89",
    },
    h2: {
      fontFamily: `'Lalezar'`,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#6A9C89",
      light: "rgba(255,255,255,.1)",
    },
    secondary: {
      main: "#C4DAD2",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "3px",
          padding: 0,
          textTransform: "none",
          minWidth: 0,
          minHeight: 0,
        },
      },
    },
  },
});
