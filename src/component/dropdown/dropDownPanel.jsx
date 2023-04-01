import React from "react";
import '../dropDownPanel.css'
import {Link} from "react-router-dom";
import {SettingOutlined, ProfileOutlined, HighlightOutlined, LogoutOutlined} from "@ant-design/icons";
export const DropDownPanel = ()=> {
    return (
        <div className="panel-container" id="panel">
            <ul>
                <li>
                    <Link to="/profile"><ProfileOutlined />Profile</Link>
                </li>
                <li>
                    <Link to="/profile"><HighlightOutlined />Writing</Link>
                </li>
                <li>
                    <Link to="/profile"><SettingOutlined size="small"/>Setting</Link>
                </li>
                <li>
                    <Link to="/profile"><LogoutOutlined />Sign out</Link>
                </li>
            </ul>
        </div>
    )
}