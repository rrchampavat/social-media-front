import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";
import CustomBotton from "../../../components/CustomBotton";
import { createUser } from "../../../utils/constants";
import theme from "../../../utils/theme";
import { flexMiddle } from "../../../assets/commonStyles";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUser } from "../../../redux/user/userActions";
import { useDispatch } from "react-redux";

const user = createUser();

const ProfileDetails = () => {
  const dispatch = useDispatch();
  const newUser: any = useSelector((state: any) => state.UserReducer.user);
  const loading: any = useSelector((state: any) => state.UserReducer);
  console.log("clg ~ ProfileDetails ~ loading", loading?.loading);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  // console.log("clg ~ ProfileDetails ~ isLoading", isLoading);

  useEffect(() => {
    setIsLoading(loading.loading);
  }, []);

  useEffect(() => {
    dispatch(getUser(user));
  }, []);

  return (
    <Grid container direction={"row"}>
      <Grid item md={4}>
        <Avatar src={newUser.avatar} sx={{ width: 150, height: 150, mr: 15 }} />
      </Grid>
      <Grid item md={8}>
        <Box sx={{ ...flexMiddle, justifyContent: "space-between" }}>
          <Typography
            variant="h4"
            sx={{ wordWrap: "break-word", width: "64%" }}
          >
            {newUser.username}
          </Typography>
          <Box whiteSpace={"nowrap"}>
            <CustomBotton
              variant="outlined"
              lable="Edit Profile"
              handleClick={() => {}}
              size="small"
              sx={{
                color: () => theme.palette.primary.main,
                borderColor: () => theme.palette.primary.main,
                mx: 2,
              }}
            />
            <IconButton
              sx={{
                color: () => theme.palette.primary.main,
              }}
            >
              <SettingsOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ ...flexMiddle, flexDirection: "row", my: 2 }}>
          <Typography fontWeight="bold">{newUser.postCount} Posts</Typography>
          <Typography mx={2} fontWeight="bold">
            {newUser.followerCount} Followers
          </Typography>
          <Typography fontWeight="bold">
            {newUser.followingCount} Following
          </Typography>
        </Box>

        <Typography fontWeight="bold">{newUser.fullName}</Typography>
        <Typography whiteSpace="pre-line">{newUser.bio}</Typography>
      </Grid>
    </Grid>
  );
};

export default ProfileDetails;
