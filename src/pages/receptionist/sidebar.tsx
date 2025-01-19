import { FiActivity } from "react-icons/fi";
import { NavLink } from "react-router";

function Sidebar() {
    return (
        <div className="nav">
            <div className="sidenav-menu-heading">Menu</div>
            <NavLink to={"/receptionist"} className={"nav-link"} end>
                <div className="nav-link-icon"><FiActivity/></div>
                Dashboard
            </NavLink>
        </div>
    );
}

export default Sidebar;