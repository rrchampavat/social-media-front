import {
  Avatar,
  AvatarGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/system";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CustomMenu from "./CustomMenu";
import { postMenus } from "../utils/constants";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import appTheme from "../utils/theme";

interface CustomCardProps {
  postID: string;
  userName: string;
  image: string;
  caption: string;
  comments: Array<any>;
  userAvatar: string;
  likeCount: number;
  isLiked: boolean;
  location?: string;
}

const CustomCard = (props: CustomCardProps) => {
  const {
    postID,
    userName,
    image,
    caption,
    comments,
    userAvatar,
    likeCount,
    isLiked,
    location,
  } = props;

  const [openPostMenu, setPostMenu] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [expandComments, setExpandComments] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setPostMenu(true);
  };

  const userImage = userAvatar ? (
    <Avatar src={userAvatar} />
  ) : (
    <Avatar>{userName.charAt(0).toUpperCase()}</Avatar>
  );

  const locationEle = (
    <Box
      sx={{
        display: "flex",
        lineHeight: 1.43,
        alignItems: "center",
      }}
    >
      <LocationOnOutlinedIcon sx={{ fontSize: "", mr: 0.3 }} />
      <Typography
        sx={{
          fontSize: "",
          fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
          fontWeight: 400,
        }}
      >
        {location}
      </Typography>
    </Box>
  );

  return (
    <Paper
      sx={{
        m: 2,
        width: { xs: "42vh", md: "60vh" },
      }}
      elevation={5}
      key={postID}
    >
      <Card sx={{ bgcolor: appTheme.palette.primary.dark }}>
        <CardHeader
          avatar={userImage}
          action={
            <IconButton
              sx={{ color: appTheme.palette.primary.contrastText }}
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
          }
          title={userName}
          sx={{
            ".css-et1ao3-MuiTypography-root,.css-83ijpv-MuiTypography-root": {
              color: appTheme.palette.primary.contrastText,
            },
            ".css-et1ao3-MuiTypography-root": {
              fontWeight: "bold",
            },
          }}
          subheader={location ? locationEle : null}
        />

        <CardMedia
          component={"img"}
          image={image}
          alt={"Card Image"}
          sx={{
            minHeight: { xs: "31.5vh", md: "45vh" },
            height: { xs: "31.5vh", md: "auto" },
            width: "inherit",
            bgcolor: appTheme.palette.primary.contrastText,
          }}
        />

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            bgcolor: "white",
          }}
        >
          <Box>
            <IconButton color="secondary">
              {isLiked ? (
                <FavoriteIcon sx={{ fontSize: 28 }} />
              ) : (
                <FavoriteBorderIcon sx={{ fontSize: 28 }} />
              )}
            </IconButton>
            <IconButton sx={{ color: appTheme.palette.primary.dark }}>
              <CommentIcon sx={{ fontSize: 28 }} />
            </IconButton>
            <IconButton
              sx={{
                color: appTheme.palette.primary.dark,
              }}
            >
              <SendIcon sx={{ fontSize: 28 }} />
            </IconButton>
          </Box>
          <IconButton sx={{ color: appTheme.palette.primary.dark }}>
            <BookmarkBorderOutlinedIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </CardActions>
        <CardContent
          sx={{
            bgcolor: "white",
            display: "flex",
            alignItems: "center",
            py: 0,
          }}
        >
          <AvatarGroup
            max={4}
            sx={{
              ".css-sxh3gq-MuiAvatar-root-MuiAvatarGroup-avatar": {
                height: 30,
                width: 30,
                fontSize: 13,
              },
            }}
          >
            {comments?.map(({ userAvatar, commentID }) => (
              <Avatar
                key={commentID}
                src={userAvatar}
                sx={{
                  height: 30,
                  width: 30,
                }}
              />
            ))}
          </AvatarGroup>
          <Typography fontSize={15} ml={1}>
            Liked by
          </Typography>
          &nbsp;
          <Typography fontSize={15} fontWeight={"bold"}>
            {isLiked ? "You" : comments[0]?.userName}
          </Typography>
          &nbsp;
          <Typography>and {likeCount} others</Typography>
        </CardContent>

        <CardContent
          sx={{ bgcolor: "white", display: "flex", flexDirection: "column" }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography variant="body1" fontWeight={"bold"} sx={{ mr: 1 }}>
              {userName}
            </Typography>
            <Typography variant="body1">{caption}</Typography>
          </Box>

          <Typography
            variant="button"
            onClick={() => setExpandComments(!expandComments)}
            sx={{ mt: 1, width: "max-content" }}
          >
            {expandComments ? "Hide" : "Show"} all {comments?.length} comments
          </Typography>

          <Box display={expandComments ? "none" : ""}>
            {comments?.slice(0, 2)?.map(({ userName, text, commentID }) => (
              <Box sx={{ display: "flex" }} key={commentID}>
                <Typography fontSize={13} fontWeight={"bold"} mr={1}>
                  {userName}
                </Typography>
                <Typography fontSize={13}>{text}</Typography>
              </Box>
            ))}
          </Box>
        </CardContent>

        <Collapse in={expandComments} unmountOnExit sx={{ bgcolor: "white" }}>
          <CardContent sx={{ pt: 0 }}>
            {comments?.map((comment) => (
              <Card
                sx={{
                  m: 1,
                  bgcolor: appTheme.palette.primary.contrastText,
                }}
                key={comment.commentID}
              >
                <CardHeader
                  avatar={<Avatar src={comment.userAvatar} />}
                  title={comment.userName}
                  // subheader={}
                  sx={{
                    p: 1,
                    ".css-et1ao3-MuiTypography-root": {
                      color: appTheme.palette.primary.dark,
                      fontWeight: "bold",
                    },
                  }}
                />

                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: "8px !important",
                  }}
                >
                  <Typography variant="body1">{comment.text}</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <IconButton size="small" color="secondary">
                      {comment.isLiked ? (
                        <FavoriteIcon />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </IconButton>
                    <Typography sx={{ mx: "auto" }} variant="caption">
                      {Math.floor(Math.random() * 10)}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Collapse>
      </Card>

      <CustomMenu
        menuList={postMenus.map(({ label, onclick, icon }) => ({
          label: label,
          action: onclick,
          Icon: icon,
        }))}
        menuAt="right"
        open={openPostMenu}
        handleClose={() => setPostMenu(false)}
        anchorEl={anchorEl}
      />
    </Paper>
  );
};

export default CustomCard;
