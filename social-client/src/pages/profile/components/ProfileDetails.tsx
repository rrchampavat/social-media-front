import { useState } from "react";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CustomBotton from "../../../components/CustomBotton";
import { flexMiddle } from "../../../assets/commonStyles";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useSelector } from "react-redux";
import appTheme from "../../../utils/theme";
import UsersListDialog from "../../../components/DialogBox/UsersListDialog";
import { createUsers } from "../../../utils/constants";
import { faker } from "@faker-js/faker";
import { USER } from "../../../redux/user/userTypes";

const users = createUsers(20);

const ProfileDetails = () => {
  const { user } = useSelector((state: any) => state.UserReducer);

  const [header, setHeader] = useState<string>("");
  const [userList, setUserList] = useState<Array<USER>>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleOpenDialog = (type: string): void => {
    setOpenDialog(true);
    setHeader(type);
    setUserList(users?.map((user) => ({ ...user, userType: type })));
  };

  const isMDView = useMediaQuery("(min-width:600px)");

  return (
    <Grid container direction={"row"}>
      <Grid item md={4} xs={12} display="flex">
        <Avatar
          src={user.avatar}
          sx={{
            width: { xs: 70, md: 150 },
            height: { xs: 70, md: 150 },
            mr: { xs: 5, md: 15 },
          }}
        />
        {!isMDView ? (
          <Box width={"100%"}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant={"h6"} sx={{ wordWrap: "break-word" }}>
                {user.username}
              </Typography>
              <IconButton
                sx={{
                  color: appTheme.palette.primary.dark,
                }}
              >
                <SettingsOutlinedIcon />
              </IconButton>
            </Box>
            <CustomBotton
              variant="outlined"
              label="Edit Profile"
              handleClick={() => {}}
              size="small"
              sx={{
                color: appTheme.palette.primary.dark,
                borderColor: appTheme.palette.primary.dark,
              }}
            />
          </Box>
        ) : null}
      </Grid>

      <Grid item md={8}>
        <Box
          sx={{
            ...flexMiddle,
            justifyContent: "space-between",
            display: { xs: "none", md: "flex" },
          }}
        >
          <Typography
            variant={isMDView ? "h4" : "h6"}
            sx={{ wordWrap: "break-word", width: "64%" }}
          >
            {user.username}
          </Typography>

          <Box whiteSpace={"nowrap"}>
            <CustomBotton
              variant="outlined"
              label="Edit Profile"
              handleClick={() => {}}
              size="small"
              sx={{
                color: appTheme.palette.primary.dark,
                borderColor: appTheme.palette.primary.dark,
                mx: 2,
              }}
            />
            <IconButton
              sx={{
                color: appTheme.palette.primary.dark,
              }}
            >
              <SettingsOutlinedIcon />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ ...flexMiddle, flexDirection: "row", my: 2 }}>
          <Typography
            variant="button"
            fontWeight="bold"
            fontSize={isMDView ? 15 : 12}
          >
            {user.postCount} Posts
          </Typography>
          <Typography
            mx={2}
            fontWeight="bold"
            variant="button"
            fontSize={isMDView ? 15 : 12}
            sx={{ cursor: "pointer" }}
            onClick={() => handleOpenDialog("Follower")}
          >
            {user.followerCount} Followers
          </Typography>

          <Typography
            fontWeight="bold"
            variant="button"
            sx={{ cursor: "pointer" }}
            fontSize={isMDView ? 15 : 12}
            onClick={() => handleOpenDialog("Following")}
          >
            {user.followingCount} Following
          </Typography>
        </Box>

        <Typography fontWeight="bold" fontSize={isMDView ? 15 : 13.5}>
          {user.fullName}
        </Typography>
        <Typography whiteSpace="pre-line" fontSize={isMDView ? 15 : 13.5}>
          {user.bio}
        </Typography>
      </Grid>

      <UsersListDialog
        open={openDialog}
        data={userList?.map((user: any) => ({
          userId: user?.userId,
          avatar: user?.avatar,
          username: user?.username,
          following: faker.datatype.boolean(),
          userType: user?.userType,
        }))}
        handleClose={() => setOpenDialog(false)}
        title={header}
      />
    </Grid>
  );
};

export default ProfileDetails;
