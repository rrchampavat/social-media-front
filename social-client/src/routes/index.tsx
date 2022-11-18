import { lazy } from "react";

const MainLoyout = lazy(() => import("../layout/MainLayout"));
const Home = lazy(() => import("../pages/home"));
const Profile = lazy(() => import("../pages/profile"));

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
