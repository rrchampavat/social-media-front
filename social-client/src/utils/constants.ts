import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import LinkIcon from "@mui/icons-material/Link";
import ReportIcon from "@mui/icons-material/Report";
import { faker } from "@faker-js/faker";
import { USER } from "../redux/user/userTypes";

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
    label: "Save",
    onclick: () => console.log("Saved"),
    icon: BookmarkBorderOutlinedIcon,
  },
  {
    label: "Link",
    onclick: () => console.log("Link"),
    icon: LinkIcon,
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

export const createUsers = () => {
  Array.from({ length: 1 }).forEach(() => {
    users.push(createUser());
  });

  return users;
};

interface COMMENT {
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
    date: faker.date.between(new Date(10 / 10 / 2022), new Date()),
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

interface POST {
  postID: string;
  userName: string;
  image: string;
  caption: string;
  comments: COMMENT[];
  userAvatar: string;
  likeCount: number;
  commentsCount: number;
  isLiked: boolean;
  location: string;
}

export const createPost = () => {
  const post: POST = {
    postID: faker.datatype.uuid(),
    userName: faker.internet.userName(),
    image: faker.image.image(),
    caption: faker.lorem.sentence(),
    comments: randomComments(),
    userAvatar: faker.image.avatar(),
    likeCount: faker.datatype.number({ min: 10, max: 200 }),
    commentsCount: faker.datatype.number({ min: 0, max: 20 }),
    isLiked: faker.datatype.boolean(),
    location: faker.address.cityName(),
  };

  return post;
};

const posts: POST[] = [];

export const createPosts = (count = 5) => {
  Array.from({ length: count }).forEach(() => {
    posts.push(createPost());
  });

  return posts;
};
