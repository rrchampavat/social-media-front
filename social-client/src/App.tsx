import "./App.css";
import { useRoutes } from "react-router-dom";
import { Box } from "@mui/material";
import Router from "./routes";

function App() {
  const router = useRoutes(Router);
  return <Box>{router}</Box>;
}

export default App;
