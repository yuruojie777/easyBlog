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
import { Article } from "./page/article";
import { Home } from "./page/home";
import { Gate } from "./page/gate";
import {AuthProvider} from "./context/authContext";
import {Tools} from "./page/tools";
import {MyEditor} from "./page/mdEditor";
import {Admin} from "./page/admin";
import "./css/backgroud.css";
import {GptChatroom} from "./page/gptChatroom";
import {Chatroom} from "./page/chatroom";

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
        },
        {
          path: "article/:blogId",
          element: <Article/>,
        },
        {
          path: "blog/new",
          element: <MyEditor/>,
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
          path: "chatroom",
          element: <Chatroom/>
        },
        {
          path: "tools",
          element: <Tools/>,
        },
        {
          path: "md",
          element: <MyEditor/>
        },
        {
          path: "admin",
          element: <Admin/>,
        },
      ],
    },
    {
      path: '/login',
      element: <Gate/>
    }
  ]);
  return (
    <div className="App">
      <AuthProvider value={provideValue}>
        <body>
        <div className="wrapper">
          <div><span className="dot"></span></div>
          <div><span className="dot"></span></div>
          <div><span className="dot"></span></div>
          <div><span className="dot"></span></div>
          <div><span className="dot"></span></div>
          <div><span className="dot"></span></div>
          <div><span className="dot"></span></div>
          <div><span className="dot"></span></div>
          <div><span className="dot"></span></div>
          <div><span className="dot"></span></div>
          <div><span className="dot"></span></div>
          <div><span className="dot"></span></div>
          <div><span className="dot"></span></div>
          <div><span className="dot"></span></div>
          <div><span className="dot"></span></div>
        </div>
        </body>

        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
