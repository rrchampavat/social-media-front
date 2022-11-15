import { ImageList, ImageListItem, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { POST } from "../../../redux/post/postTypes";
import { getUserPosts } from "../../../redux/user/userActions";
import theme from "../../../utils/theme";

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state: any) => state.UserReducer);

  const [userPosts, setUserPosts] = useState<Array<POST>>([]);
  const [activeTab, setActiveTab] = useState<string>("Posts");

  useEffect(() => {
    setUserPosts(posts);
    if (!posts?.length) {
      dispatch(getUserPosts(6));
    }
  }, [posts, dispatch]);

  return (
    <>
      <Tabs
        onChange={(_e: SyntheticEvent, value) => setActiveTab(value)}
        textColor={theme.palette.primary.main}
        indicatorColor="primary"
        value={activeTab}
      >
        <Tab label="Posts" value="Posts" />
        <Tab label="Tagged" value="Tagged" />
        <Tab label="Saved" value="Saved" />
      </Tabs>
      <ImageList sx={{ minHeight: "65vh" }} cols={3}>
        {userPosts?.map(({ postID, image }) => (
          <ImageListItem key={postID}>
            <img src={image} alt="Post" loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default PostsList;
