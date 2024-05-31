import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Queries from "../pages/Queries/Queries";
import MyQueries from "../pages/MyQueries/MyQueries ";
import AddQueries from "../pages/AddQueries/AddQueries";
import Details from "../pages/Shared/Details/Details";
import UpdateQueries from "../pages/MyQueries/UpdateQueries";
import MyRecommendation from "../pages/MyRecommendation/MyRecommendation";
import RecommendationMe from "../pages/RecommendationMe/RecommendationMe";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: '/profile',
        element: <Profile></Profile>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: '/queries',
        element: <Queries></Queries>,
      },
      {
        path: '/myqueries',
        element: <PrivateRoute><MyQueries></MyQueries></PrivateRoute>
      },
      {
        path: '/addqueries',
        element: <PrivateRoute><AddQueries></AddQueries></PrivateRoute>
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/userAddqueries/${params.id}`),
      },
      {
        path: "/updateQueries/:id",
        element: <PrivateRoute><UpdateQueries></UpdateQueries></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/userAddqueries/${params.id}`),
      },
      {
        path: "/myrecommendations",
        element: <PrivateRoute><MyRecommendation></MyRecommendation></PrivateRoute>
      },
      {
        path: "/recommendationsforMe",
        element: <PrivateRoute><RecommendationMe></RecommendationMe></PrivateRoute>
      }

    ]
  },
]);

export default router;