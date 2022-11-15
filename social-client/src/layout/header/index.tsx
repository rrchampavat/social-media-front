import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import theme from "../../utils/theme";
import ChatIcon from "@mui/icons-material/Chat";
// import MenuIcon from "@mui/icons-material/Menu";
import CustomBotton from "../../components/CustomBotton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useEffect, useState } from "react";
import CustomMenu from "../../components/CustomMenu";
import { profileMenu } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/user/userActions";

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
        bgcolor: () => theme.palette.primary.main,
      }}
    >
      <Typography
        color={() => theme.palette.quaternary.main}
        variant="h4"
        fontWeight={"bold"}
        sx={{
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          ml: { xs: 1, md: 5 },
        }}
      >
        Social Media
      </Typography>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-evenly",
          width: "10%",
        }}
      >
        <CustomBotton
          variant="text"
          lable="Home"
          size="large"
          disabled={false}
          handleClick={() => navigate("/")}
          sx={{
            color: () => theme.palette.quaternary.main,
            fontWeight: "bold",
            fontSize: 20,
            borderColor: () => theme.palette.quaternary.main,
          }}
        />

        {/* <CustomBotton
          variant="text"
          lable="News"
          size="large"
          disabled={false}
          handleClick={() => navigate("/news")}
          sx={{
            color: () => theme.palette.quaternary.main,
            borderColor: () => theme.palette.quaternary.main,
            fontWeight: "bold",
            fontSize: 20,
          }}
        /> */}
      </Box>

      <Box
        sx={{
          mr: { xs: 2, md: 10 },
        }}
      >
        <Badge
          badgeContent={5}
          sx={{
            color: () => theme.palette.quaternary.main,
            ".css-fvc8ir-MuiBadge-badge": {
              bgcolor: () => theme.palette.quaternary.main,
              color: () => theme.palette.primary.main,
            },
          }}
        >
          <IconButton
            sx={{
              color: () => theme.palette.quaternary.main,
            }}
          >
            <ChatIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Badge>

        <Badge
          badgeContent={11}
          max={9}
          sx={{
            color: () => theme.palette.quaternary.main,
            ".css-fvc8ir-MuiBadge-badge": {
              bgcolor: () => theme.palette.quaternary.main,
              color: () => theme.palette.primary.main,
            },
          }}
        >
          <IconButton sx={{ color: () => theme.palette.quaternary.main }}>
            <NotificationsIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Badge>

        <IconButton
          sx={{ color: () => theme.palette.secondary.main }}
          onClick={handleClick}
        >
          {user?.avatar ? (
            <Avatar src={user?.avatar} />
          ) : (
            <Avatar
              sx={{
                bgcolor: () => theme.palette.secondary.main,
                color: () => theme.palette.primary.main,
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
