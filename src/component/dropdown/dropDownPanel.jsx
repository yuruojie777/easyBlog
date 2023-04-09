import React, {useContext} from "react";
import '../dropDownPanel.css'
import {Link} from "react-router-dom";
import {SettingOutlined, ProfileOutlined, HighlightOutlined, LogoutOutlined} from "@ant-design/icons";
import Cookies from "universal-cookie/es6";
import {AuthContext} from "../../context/authContext";
export const DropDownPanel = ()=> {
    const {user, setUser} = useContext(AuthContext);
    return (
        <div className="panel-container" id="panel">
            <ul>
                <li>
                    <Link to="/profile"><ProfileOutlined />Profile</Link>
                </li>
                <li>
                    <Link to="/blog/new"><HighlightOutlined />Writing</Link>
                </li>
                <li>
                    <Link to="/profile"><SettingOutlined size="small"/>Setting</Link>
                </li>
                {user === undefined?
                    <li>
                    <Link to="/login" onClick={()=>{
                        setUser(undefined);
                        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
                    }}>
                        <LogoutOutlined />Sign out
                    </Link>
                </li>:''}
            </ul>
        </div>
    )
}