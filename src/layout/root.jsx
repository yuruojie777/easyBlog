import {
  CommentOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  LoadingOutlined,
  SmileOutlined
} from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import {Avatar, Badge, Drawer, FloatButton, notification, Spin} from 'antd';
import { Outlet, NavLink, useNavigate, Link} from "react-router-dom";
import '../css/root.css';
import React, {useState} from "react";
import {DropDownPanel} from "../component/dropdown/dropDownPanel";
import {Chatroom} from "../page/chatroom";
import {useAuth} from "../context/authContext";
import {FriendList} from "../page/friendList";
export default function Root() {

  const navigate = useNavigate();
  const {user} = useAuth();
  const [visible, setVisible] = useState(false);
  const [numberOfUnreadMessages, setNumberOfUnreadMessages] = useState(0);
  const [connected, setConnected] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (message, username) => {
    api.open({
      message: username,
      description: message,
      icon: (
          <SmileOutlined
              style={{
                color: '#108ee9',
              }}
          />
      ),
    });
  };
  function handleOnClickHam (){
    const ham = document.getElementById("hamburger");
    const hidden_bars = document.getElementById("hidden-bars")
    if(ham.classList.contains('active')) {
      ham.classList.remove('active');
      hidden_bars.classList.remove("active");
    } else {
      ham.classList.add('active')
      hidden_bars.classList.add('active')
    }
  }
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
    setNumberOfUnreadMessages(0);
    console.log(open);
  };
  const onClose = () => {
    setOpen(false);
    console.log(open);
  };

  const addNumberOfUnreadMessage = (message, username) => {
    console.log("username is " + username);
    console.log("user email is " + user.email);
    if(open && username !== user.email) {
      setNumberOfUnreadMessages(prevState => prevState + 1);
      openNotification(message, username);
    }
  }
    return (
      <div className="container">
        {contextHolder}
        <FloatButton.Group shape="circle">
          <FloatButton
              icon={<CommentOutlined />}
              onClick={showDrawer}
              badge={{
                count: numberOfUnreadMessages,
              }}
          />
          <FloatButton onClick={()=>window.location="/blog/new"} tooltip={<div>Write blog</div>}/>
        </FloatButton.Group>
        <Drawer
            title={connected?
                <Badge status="success" text="Connected"/>:
                <Spin indicator={<LoadingOutlined style={{fontSize: 24}} spin/>}>Connecting</Spin>}
            placement="left"
            onClose={onClose}
            open={open}
            width={700}
            bodyStyle={{paddingTop: 0, paddingBottom: 0, paddingRight: 0}}
        >
          <div style={{display: "flex", flexDirection: "row", width: '100%', height: '100%', gap: '10px'}}>
            <FriendList />
            <Chatroom
                onReceiveNewMessage={(message, username) => addNumberOfUnreadMessage(message, username)}
                onSocketConnected={() => setConnected(true)}
                onSocketDisconnected={() => setConnected(false)}
            />
          </div>
        </Drawer>
        <div className="nav-bar">
          <nav>
            <ul>
              <li>
                <NavLink to="/" id="home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blog" id="blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/profile" id="profile">Profile</NavLink>
              </li>
              <li>
                <NavLink to="/new" id="new">Video</NavLink>
              </li>
              <li>
                <NavLink to="/tools" id="tools">Tools</NavLink>
              </li>
              <li>
                <NavLink to="/chatroom" id="chatroom">GPT</NavLink>
              </li>
              {/*<li>*/}
              {/*  <NavLink to="/admin" id="admin">Admin</NavLink>*/}
              {/*</li>*/}
            </ul>
          </nav>
          <div className="fill-up"></div>

          <div className="button-box" style={{color: "white"}}>
            {
              user===null?
                  <button className="login-btn" onClick={()=>navigate('/login')}>
                    login
                  </button>:
                  (
                      <div style={{display: 'flex', flexDirection: 'column', fontFamily: 'cursive'}}>
                        <span>{user.firstname + ' ' + user.lastname}</span>
                        <span style={{fontSize: 'small'}}>{user.email}</span>
                      </div>
                  )
            }
            <div className="avatar-box" id="avatar-button" onClick={()=>{setVisible(!visible)}}>
              <Avatar  icon={<UserOutlined />}
                       src={user===null?'':user.imgBase64}
                       style={{backgroundColor: 'black', backgroundSize: 'contain'}}/>
            </div>
          </div>
          <div className="ham-box">
            <button className="hamburger" id="hamburger" onClick={()=>handleOnClickHam()}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
          
        </div>
        <div className="hidden-bars-box">
          <div className="hidden-bars" id="hidden-bars">
            <Link to="/">HOME</Link>
            <Link to="/blog">BLOG</Link>
            <Link to="/profile">PROFILE</Link>
            <Link to="/chatroom">GPT</Link>
            <Link to="/tools">TOOLS</Link>
          </div>
        </div>
        <div id="detail">
          <Outlet />
        </div>
        {visible&& (<DropDownPanel/>)}
        <footer>
          <div>
            <GithubOutlined className="website-icon"/>
            <InstagramOutlined className="website-icon"/>
            <LinkedinOutlined className="website-icon"/>
          </div>
          <p>©2022-2023 yuruojie. All rights reserved.</p>
        </footer>
      </div>
    );
  }