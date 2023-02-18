import React from "react";
import './dropDownPanel.css'
export const DropDownPanel = ()=> {
    return (
        <div className="panel-container" id="panel">
            <ul>
                <li>Profile</li>
                <li>SignIn</li>
                <li>Setting</li>
                <li>Write</li>
            </ul>
        </div>
    )
}