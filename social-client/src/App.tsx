import "./App.css";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Router from "./routes";
import appTheme from "./utils/theme";
import ErrorBoundaryLayout from "./components/ErrorBoundaryLayout";

function App() {
  const router = useRoutes(Router);

  return (
    <ThemeProvider theme={appTheme}>
      <ErrorBoundaryLayout>{router}</ErrorBoundaryLayout>
    </ThemeProvider>
  );
}

export default App;
