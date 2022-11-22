import { ImageList, ImageListItem, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostDialog from "../../../components/DialogBox/PostDialog";
import { POST } from "../../../redux/post/postTypes";
import { getUserPosts } from "../../../redux/user/userActions";
import { initialPostState } from "../../../utils/initialStates";
import appTheme from "../../../utils/theme";

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts, user } = useSelector((state: any) => state.UserReducer);

  const [userPosts, setUserPosts] = useState<Array<POST>>([]);
  const [activeTab, setActiveTab] = useState<string>("Posts");
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<POST>(initialPostState);

  useEffect(() => {
    setUserPosts(posts);
    if (!posts?.length) {
      dispatch(getUserPosts(user?.postCount));
    }
  }, [posts, dispatch, user]);

  const handleClick = (post: POST) => {
    setOpenDialog(true);
    setSelectedPost(post);
  };

  return (
    <>
      <Tabs
        onChange={(_e: SyntheticEvent, value) => setActiveTab(value)}
        // @ts-ignore
        textColor={appTheme.palette.primary.dark}
        indicatorColor="primary"
        value={activeTab}
      >
        <Tab label={`Posts (${posts?.length})`} value="Posts" />
        <Tab label={`Tagged (${posts?.length})`} value="Tagged" />
        <Tab label={`Saved (${posts?.length})`} value="Saved" />
      </Tabs>
      <ImageList sx={{ minHeight: "65vh" }} cols={3}>
        {userPosts?.map((post) => (
          <ImageListItem key={post.postID} onClick={() => handleClick(post)}>
            <img src={post.image} alt="Post" loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>

      <PostDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        post={selectedPost}
      />
    </>
  );
};

export default PostsList;
