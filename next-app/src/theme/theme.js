import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f14f4f",
    },
    secondary: {
      main: "#3f51b5",
    },
  },
  typography: {
    h6: {
      fontFamily: "Roboto, sans-serif",
    },
  },
});

export default theme;
