import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./header";

const MainLoyout = () => {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
};

export default MainLoyout;
