import { ImageList, ImageListItem, Tab, Tabs } from "@mui/material";
import { createPosts } from "../../../utils/constants";
import theme from "../../../utils/theme";

const posts = createPosts();

const PostsList = () => {
  return (
    <>
      <Tabs>
        <Tab label="Posts" sx={{ color: () => theme.palette.primary.main }} />
        <Tab label="Saved" sx={{ color: () => theme.palette.primary.main }} />
        <Tab label="Tagged" sx={{ color: () => theme.palette.primary.main }} />
      </Tabs>
      <ImageList sx={{ minHeight: "65vh" }} cols={3}>
        {posts.map(({ postID, image }) => (
          <ImageListItem key={postID}>
            <img src={image} alt="Post" loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default PostsList;
