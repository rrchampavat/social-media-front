import { lazy } from "react";

const Home = lazy(() => import("../pages/home"));
const Profile = lazy(() => import("../pages/profile"));
const Login = lazy(() => import("../pages/auth/Login"));
const Signup = lazy(() => import("../pages/auth/Signup"));
const MainLayout = lazy(() => import("../layout/MainLayout"));
const AuthLayout = lazy(() => import("../layout/AuthLayout"));
const Error404 = lazy(() => import("../pages/error/Error404"));

const Router = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile", element: <Profile /> },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/signup",
        element: <Signup />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
    ],
  },
];

export default Router;
