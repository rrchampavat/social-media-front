import { FC } from "react";
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
  ListItemText,
  Typography,
  useMediaQuery,
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
import CustomButton from "../CustomButton";
import moment from "moment";
import { POST } from "../../redux/post/postTypes";

interface PostDialogProps {
  open: boolean;
  onClose: any;
  post: POST;
}

const PostDialog: FC<PostDialogProps> = (props) => {
  const { open, onClose, post } = props;

  const mdView = useMediaQuery("(min-width:600px)");

  const userImage = post?.userAvatar ? (
    <Avatar
      src={post?.userAvatar}
      sx={{ width: { xs: 30, md: 40 }, height: { xs: 30, md: 40 } }}
    />
  ) : (
    <Avatar sx={{ width: { xs: 30, md: 40 }, height: { xs: 30, md: 40 } }}>
      {post?.user?.charAt(0)?.toUpperCase()}
    </Avatar>
  );

  const locationEle = (
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
          maxHeight: { xs: 650, md: 800 },
          background: appTheme.palette.primary.contrastText,
        },
      }}
    >
      <Card
        sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
      >
        <CardMedia
          component={"img"}
          image={post?.imageURL}
          alt={"Card Image"}
          sx={{
            height: 800,
            width: 800,
            bgcolor: appTheme.palette.primary.contrastText,
            display: { xs: "none", md: "inline-flex" },
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
            width: { xs: 300, md: 600 },
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
            title={post?.user}
            sx={{
              ".css-et1ao3-MuiTypography-root,.css-83ijpv-MuiTypography-root": {
                color: appTheme.palette.primary.contrastText,
              },
              ".css-et1ao3-MuiTypography-root": {
                fontWeight: "bold",
              },
              backgroundColor: appTheme.palette.primary.dark,
              ".css-hrzsje-MuiTypography-root": {
                fontSize: { xs: 10, md: 14 },
              },
              p: { xs: 1, md: 2 },
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
                <Avatar
                  src={comment.userAvatar}
                  sx={{
                    mr: { xs: 1, md: 2 },
                    width: { xs: 30, md: 40 },
                    height: { xs: 30, md: 40 },
                  }}
                />

                <ListItemText
                  sx={{
                    whiteSpace: "pre-wrap",
                  }}
                >
                  <Typography fontSize={mdView ? 15 : 12}>
                    {comment.text + "\n"}
                  </Typography>
                  <Typography fontSize={mdView ? 15 : 11} variant="caption">
                    {moment(comment.date).fromNow()}
                  </Typography>
                  <Typography
                    variant="caption"
                    ml={1}
                    p={0.5}
                    fontSize={mdView ? 15 : 11}
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
                      <FavoriteIcon
                        color="secondary"
                        sx={{ fontSize: { xs: 15, md: 20 } }}
                      />
                    ) : (
                      <FavoriteBorderIcon
                        color="secondary"
                        sx={{ fontSize: { xs: 15, md: 20 } }}
                      />
                    )}
                  </IconButton>
                  <Typography sx={{ fontSize: { xs: 10, md: 13 } }}>
                    {comment.likes}
                  </Typography>
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
                width: { xs: 288, md: 592 },
              }}
            >
              <Box>
                <IconButton color="secondary">
                  {post?.isLiked ? (
                    <FavoriteIcon sx={{ fontSize: { xs: 20, md: 28 } }} />
                  ) : (
                    <FavoriteBorderIcon sx={{ fontSize: { xs: 20, md: 28 } }} />
                  )}
                </IconButton>
                <IconButton sx={{ color: appTheme.palette.primary.dark }}>
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
                <BookmarkBorderOutlinedIcon
                  sx={{ fontSize: { xs: 20, md: 28 } }}
                />
              </IconButton>
            </Box>

            <CardContent
              sx={{
                bgcolor: "white",
                display: "flex",
                alignItems: "center",
                p: 0,
                width: { xs: 288, md: 592 },
                background: appTheme.palette.primary.contrastText,
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
                {post?.comments?.map(({ userAvatar, commentID }: any) => (
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
              <Typography
                fontSize={mdView ? 15 : 12}
                ml={1}
                whiteSpace="nowrap"
              >
                Liked by
              </Typography>
              &nbsp;
              <Typography
                fontSize={mdView ? 15 : 12}
                fontWeight={"bold"}
                whiteSpace="nowrap"
              >
                {post?.isLiked ? "You" : post?.comments[0]?.userName}
              </Typography>
              &nbsp;
              <Typography
                fontSize={mdView ? 15 : 12}
                sx={{ wordBreak: "break-word" }}
              >
                and {post?.likeCount} others
              </Typography>
            </CardContent>

            {mdView ? (
              <Box
                sx={{
                  display: "flex",
                  py: 1,
                  justifyContent: "flex-start",
                  width: { xs: 288, md: 592 },
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  fontSize={mdView ? 15 : 12}
                  fontWeight={"bold"}
                  sx={{ mr: 1 }}
                >
                  {post?.user}
                </Typography>
                <Typography variant="body2" fontSize={mdView ? 15 : 12}>
                  {post?.caption}
                </Typography>
              </Box>
            ) : null}

            <Typography
              variant="h1"
              display="flex"
              justifyContent="flex-end"
              width="100%"
              mr={2}
              fontSize={mdView ? 15 : 12}
              color="gray"
            >
              {moment(post?.created_at).fromNow()}
            </Typography>

            <InputBase
              placeholder="Comment"
              sx={{
                backgroundColor: appTheme.palette.primary.dark,
                color: appTheme.palette.primary.contrastText,
                height: { xs: 40, md: 50 },
                flex: 1,
                width: "100%",
                p: 1,
                m: "0px !important",
              }}
              endAdornment={
                <CustomButton
                  variant="text"
                  label="Post "
                  sx={{
                    fontSize: { xs: "0.7rem", md: "0.875rem" },
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
