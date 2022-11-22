import {
  Avatar,
  AvatarGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/system";
import { ReactElement, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CustomMenu from "../CustomMenu";
import { COMMENT, postMenus } from "../../utils/constants";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import appTheme from "../../utils/theme";
import CustomBotton from "../CustomBotton";
import moment from "moment";

interface CustomPostCardProps {
  postID: string;
  userName: string;
  image: string;
  caption: string;
  comments: Array<COMMENT>;
  userAvatar: string;
  likeCount: number;
  isLiked: boolean;
  location?: string;
  created_at: Date;
  handleClick: any;
}

const CustomPostCard = (props: CustomPostCardProps) => {
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
    created_at,
    handleClick,
  } = props;

  const [openPostMenu, setPostMenu] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setAnchorEl(event.currentTarget);
    setPostMenu(true);
  };

  const userImage: ReactElement = userAvatar ? (
    <Avatar src={userAvatar} />
  ) : (
    <Avatar>{userName.charAt(0).toUpperCase()}</Avatar>
  );

  const locationEle: ReactElement = (
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
              onClick={handleMenuClick}
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
          onClick={handleClick}
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
            <IconButton
              sx={{ color: appTheme.palette.primary.dark }}
              onClick={handleClick}
            >
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
            onClick={handleClick}
            sx={{ mt: 1, width: "max-content", cursor: "pointer" }}
          >
            View all {comments?.length} comments
          </Typography>

          {comments
            ?.slice(0, 2)
            ?.map(({ userName, text, commentID, isLiked }) => (
              <Box
                sx={{ display: "flex", alignItems: "center" }}
                key={commentID}
              >
                <Typography fontSize={13} fontWeight={"bold"} mr={1}>
                  {userName}
                </Typography>
                <Typography fontSize={13}>{text}</Typography>
                <IconButton sx={{ ml: "auto" }}>
                  {isLiked ? (
                    <FavoriteIcon color="secondary" sx={{ fontSize: 15 }} />
                  ) : (
                    <FavoriteBorderIcon
                      color="secondary"
                      sx={{ fontSize: 15 }}
                    />
                  )}
                </IconButton>
              </Box>
            ))}

          <Typography variant="caption" mt={1} sx={{ color: "grey" }}>
            {moment(created_at).fromNow()}
          </Typography>
        </CardContent>

        <InputBase
          placeholder="Comment..."
          sx={{
            backgroundColor: appTheme.palette.primary.dark,
            color: appTheme.palette.primary.contrastText,
            height: 50,
            flex: 1,
            width: "100%",
            p: 1,
            m: "0px !important",
            ".css-1uqfcdx-MuiButtonBase-root-MuiButton-root:hover": {
              border: `1px solid ${appTheme.palette.primary.contrastText}`,
              // boxShadow: "0px -1px 40px 0px rgba(0,0,0,0.75)",
            },
          }}
          endAdornment={
            <CustomBotton
              variant="outlined"
              label="Post "
              sx={{
                borderColor: appTheme.palette.primary.contrastText,
                color: appTheme.palette.primary.contrastText,
              }}
            />
          }
        />
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

export default CustomPostCard;
