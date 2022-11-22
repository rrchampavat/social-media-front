import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import ErrorBoundaryLayout from "../components/ErrorBoundaryLayout";
import appTheme from "../utils/theme";
import Header from "./header";

const MainLoyout = () => {
  return (
    <Box sx={{ bgcolor: appTheme.palette.primary.contrastText }}>
      <ErrorBoundaryLayout>
        <Header />
        <Outlet />
      </ErrorBoundaryLayout>
    </Box>
  );
};

export default MainLoyout;
