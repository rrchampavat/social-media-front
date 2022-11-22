import { useState } from "react";
import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";
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

  const handleOpenDialog = (type: string) => {
    setOpenDialog(true);
    setHeader(type);
    setUserList(users?.map((user) => ({ ...user, userType: type })));
  };

  return (
    <Grid container direction={"row"}>
      <Grid item md={4}>
        <Avatar src={user.avatar} sx={{ width: 150, height: 150, mr: 15 }} />
      </Grid>
      <Grid item md={8}>
        <Box sx={{ ...flexMiddle, justifyContent: "space-between" }}>
          <Typography
            variant="h4"
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
          <Typography fontWeight="bold">{user.postCount} Posts</Typography>
          <Typography
            mx={2}
            fontWeight="bold"
            variant="button"
            sx={{ cursor: "pointer" }}
            onClick={() => handleOpenDialog("Follower")}
          >
            {user.followerCount} Followers
          </Typography>

          <Typography
            fontWeight="bold"
            variant="button"
            sx={{ cursor: "pointer" }}
            onClick={() => handleOpenDialog("Following")}
          >
            {user.followingCount} Following
          </Typography>
        </Box>

        <Typography fontWeight="bold">{user.fullName}</Typography>
        <Typography whiteSpace="pre-line">{user.bio}</Typography>
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
