import {
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
// import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useEffect, useState } from "react";
import CustomMenu from "../../components/CustomMenu";
import { profileMenu } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/user/userActions";
import appTheme from "../../utils/theme";
import HomeIcon from "@mui/icons-material/Home";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state: any) => state.UserReducer);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openProfileMenu, setOpenProfileMenu] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenProfileMenu(true);
  };

  useEffect(() => {
    if (!user?.userId) {
      dispatch(getUser());
    }
  }, [dispatch, user]);

  return (
    <Paper
      elevation={5}
      sx={{
        height: 100,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 10,
        borderRadius: 0,
        bgcolor: appTheme.palette.primary.dark,
      }}
    >
      <Typography
        color={appTheme.palette.primary.contrastText}
        variant="h4"
        fontWeight={"bold"}
        fontFamily="Inter, 'system-ui', 'sans-serif'"
        sx={{
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          ml: { xs: 1, md: 5 },
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        Social Media
      </Typography>

      <Paper
        component="form"
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-evenly",
          width: "30%",
          height: "40%",
          p: "2px 4px",
        }}
      >
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
          }}
          placeholder="Search..."
          endAdornment={
            <IconButton sx={{ color: appTheme.palette.primary.dark }}>
              <SearchOutlinedIcon />
            </IconButton>
          }
        />
      </Paper>

      <Box
        sx={{
          mr: { xs: 2, md: 10 },
        }}
      >
        <IconButton onClick={() => navigate("/")} sx={{}}>
          <HomeIcon
            sx={{ fontSize: 35, color: appTheme.palette.primary.contrastText }}
          />
        </IconButton>
        <Badge
          badgeContent={5}
          max={9}
          sx={{
            color: appTheme.palette.primary.dark,
            ".css-fvc8ir-MuiBadge-badge": {
              bgcolor: appTheme.palette.primary.light,
              color: appTheme.palette.primary.dark,
            },
          }}
        >
          <IconButton
            sx={{
              color: appTheme.palette.primary.contrastText,
            }}
          >
            <ChatIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Badge>

        <Badge
          badgeContent={11}
          max={9}
          sx={{
            color: appTheme.palette.primary.dark,
            ".css-fvc8ir-MuiBadge-badge": {
              bgcolor: appTheme.palette.primary.light,
              color: appTheme.palette.primary.dark,
            },
          }}
        >
          <IconButton
            sx={{
              color: appTheme.palette.primary.contrastText,
            }}
          >
            <NotificationsIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Badge>

        <IconButton onClick={handleClick}>
          {user?.avatar ? (
            <Avatar src={user?.avatar} />
          ) : (
            <Avatar
              sx={{
                bgcolor: appTheme.palette.primary.light,
                color: appTheme.palette.primary.dark,
              }}
            >
              {user?.username?.charAt(0).toUpperCase()}
            </Avatar>
          )}
        </IconButton>
      </Box>

      <CustomMenu
        open={openProfileMenu}
        handleClose={() => setOpenProfileMenu(false)}
        menuList={profileMenu.map(({ label, navigateTo, icon }) => ({
          label: label,
          navigateTo: navigateTo,
          Icon: icon,
        }))}
        anchorEl={anchorEl}
        menuAt="left"
      />
    </Paper>
  );
};

export default Header;
