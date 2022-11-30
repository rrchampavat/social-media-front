import { Box } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
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
  );
};

export default MainLayout;
