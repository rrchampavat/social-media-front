import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import appTheme from "../utils/theme";
import Header from "./header";

const MainLoyout = () => {
  return (
    <Box sx={{ bgcolor: appTheme.palette.primary.contrastText }}>
      <Header />
      <Outlet />
    </Box>
  );
};

export default MainLoyout;
