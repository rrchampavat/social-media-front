import {
  Avatar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
  useMediaQuery,
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

  const mdView = useMediaQuery("(min-width:600px)");

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
        height: { xs: 50, md: 100 },
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
      <Grid
        container
        height="100%"
        display="flex"
        justifyContent="start"
        alignItems="center"
      >
        <Grid item md={4} xs={6} pl={mdView ? 8 : 2}>
          <Typography
            color={appTheme.palette.primary.contrastText}
            variant={mdView ? "h3" : "h6"}
            fontWeight={"bold"}
            fontFamily="Inter, 'system-ui', 'sans-serif'"
            sx={{
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            !Social
          </Typography>
        </Grid>

        <Grid item md={4} xs={0}>
          <Paper
            component="form"
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
              width: "100%",
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
        </Grid>

        <Grid
          item
          md={4}
          xs={6}
          display="flex"
          justifyContent="end"
          alignItems="center"
          pr={mdView ? 8 : 2}
        >
          <IconButton
            onClick={() => navigate("/")}
            sx={{ display: { xs: "none", md: "inline-flex" } }}
          >
            <HomeIcon
              sx={{
                fontSize: 35,
                color: appTheme.palette.primary.contrastText,
              }}
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
                height: { xs: 10, md: 20 },
                width: { xs: 0, md: 0 },
                minWidth: { xs: 10, md: 20 },
                fontSize: { xs: "0.5rem", md: "0.75rem" },
              },
              height: { xs: 30, md: 40 },
              width: { xs: 30, md: 40 },
            }}
          >
            <IconButton
              sx={{
                color: appTheme.palette.primary.contrastText,
              }}
            >
              <ChatIcon sx={{ fontSize: { xs: 23, md: 30 } }} />
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
                height: { xs: 10, md: 20 },
                width: { xs: 0, md: 0 },
                minWidth: { xs: 10, md: 20 },
                fontSize: { xs: "0.5rem", md: "0.75rem" },
              },
              height: { xs: 30, md: 40 },
              width: { xs: 30, md: 40 },
            }}
          >
            <IconButton
              sx={{
                color: appTheme.palette.primary.contrastText,
              }}
            >
              <NotificationsIcon sx={{ fontSize: { xs: 23, md: 30 } }} />
            </IconButton>
          </Badge>

          <IconButton onClick={handleClick}>
            {user?.avatar ? (
              <Avatar
                src={user?.avatar}
                sx={{ width: { xs: 30, md: 40 }, height: { xs: 30, md: 40 } }}
              />
            ) : (
              <Avatar
                sx={{
                  bgcolor: appTheme.palette.primary.light,
                  color: appTheme.palette.primary.dark,
                  width: { xs: 30, md: 40 },
                  height: { xs: 30, md: 40 },
                }}
              >
                {user?.username?.charAt(0).toUpperCase()}
              </Avatar>
            )}
          </IconButton>
        </Grid>
      </Grid>

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
