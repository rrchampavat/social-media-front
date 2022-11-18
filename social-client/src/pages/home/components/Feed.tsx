import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomCard from "../../../components/CustomCard";
import { getPosts } from "../../../redux/post/postActions";
import { POST } from "../../../redux/post/postTypes";

const Feed = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state: any) => state.PostReducer);

  const [feedPosts, setFeedPosts] = useState<Array<POST>>([]);

  useEffect(() => {
    setFeedPosts(posts);
    if (!posts?.length) {
      dispatch(getPosts(10));
    }
  }, [posts, dispatch]);

  return (
    <Box>
      {feedPosts?.map((post: POST) => (
        <Box key={post.postID}>
          <CustomCard
            userName={post.userName}
            image={post.image}
            caption={post.caption}
            comments={post.comments}
            userAvatar={post.userAvatar}
            isLiked={post.isLiked}
            postID={post.postID}
            likeCount={post.likeCount}
            location={post.location}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Feed;
