import { Avatar, Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomButton from "../../../components/CustomButton";
import CustomTextField from "../../../components/DialogBox/CustomTextField";
import { USER } from "../../../redux/user/userTypes";
import { userInitialState } from "../../../utils/initialStates";

const EditProfileForm = () => {
  const { user } = useSelector((state: any) => state.UserReducer);

  const [profile, setProfile] = useState<USER>(userInitialState);

  useEffect(() => {
    setProfile(user);
  }, [user]);

  return (
    <Box sx={{ p: 2 }}>
      <Grid container width="100%" spacing={2}>
        <Grid item width={"20%"}>
          <Avatar
            src={profile.avatar}
            sx={{ width: 60, height: 60, ml: "auto" }}
          />
        </Grid>

        <Grid item direction={"column"} width="50%">
          <Typography variant="h6">{profile.userName}</Typography>
          <CustomButton
            label="Change profile photo"
            variant="text"
            sx={{ fontWeight: "bold" }}
          />
        </Grid>
      </Grid>

      <Grid container mt={1} width="100%" spacing={2}>
        <Grid item width="20%">
          <Typography fontWeight="bold" textAlign={"right"}>
            Name
          </Typography>
        </Grid>

        <Grid item width={"50%"}>
          <CustomTextField
            type="text"
            variant="outlined"
            disabled={true}
            fullWidth={true}
            value={profile.fullName}
            sx={{
              ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                p: "6.5px 14px",
              },
            }}
          />
          {/* <Typography variant="caption" color="gray">
            You are using the same name on !SOCIAL and TOO SOCIAL. Go to TOO
            SOCIAL to change your name.
          </Typography>
          <Link
            variant="caption"
            sx={{ textDecoration: "none", cursor: "pointer" }}
          >
            Change name
          </Link> */}
        </Grid>
      </Grid>

      <Grid container mt={1} width="100%" spacing={2}>
        <Grid item width="20%">
          <Typography fontWeight="bold" textAlign={"right"}>
            Username
          </Typography>
        </Grid>

        <Grid item width={"50%"}>
          <CustomTextField
            type="text"
            variant="outlined"
            fullWidth={true}
            value={profile.userName}
            sx={{
              ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                p: "6.5px 14px",
              },
            }}
          />
          {/* <Typography variant="caption" color="gray">
            In most cases, you'll be able to change your username back to{" "}
            {profile.username} for another 14 days.
          </Typography>
          <Link
            variant="caption"
            sx={{ textDecoration: "none", cursor: "pointer" }}
          >
            Learn more
          </Link> */}
        </Grid>
      </Grid>

      <Grid container mt={1} width="100%" spacing={2}>
        <Grid item width="20%">
          <Typography fontWeight="bold" textAlign={"right"}>
            Website
          </Typography>
        </Grid>

        <Grid item width={"50%"}>
          <CustomTextField
            type="text"
            variant="outlined"
            // @ts-ignore
            value={profile.website || "Website"}
            fullWidth={true}
            disabled={false}
            sx={{
              ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                p: "6.5px 14px",
              },
            }}
          />
          {/* <Typography variant="caption" color="gray">
            Editing your links is only available on mobile. Visit the !SOCIAL
            app and edit your profile to change the website in your bio.
          </Typography> */}
        </Grid>
      </Grid>

      <Grid container mt={1} width="100%" spacing={2}>
        <Grid item width="20%">
          <Typography fontWeight="bold" textAlign={"right"}>
            Bio
          </Typography>
        </Grid>

        <Grid item width={"50%"}>
          <CustomTextField
            type="text"
            variant="outlined"
            value={profile.bio}
            fullWidth
            multiline
            maxRows={4}
            sx={{
              ".css-e2dmp6-MuiInputBase-root-MuiOutlinedInput-root": {
                p: "6.5px 14px",
              },
            }}
          />
          <Typography variant="caption" color="gray">
            23/150
          </Typography>
        </Grid>
      </Grid>

      {/* <Grid container mt={1} width="100%" spacing={2}>
        <Grid item width="20%" />

        <Grid item width={"50%"}>
          <Typography variant="body2" fontWeight={"bold"}>
            Personal Information
          </Typography>
          <Typography variant="caption" color="gray">
            Provide your personal information, even if the account is used for a
            business, pet or something else. This won't be part of your profile
          </Typography>
        </Grid>
      </Grid> */}

      <Grid container mt={1} width="100%" spacing={2}>
        <Grid item width="20%">
          <Typography fontWeight="bold" textAlign={"right"}>
            Email address
          </Typography>
        </Grid>

        <Grid item width={"50%"}>
          <CustomTextField
            type="email"
            variant="outlined"
            // @ts-ignore
            value={profile.email || "example@gmail.com"}
            fullWidth={true}
            sx={{
              ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                p: "6.5px 14px",
              },
            }}
          />
        </Grid>
      </Grid>

      <Grid container mt={1} width="100%" spacing={2}>
        <Grid item width="20%">
          <Typography fontWeight="bold" textAlign={"right"}>
            Phone number
          </Typography>
        </Grid>

        <Grid item width={"50%"}>
          <CustomTextField
            type="tel"
            variant="outlined"
            // @ts-ignore
            value={profile.phone || "+91 0000000000"}
            fullWidth={true}
            sx={{
              ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                p: "6.5px 14px",
              },
            }}
          />
        </Grid>
      </Grid>

      <Grid container mt={1} width="100%" spacing={2}>
        <Grid item width="20%">
          <Typography fontWeight="bold" textAlign={"right"}>
            Gender
          </Typography>
        </Grid>

        <Grid item width={"50%"}>
          <CustomTextField
            type="text"
            variant="outlined"
            // @ts-ignore
            value={profile.gender || "N/A"}
            sx={{
              ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                p: "6.5px 14px",
              },
            }}
          />
        </Grid>
      </Grid>

      <Grid container mt={1} width="100%" spacing={2}>
        <Grid item width="20%" display={"flex"} justifyContent="flex-end">
          <CustomButton variant="contained" label="Submit" disabled />
        </Grid>

        <Grid item width={"50%"}></Grid>
      </Grid>
    </Box>
  );
};

export default EditProfileForm;
