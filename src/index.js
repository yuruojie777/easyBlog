import React from "react";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Blog } from "./blog/blog";
import { Profile } from "./profile/profile";
import { New } from "./new/new";
import { BlogCreatorPage } from "./blog/blogCreatorPage";
import { Login } from "./login/login";
import { article } from "./data";
import { Article, loader as articleLoader } from "./blog/article";
import { Home } from "./home/home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "blog",
        element: <Blog/>,
        loader: article,
        children: [
          {
            path: ':blogId',
            element: <Article/>,
            loader: articleLoader
          }
        ]
      },
      {
        path: "blog/new",
        element: <BlogCreatorPage/>,
      },
      {
        path: "profile",
        element: <Profile/>
      },
      {
        path: "new",
        element: <New/>
      }
    ],
  },
  {
    path: '/login',
    element: <Login/>
  }
]);
document.body.style.backgroundColor='white';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
