import { POST } from "../redux/post/postTypes";

export const initialPostState: POST = {
  postID: "",
  userAvatar: "",
  userName: "",
  image: "",
  caption: "",
  comments: [],
  likeCount: 0,
  isLiked: false,
  location: "",
  created_at: new Date(),
};
