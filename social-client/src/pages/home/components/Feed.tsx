import { Box } from "@mui/material";
import CustomCard from "../../../components/CustomCard";
import { createPosts } from "../../../utils/constants";

const feedPosts = createPosts(10);

const Feed = () => {
  return (
    <Box>
      {feedPosts?.map((post, id) => (
        <Box key={id}>
          <CustomCard
            userName={post.userName}
            image={post.image}
            caption={post.caption}
            comments={post.comments}
            userAvatar={post.userAvatar}
            isLiked={post.isLiked}
            postID={post.postID}
            commentsCount={post.commentsCount}
            likeCount={post.likeCount}
            location={post.location}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Feed;
