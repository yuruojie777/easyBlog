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
import { Article } from "./page/article";
import { Home } from "./page/home";
import { Gate } from "./page/gate";
import {AuthContext} from "./context/authContext";
import {Tools} from "./page/tools";
import {Base64Decode} from "./page/base64Decode";
import {JsonPrettify} from "./page/jsonPrettify";
import {RandomGenerator} from "./page/randomGenerator";


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
        },
        {
          path: "tools",
          element: <Tools/>,
          children: [
            {
              path: 'base64-decode',
              element: <Base64Decode/>,
            },
            {
              path: 'json-prettify',
              element: <JsonPrettify/>,
            },
            {
              path: 'random-generator',
              element: <RandomGenerator/>,
            }
          ]
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
