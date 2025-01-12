import { FaUserInjured } from "react-icons/fa6";
import { FiActivity, FiUsers } from "react-icons/fi";
import { NavLink } from "react-router";

function Sidebar() {
    return (
        <div className="nav">
            <div className="sidenav-menu-heading">Menu</div>
            <NavLink to={"/administrator"} className={"nav-link"} end>
                <div className="nav-link-icon"><FiActivity/></div>
                Dashboard
            </NavLink>
            <NavLink to={"/administrator/users"} className={"nav-link"} end>
                <div className="nav-link-icon"><FiUsers/></div>
                Users
            </NavLink>
            <NavLink to={"/administrator/patients"} className={"nav-link"} end>
                <div className="nav-link-icon"><FaUserInjured/></div>
                Patients
            </NavLink>
        </div>
    );
}

export default Sidebar;