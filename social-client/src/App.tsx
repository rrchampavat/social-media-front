import "./App.css";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Router from "./routes";
import appTheme from "./utils/theme";

function App() {
  const router = useRoutes(Router);

  return <ThemeProvider theme={appTheme}>{router}</ThemeProvider>;
}

export default App;
