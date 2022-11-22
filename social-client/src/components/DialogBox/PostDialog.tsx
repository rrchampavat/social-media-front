import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Dialog,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

import { COMMENT } from "../../utils/constants";
import appTheme from "../../utils/theme";
import CustomBotton from "../CustomBotton";
import moment from "moment";
import { POST } from "../../redux/post/postTypes";

interface PostDialogProps {
  open: boolean;
  onClose: any;
  post: POST;
}

const PostDialog = (props: PostDialogProps) => {
  const { open, onClose, post } = props;

  const userImage = post?.userAvatar ? (
    <Avatar src={post?.userAvatar} />
  ) : (
    <Avatar>{post?.userName?.charAt(0)?.toUpperCase()}</Avatar>
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
        {post?.location}
      </Typography>
    </Box>
  );

  return (
    <Dialog
      onClose={onClose}
      open={open}
      sx={{
        ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
          maxWidth: 1400,
          maxHeight: 800,
          background: appTheme.palette.primary.contrastText,
        },
      }}
    >
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component={"img"}
          image={post?.image}
          alt={"Card Image"}
          sx={{
            height: 800,
            width: 800,
            bgcolor: appTheme.palette.primary.contrastText,
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            "::-webkit-scrollbar ": {
              display: "none",
            },
            overflow: "auto",
            width: 600,
          }}
        >
          <CardHeader
            avatar={userImage}
            action={
              <IconButton
                sx={{ color: appTheme.palette.primary.contrastText }}
                onClick={onClose}
              >
                <CloseOutlinedIcon />
              </IconButton>
            }
            title={post?.userName}
            sx={{
              ".css-et1ao3-MuiTypography-root,.css-83ijpv-MuiTypography-root": {
                color: appTheme.palette.primary.contrastText,
              },
              ".css-et1ao3-MuiTypography-root": {
                fontWeight: "bold",
              },
              backgroundColor: appTheme.palette.primary.dark,
              p: 1.5,
              position: "sticky",
              top: 0,
              zIndex: 1,
            }}
            subheader={post?.location ? locationEle : null}
          />

          <Divider />

          <List>
            {post?.comments?.map((comment: COMMENT) => (
              <ListItem key={comment?.commentID}>
                <ListItemAvatar>
                  <Avatar src={comment.userAvatar} sx={{ mr: 1 }} />
                </ListItemAvatar>

                <ListItemText
                  sx={{
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {comment.text + "\n"}
                  <Typography variant="caption">
                    {moment(comment.date).fromNow()}
                  </Typography>
                  <Typography
                    variant="caption"
                    ml={1}
                    p={0.5}
                    sx={{
                      cursor: "pointer",
                      ":hover": {
                        border: `1px solid ${appTheme.palette.primary.dark}`,
                        borderRadius: 1,
                      },
                    }}
                  >
                    Reply
                  </Typography>
                </ListItemText>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton sx={{ ml: "auto" }}>
                    {comment.isLiked ? (
                      <FavoriteIcon color="secondary" />
                    ) : (
                      <FavoriteBorderIcon color="secondary" />
                    )}
                  </IconButton>
                  <Typography sx={{ fontSize: 12 }}>{comment.likes}</Typography>
                </Box>
              </ListItem>
            ))}
          </List>

          <CardActions
            sx={{
              display: "flex",
              position: "sticky",
              bottom: -1,
              zIndex: 1,
              p: 0,
              flexDirection: "column",
              backgroundColor: appTheme.palette.primary.contrastText,
              border: `1px solid #80808038`,
              borderRight: "hidden",
              borderBottom: "hidden",
              borderLeft: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: 600,
              }}
            >
              <Box>
                <IconButton color="secondary">
                  {post?.isLiked ? (
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
            </Box>

            <CardContent
              sx={{
                bgcolor: "white",
                display: "flex",
                alignItems: "center",
                p: 0,
                width: 592,
                background: appTheme.palette.primary.contrastText,
              }}
            >
              <AvatarGroup
                max={4}
                sx={{
                  ".css-sxh3gq-MuiAvatar-root-MuiAvatarGroup-avatar": {
                    height: 25,
                    width: 25,
                    fontSize: 11,
                  },
                }}
              >
                {post?.comments?.map(({ userAvatar, commentID }: any) => (
                  <Avatar
                    key={commentID}
                    src={userAvatar}
                    sx={{
                      height: 25,
                      width: 25,
                    }}
                  />
                ))}
              </AvatarGroup>
              <Typography fontSize={15} ml={1}>
                Liked by
              </Typography>
              &nbsp;
              <Typography fontSize={15} fontWeight={"bold"}>
                {post?.isLiked ? "You" : post?.comments[0]?.userName}
              </Typography>
              &nbsp;
              <Typography>and {post?.likeCount} others</Typography>
            </CardContent>

            <Box
              sx={{
                display: "flex",
                py: 1,
                justifyContent: "flex-start",
                width: 592,
                alignItems: "center",
              }}
            >
              <Typography variant="body2" fontWeight={"bold"} sx={{ mr: 1 }}>
                {post?.userName}
              </Typography>
              <Typography variant="body2">{post?.caption}</Typography>
              <Typography variant="caption" ml="auto" mr={1}>
                {moment(post?.created_at).fromNow()}
              </Typography>
            </Box>

            <InputBase
              placeholder="Comment"
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
          </CardActions>
        </Box>
      </Card>
    </Dialog>
  );
};

export default PostDialog;
