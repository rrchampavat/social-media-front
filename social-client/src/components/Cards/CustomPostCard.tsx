import { FC, ReactElement, useState } from "react";
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
  useMediaQuery,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CustomMenu from "../CustomMenu";
import { COMMENT, postMenus } from "../../utils/constants";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import appTheme from "../../utils/theme";
import CustomButton from "../CustomButton";
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

const CustomPostCard: FC<CustomPostCardProps> = (props) => {
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

  const mdView = useMediaQuery("(min-width:600px)");

  const handleMenuClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setAnchorEl(event.currentTarget);
    setPostMenu(true);
  };

  const userImage: ReactElement = userAvatar ? (
    <Avatar
      src={userAvatar}
      sx={{ width: { xs: 30, md: 40 }, height: { xs: 30, md: 40 } }}
    />
  ) : (
    <Avatar sx={{ width: { xs: 30, md: 40 }, height: { xs: 30, md: 40 } }}>
      {userName?.charAt(0).toUpperCase()}
    </Avatar>
  );

  const locationEle: ReactElement = (
    <Box
      sx={{
        display: "flex",
        lineHeight: 1.43,
        alignItems: "center",
      }}
    >
      <LocationOnOutlinedIcon sx={{ fontSize: { xs: 10, md: 14 }, mr: 0.3 }} />
      <Typography
        sx={{
          fontSize: { xs: 10, md: 14 },
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
              <MoreVertIcon sx={{ fontSize: { xs: 15, md: "1.5rem" } }} />
            </IconButton>
          }
          title={userName}
          sx={{
            ".css-et1ao3-MuiTypography-root,.css-83ijpv-MuiTypography-root": {
              color: appTheme.palette.primary.contrastText,
              fontSize: { xs: "0.65rem", md: "0.875rem" },
            },
            ".css-et1ao3-MuiTypography-root": {
              fontWeight: "bold",
            },
            ".css-hrzsje-MuiTypography-root": {
              fontSize: { xs: 10, md: 14 },
            },
            p: { xs: 1, md: 2 },
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
            mx: "auto",
          }}
          onClick={handleClick}
        />

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            bgcolor: "white",
            py: 0,
          }}
        >
          <Box>
            <IconButton color="secondary">
              {isLiked ? (
                <FavoriteIcon sx={{ fontSize: { xs: 20, md: 28 } }} />
              ) : (
                <FavoriteBorderIcon sx={{ fontSize: { xs: 20, md: 28 } }} />
              )}
            </IconButton>
            <IconButton
              sx={{ color: appTheme.palette.primary.dark }}
              onClick={handleClick}
            >
              <CommentIcon sx={{ fontSize: { xs: 20, md: 28 } }} />
            </IconButton>
            <IconButton
              sx={{
                color: appTheme.palette.primary.dark,
              }}
            >
              <SendIcon sx={{ fontSize: { xs: 20, md: 28 } }} />
            </IconButton>
          </Box>
          <IconButton sx={{ color: appTheme.palette.primary.dark }}>
            <BookmarkBorderOutlinedIcon sx={{ fontSize: { xs: 20, md: 28 } }} />
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
                height: { xs: 20, md: 30 },
                width: { xs: 20, md: 30 },
                fontSize: { xs: 11, md: 14 },
              },
            }}
          >
            {comments?.map(({ userAvatar, commentID }) => (
              <Avatar
                key={commentID}
                src={userAvatar}
                sx={{
                  height: { xs: 20, md: 30 },
                  width: { xs: 20, md: 30 },
                }}
              />
            ))}
          </AvatarGroup>
          <Typography fontSize={mdView ? 15 : 12} ml={1}>
            Liked by
          </Typography>
          &nbsp;
          <Typography fontSize={mdView ? 15 : 12} fontWeight={"bold"}>
            {/* {isLiked ? "You" : comments[0]?.userName}  */}
          </Typography>
          &nbsp;
          <Typography fontSize={mdView ? 15 : 12}>
            and {likeCount} others
          </Typography>
        </CardContent>

        <CardContent
          sx={{
            bgcolor: "white",
            display: "flex",
            flexDirection: "column",
            py: 0.5,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography
              variant={mdView ? "body1" : "caption"}
              fontWeight={"bold"}
              sx={{ mr: 1 }}
            >
              {userName}
            </Typography>
            <Typography variant={mdView ? "body1" : "caption"}>
              {caption}
            </Typography>
          </Box>

          <Typography
            variant="button"
            onClick={handleClick}
            sx={{ mt: 0.5, width: "max-content", cursor: "pointer" }}
            fontSize={mdView ? 15 : 12}
          >
            View all {comments?.length} comments
          </Typography>

          {mdView
            ? comments
                ?.slice(0, 2)
                ?.map(({ userName, text, commentID, isLiked }) => (
                  <Box
                    sx={{ display: "flex", alignItems: "center" }}
                    key={commentID}
                  >
                    <Typography
                      fontSize={mdView ? 15 : 12}
                      fontWeight={"bold"}
                      mr={1}
                    >
                      {userName}
                    </Typography>
                    <Typography fontSize={mdView ? 15 : 12}>{text}</Typography>
                    <IconButton sx={{ ml: "auto" }}>
                      {isLiked ? (
                        <FavoriteIcon
                          color="secondary"
                          sx={{ fontSize: mdView ? 15 : 12 }}
                        />
                      ) : (
                        <FavoriteBorderIcon
                          color="secondary"
                          sx={{ fontSize: mdView ? 15 : 12 }}
                        />
                      )}
                    </IconButton>
                  </Box>
                ))
            : null}

          <Typography variant="caption" mt={0.5} sx={{ color: "grey" }}>
            {moment(created_at).fromNow()}
          </Typography>
        </CardContent>

        <InputBase
          placeholder="Comment..."
          sx={{
            backgroundColor: appTheme.palette.primary.dark,
            color: appTheme.palette.primary.contrastText,
            height: { xs: 40, md: 50 },
            flex: 1,
            width: "100%",
            p: 1,
            m: "0px !important",
            fontSize: { xs: "0.8rem", md: "1rem" },
          }}
          endAdornment={
            <CustomButton
              variant="text"
              label="Post "
              sx={{
                color: appTheme.palette.primary.contrastText,
                fontSize: { xs: "0.7rem", md: "0.875rem" },
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
