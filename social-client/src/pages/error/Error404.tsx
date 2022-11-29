import { Box, Typography } from "@mui/material";
import appTheme from "../../utils/theme";

const Error404 = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "92.5vh", md: "89.7vh" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: appTheme.palette.primary.contrastText,
      }}
    >
      <Typography
        variant="h1"
        fontWeight={"bold"}
        fontFamily="Inter, 'system-ui', 'sans-serif'"
        sx={{
          textTransform: "uppercase",
          color: appTheme.palette.primary.dark,
        }}
      >
        404 Page Not Found !
      </Typography>
    </Box>
  );
};

export default Error404;
