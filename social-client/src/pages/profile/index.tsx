import { Divider, Grid } from "@mui/material";
import theme from "../../utils/theme";
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
        // border: "1px solid black",
      }}
    >
      <Grid item>
        <ProfileDetails />
      </Grid>
      <Divider sx={{ borderColor: () => theme.palette.primary.main, my: 2 }} />
      <Grid item>
        <PostsList />
      </Grid>
    </Grid>
  );
};

export default Profile;
