import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomPostCard from "../../../components/Cards/CustomPostCard";
import PostDialog from "../../../components/DialogBox/PostDialog";
import { getPosts } from "../../../redux/post/postActions";
import { POST } from "../../../redux/post/postTypes";
import { postInitialState } from "../../../utils/initialStates";

const Feed = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state: any) => state.PostReducer);

  const [feedPosts, setFeedPosts] = useState<Array<POST>>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<POST>(postInitialState);

  useEffect(() => {
    setFeedPosts(posts);
    if (!posts?.length) {
      dispatch(getPosts(10));
    }
  }, [posts, dispatch]);

  const handleClick = (post: POST): void => {
    setOpenDialog(true);
    setSelectedPost(post);
  };

  return (
    <Box>
      {feedPosts?.map((post: POST) => (
        <Box key={post.postID}>
          <CustomPostCard
            userName={post.userName}
            image={post.image}
            caption={post.caption}
            comments={post.comments}
            userAvatar={post.userAvatar}
            isLiked={post.isLiked}
            postID={post.postID}
            likeCount={post.likeCount}
            location={post.location}
            created_at={post.created_at}
            handleClick={() => handleClick(post)}
          />
        </Box>
      ))}

      <PostDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        post={selectedPost}
      />
    </Box>
  );
};

export default Feed;
