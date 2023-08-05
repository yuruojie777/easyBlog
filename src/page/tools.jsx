import '../css/tools.css';
import {NavLink, Outlet} from "react-router-dom";
export const Tools = () => {
    return (
        <div className="tools-container">
            <NavLink to="base64-decode" className="menu-link">Base64</NavLink>
            <NavLink to="json-prettify" className="menu-link">Json Prettify</NavLink>
            <NavLink to="random-generator" className="menu-link">Random Generator</NavLink>
            <NavLink to="bcrypt-password" className="menu-link">Bcrypt Password</NavLink>
            <NavLink to="my-camera" className="menu-link">Camera</NavLink>
            <Outlet />
        </div>
    )
}