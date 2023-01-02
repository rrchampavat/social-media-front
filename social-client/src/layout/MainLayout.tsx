import { Box } from "@mui/material";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Header from "./header";
import WaveSvg from "../assets/svg/MainBackground.svg";
import Cookies from "js-cookie";

const MainLayout = () => {
  const location = useLocation();

  const accessToken = Cookies.get("accessToken");

  return accessToken ? (
    <Box
      sx={{
        backgroundImage: `url(${WaveSvg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />
      <Box sx={{ minHeight: "89.7vh" }}>
        <Outlet />
      </Box>
    </Box>
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
};

export default MainLayout;
