import './App.css';
import React, {useMemo, useState} from "react";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Blog } from "./blog/blog";
import { Profile } from "./profile/profile";
import { New } from "./new/new";
import { BlogCreatorPage } from "./blog/blogCreatorPage";
import { article } from "./data";
import { Article, loader as articleLoader } from "./blog/article";
import { Home } from "./home/home";
import { Gate } from "./login/gate";
import {AuthContext} from "./context/authContext";


function App() {
  const [value, setValue] = useState("hello from context")
  const provideValue = useMemo(() => ({value, setValue}),[value, setValue])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
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
      element: <Gate/>
    }
  ]);
  return (
    <div className="App">
      <AuthContext.Provider value={provideValue}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
