import { Badge, Box, IconButton } from "@mui/material";
import theme from "../../utils/theme";
import ChatIcon from "@mui/icons-material/Chat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: () => theme.palette.primary.main,
          height: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          {/* <IconButton sx={{ color: () => theme.palette.secondary.main }}>
            <MenuIcon sx={{ fontSize: 50 }} />
          </IconButton> */}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* <Badge
            badgeContent={5}
            sx={{ color: () => theme.palette.third.main }}
          >
            <IconButton sx={{ color: () => theme.palette.secondary.main }}>
              <ChatIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Badge> */}
        </Box>

        <Box
          sx={{
            mr: 10,
          }}
        >
          <IconButton sx={{ color: () => theme.palette.secondary.main }}>
            <AccountCircleIcon sx={{ fontSize: 50 }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
