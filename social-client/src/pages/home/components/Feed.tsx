import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import CustomPostCard from "../../../components/Cards/CustomPostCard";
import PostDialog from "../../../components/DialogBox/PostDialog";
import { POST } from "../../../redux/post/postTypes";
import { postInitialState } from "../../../utils/initialStates";

import { getFollowingUserPosts } from "../../../services/Post";

const Feed = () => {
  const [feedPosts, setFeedPosts] = useState<Array<POST>>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<POST>(postInitialState);

  useEffect(() => {
    getFollowingUserPosts()
      .then((res) => {
        setFeedPosts(res.data);
      })
      .catch((error: any) => console.log(error));
  }, []);

  const handleClick = (post: POST): void => {
    setOpenDialog(true);
    setSelectedPost(post);
  };

  return (
    <Box>
      {feedPosts?.map((post: POST, id) => (
        <Box key={id}>
          <CustomPostCard
            userName={post.user}
            image={post.imageURL}
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
