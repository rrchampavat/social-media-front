import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import theme from "../utils/theme";
import Header from "./header";

const MainLoyout = () => {
  return (
    <Box sx={{ bgcolor: () => theme.palette.quaternary.main }}>
      <Header />
      <Outlet />
    </Box>
  );
};

export default MainLoyout;
