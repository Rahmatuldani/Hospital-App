import { FaUserInjured } from "react-icons/fa6";
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
            <NavLink to={"/receptionist/patients"} className={"nav-link"} end>
                <div className="nav-link-icon"><FaUserInjured/></div>
                Pasien
            </NavLink>
        </div>
    );
}

export default Sidebar;