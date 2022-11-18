import { createTheme } from "@mui/material";

const appTheme = createTheme({
  palette: {
    primary: {
      dark: "#1D3557",
      main: "#457B9D",
      light: "#A8DADC",
      contrastText: "#F1FAEE",
    },
    secondary: {
      main: "#E63946",
    },
    success: { main: "#2E7D32" },
    error: {
      main: "#D32F2F",
    },
    warning: { main: "#ED6C02" },
  },
});

export default appTheme;
