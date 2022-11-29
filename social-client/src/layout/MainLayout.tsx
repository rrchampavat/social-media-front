import { Box } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import appTheme from "../utils/theme";
import Header from "./header";
import WaveSvg from "../assets/svg/MainBackground.svg";
import { useCookies } from "react-cookie";

const MainLayout = () => {
  const [cookies] = useCookies(["user"]);

  if (!cookies?.user?.password) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <Box
      sx={{
        bgcolor: appTheme.palette.primary.contrastText,
        backgroundColor: appTheme.palette.primary.contrastText,
        backgroundImage: `url(${WaveSvg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />
      <Outlet />
    </Box>
  );
};

export default MainLayout;
