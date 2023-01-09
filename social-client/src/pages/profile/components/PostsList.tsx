import {
  Box,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostDialog from "../../../components/DialogBox/PostDialog";
import { POST } from "../../../redux/post/postTypes";
import { postInitialState } from "../../../utils/initialStates";
import appTheme from "../../../utils/theme";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { getPosts } from "../../../redux/post/postActions";
import { useSnackbar } from "notistack";

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts, message } = useSelector((state: any) => state.PostReducer);
  const { enqueueSnackbar } = useSnackbar();

  const isMDView = useMediaQuery("(min-width:600px)");

  const [userPosts, setUserPosts] = useState<Array<POST>>([]);
  const [activeTab, setActiveTab] = useState<string>("Posts");
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<POST>(postInitialState);

  useEffect(() => {
    setUserPosts(posts);
    if (!posts?.length) {
      dispatch(getPosts());
    }
  }, [posts, dispatch]);

  useEffect(() => {
    if (message.type === "error") {
      enqueueSnackbar(message.text, {
        variant: message.type,
      });
    }
  }, [enqueueSnackbar, message.text, message.type]);

  const handleClick = (post: POST) => {
    setOpenDialog(true);
    setSelectedPost(post);
  };

  return userPosts?.length ? (
    <>
      <Tabs
        onChange={(_e: SyntheticEvent, value) => setActiveTab(value)}
        // @ts-expect-error
        textColor={appTheme.palette.primary.dark}
        indicatorColor="primary"
        value={activeTab}
      >
        <Tab label={`Posts (${posts?.length})`} value="Posts" />
        <Tab label={`Tagged (${posts?.length})`} value="Tagged" />
        <Tab label={`Saved (${posts?.length})`} value="Saved" />
      </Tabs>

      <ImageList
        sx={{ minHeight: { xs: "35vh", md: "55vh" } }}
        cols={3}
        rowHeight={isMDView ? 230 : 120}
        gap={isMDView ? 10 : 4}
      >
        {userPosts?.map((post, id) => (
          <ImageListItem key={id} onClick={() => handleClick(post)}>
            <img src={post?.imageURL} alt="Post" />

            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              }}
              // title={post.caption}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: "white" }}
                  aria-label={`star ${post.caption}`}
                >
                  {post?.isLiked ? (
                    <FavoriteIcon
                      color="secondary"
                      sx={{ fontSize: { xs: 15, md: 20 } }}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      // color="secondary"
                      sx={{ fontSize: { xs: 15, md: 20 } }}
                    />
                  )}
                </IconButton>
              }
              actionPosition="right"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <PostDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        post={selectedPost}
      />
    </>
  ) : (
    <Box
      sx={{
        minHeight: { xs: "55vh", md: "67.5vh" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CameraAltOutlinedIcon
        sx={{
          fontSize: { xs: 50, md: 80 },
          color: appTheme.palette.primary.dark,
          mr: 1,
        }}
      />
      <Typography variant="h5" sx={{ color: appTheme.palette.primary.dark }}>
        No Posts Yet !
      </Typography>
    </Box>
  );
};

export default PostsList;
