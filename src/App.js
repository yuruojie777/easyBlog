import './css/App.css';
import React, {useMemo, useState} from "react";
import Root from "./layout/root";
import ErrorPage from "./page/error/error-page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./css/index.css";
import { Blog } from "./page/blog";
import { Profile } from "./page/profile";
import { New } from "./page/new";
import { BlogCreatorPage } from "./page/blogCreatorPage";
import { Article, loader as articleLoader } from "./page/article";
import { Home } from "./page/home";
import { Gate } from "./page/gate";
import {AuthContext} from "./context/authContext";


function App() {
  const [user, setUser] = useState({})
  const provideValue = useMemo(() => ({user, setUser}),[user, setUser])
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
