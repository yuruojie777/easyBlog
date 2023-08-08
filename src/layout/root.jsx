import { GithubOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { Outlet, NavLink, useNavigate, Link} from "react-router-dom";
import '../css/root.css';
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/authContext";
import {DropDownPanel} from "../component/dropdown/dropDownPanel";
import {get} from "../service/ApiService";
import Cookies from "universal-cookie/es6";


export default function Root() {

  const navigate = useNavigate();
  const {user, setUser} = useContext(AuthContext);
  const [visible, setVisible] = useState(false);

  // Fetch user info
  useEffect(()=>{
    // if(user.name !== undefined) {
      get("/customer/users?uid=" + new Cookies().get("uid")).then(
          (res) => {
            console.log(res.data)
            setUser(res.data);
          }
      ).catch()
    // }
  }, [])

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

    return (
      <div className="container">
        <div className="nav-bar">
          <nav>
            <ul>
              <li>
                <NavLink to="/" id="home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blog/1" id="blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/profile" id="profile">Profile</NavLink>
              </li>
              <li>
                <NavLink to="/new" id="new">Video</NavLink>
              </li>
              <li>
                <NavLink to="/tools/base64-decode" id="tools">Tools</NavLink>
              </li>
            </ul>
          </nav>
          <div className="fill-up"></div>

          <div className="button-box">
            {
              user.name===undefined?
                  <button className="login-btn" onClick={()=>navigate('/login')}>
                    login
                  </button>:
                  <p>{user.name}</p>
            }
            <div className="avatar-box" id="avatar-button" onClick={()=>{setVisible(!visible)}}>
              <Avatar  icon={<UserOutlined />}
                       src="/resource/me.jpg"
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
            <Link to="/blog/1">BLOG</Link>
            <Link to="/profile">PROFILE</Link>
            <Link to="/new">VIDEO</Link>
            <Link to="/tools/base64-decode">TOOLS</Link>
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