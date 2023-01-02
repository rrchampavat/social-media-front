import { POST } from "../redux/post/postTypes";
import { USER } from "../redux/user/userTypes";

export const postInitialState: POST = {
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

export const userInitialState: USER = {
  // userId: "",
  userName: "",
  avatar: "",
  fullName: "",
  postCount: 0,
  followerCount: 0,
  followingCount: 0,
  bio: "",
};
