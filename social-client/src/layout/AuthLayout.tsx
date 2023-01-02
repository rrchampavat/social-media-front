import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import appTheme from "../utils/theme";

import WaveSvg from "../assets/svg/AuthBackground.svg";
import Cookies from "js-cookie";

const AuthLayout = () => {
  const isMDView = useMediaQuery("(min-width:600px)");
  const cookie = Cookies.get("accessToken");

  if (cookie) {
    return <Navigate to="/" replace />;
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "92.5vh", md: "100vh" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${WaveSvg})`,
        backgroundSize: "cover",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: { xs: "80%", md: "50%" },
          height: { xs: "80%", md: "70%" },
        }}
      >
        <Grid container height="100%">
          <Grid
            item
            md={6}
            xs={0}
            display={isMDView ? "flex" : "none"}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            borderRight="1px solid #e1e1e1"
            sx={{
              backgroundColor: appTheme.palette.primary.dark,
              borderRadius: 1,
            }}
          >
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                color: appTheme.palette.primary.contrastText,
                textTransform: "uppercase",
                whiteSpace: "pre-wrap",
                textShadow: "4px 4px 17px rgba(0,0,0,0.6)",
              }}
              fontFamily="Inter, 'system-ui', 'sans-serif'"
            >
              !Social
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Outlet />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default AuthLayout;
