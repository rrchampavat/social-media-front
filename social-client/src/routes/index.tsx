import MainLoyout from "../layout/MainLayout";
import Home from "../pages/home";
import Profile from "../pages/profile";

const Router = [
  {
    path: "/",
    element: <MainLoyout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
];

export default Router;
