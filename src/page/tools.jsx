import '../css/tools.css';
import {NavLink, Outlet} from "react-router-dom";
export const Tools = () => {
    return (
        <div className="tools-container">
            {/*<h2>Tools</h2>*/}
            <NavLink to="base64-decode" className="menu-link">Go to base 64</NavLink>
            <Outlet />
        </div>
    )
}