import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import { flexMiddle } from "../assets/commonStyles";
import theme from "../utils/theme";

interface ProfileCardProps {
  userName: string;
  fullName: string;
  userImg: string;
  postCount: number;
  followerCount: number;
  followingCount: number;
  bio?: string;
  sx: object;
}

const ProfileCard = (props: ProfileCardProps) => {
  const {
    userName,
    fullName,
    userImg,
    postCount,
    followerCount,
    followingCount,
    bio,
    sx,
  } = props;

  return (
    <Paper elevation={5} sx={{ ...sx, display: { xs: "none", md: "block" } }}>
      <Card>
        <CardMedia
          component={"img"}
          src={userImg}
          sx={{
            height: "40vh",
            width: "40vh",
            p: 1,
            bgcolor: () => theme.palette.primary.main,
          }}
        />
        <CardContent sx={{ maxWidth: "38vh" }}>
          <Typography fontWeight={"bold"}>{userName}</Typography>
          <Typography fontWeight={"bold"}>{fullName}</Typography>
          <Box sx={{ display: "flex" }}>
            <Typography variant="body1" fontWeight={"bold"} display={"inline"}>
              Bio
            </Typography>
            &nbsp;
            <Typography display="inline" variant="body1">
              : {bio}
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent="space-evenly" mt={1}>
            <Box sx={{ ...flexMiddle, flexDirection: "column" }}>
              <Avatar
                sx={{ bgcolor: () => theme.palette.quinary.main, p: 0.5 }}
              >
                {postCount}
              </Avatar>
              <Typography>Posts</Typography>
            </Box>
            <Box sx={{ ...flexMiddle, flexDirection: "column" }}>
              <Avatar
                sx={{ bgcolor: () => theme.palette.quinary.main, p: 0.5 }}
              >
                {followingCount}
              </Avatar>
              <Typography>Following</Typography>
            </Box>
            <Box sx={{ ...flexMiddle, flexDirection: "column" }}>
              <Avatar
                sx={{ bgcolor: () => theme.palette.quinary.main, p: 0.5 }}
              >
                {followerCount}
              </Avatar>
              <Typography>Followers</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default ProfileCard;
