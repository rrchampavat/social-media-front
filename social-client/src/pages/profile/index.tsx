import { Divider, Grid } from "@mui/material";
import appTheme from "../../utils/theme";
import PostsList from "./components/PostsList";
import ProfileDetails from "./components/ProfileDetails";

const Profile = () => {
  return (
    <Grid
      container
      direction={"column"}
      sx={{
        mx: "auto",
        p: 2,
        width: "90vh",
      }}
    >
      <Grid item>
        <ProfileDetails />
      </Grid>
      <Divider
        sx={{
          borderColor: appTheme.palette.primary.dark,
          my: 2,
        }}
      />
      <Grid item>
        <PostsList />
      </Grid>
    </Grid>
  );
};

export default Profile;
