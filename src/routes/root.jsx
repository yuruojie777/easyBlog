import {Select} from 'antd';
import { GithubOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import { Outlet, NavLink, useNavigate, Link} from "react-router-dom";
import './root.css';
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/authContext";
import {DropDownPanel} from "../component/dropDownPanel";



export default function Root() {

  const navigate = useNavigate();
  const {value, setValue} = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    function handleClickOutside(event) {
      if (visible) {
        setVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleClickOutside);
    };
  }, [visible]);
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
                <NavLink to="/new" id="new">New</NavLink>
              </li>
            </ul>
          </nav>
          <div className="fill-up"></div>

          <div className="button-box">
            <button className="login-btn" onClick={()=>navigate('/login')}>
              login
            </button>
            <div className="avatar-box" id="avatar-button" onClick={()=>{setVisible(!visible)}}>
              <Avatar  icon={<UserOutlined />} style={{backgroundColor: '#f56a00'}} src={value}/>
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
            <Link to="/new">NEW</Link>
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