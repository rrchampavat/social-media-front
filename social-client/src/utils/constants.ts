import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ReportIcon from "@mui/icons-material/Report";
import PersonRemoveOutlinedIcon from "@mui/icons-material/PersonRemoveOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import { faker } from "@faker-js/faker";
import { USER } from "../redux/user/userTypes";
import { POST } from "../redux/post/postTypes";

export const profileMenu = [
  {
    label: "Profile",
    icon: AccountCircleIcon,
    navigateTo: "/profile",
  },
  {
    label: "Settings",
    icon: SettingsIcon,
    navigateTo: "/settings",
  },
  { label: "Logout", onclick: () => console.log("Logout"), icon: LogoutIcon },
];

export const postMenus = [
  {
    label: "Unfollow",
    onclick: () => console.log("Unfollowed"),
    icon: PersonRemoveOutlinedIcon,
  },
  {
    label: "Go to post",
    onclick: () => console.log("Went to post"),
    icon: ArrowCircleRightOutlinedIcon,
  },

  {
    label: "Copy link",
    onclick: () => console.log("Link Coppied"),
    icon: ContentCopyOutlinedIcon,
  },
  { label: "Report", onclick: () => console.log("Report"), icon: ReportIcon },
];

// faker.seed(123);

export const createUser = () => {
  let user: USER = {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
    fullName: faker.name.fullName(),
    postCount: faker.datatype.number({ min: 5, max: 20 }),
    followerCount: faker.datatype.number({ min: 10, max: 1000 }),
    followingCount: faker.datatype.number({ min: 10, max: 1000 }),
    bio: faker.lorem.lines(),
  };

  return user;
};

const users: USER[] = [];

export const createUsers = (count = 10) => {
  Array.from({ length: count }).forEach(() => {
    users.push(createUser());
  });

  return users;
};

export interface COMMENT {
  commentID: string;
  userName: string;
  userAvatar: string;
  text: string;
  likes: number;
  date: Date;
  isLiked: boolean;
}

export const createComment = () => {
  const comment: COMMENT = {
    commentID: faker.datatype.uuid(),
    userName: faker.internet.userName(),
    userAvatar: faker.image.avatar(),
    text: faker.lorem.sentence(),
    likes: faker.datatype.number({ min: 10, max: 500 }),
    date: faker.date.between("2022-08-14T00:00:00.000Z", new Date()),
    isLiked: faker.datatype.boolean(),
  };

  return comment;
};

const comments: COMMENT[] = [];

export const randomComments = () => {
  Array.from({ length: 1 }).forEach(() => {
    comments.push(createComment());
  });

  return comments;
};

export const createPost = () => {
  const post: POST = {
    postID: faker.datatype.uuid(),
    userName: faker.internet.userName(),
    image: faker.image.image(),
    caption: faker.lorem.sentence(),
    comments: randomComments(),
    userAvatar: faker.image.avatar(),
    likeCount: faker.datatype.number({ min: 10, max: 200 }),
    isLiked: faker.datatype.boolean(),
    location: faker.address.cityName(),
    created_at: faker.date.between("2022-08-14T00:00:00.000Z", new Date()),
  };

  return post;
};

const posts: POST[] = [];

export const createPosts = (count: number) => {
  Array.from({ length: count }).forEach(() => {
    posts.push(createPost());
  });

  return posts;
};
