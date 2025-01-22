import { useTranslation } from "react-i18next";
import { FaUserInjured } from "react-icons/fa6";
import { FiActivity } from "react-icons/fi";
import { NavLink } from "react-router";

function Sidebar() {
    const {t} = useTranslation();

    return (
        <div className="nav">
            <div className="sidenav-menu-heading">Menu</div>
            <NavLink to={"/receptionist"} className={"nav-link"} end>
                <div className="nav-link-icon"><FiActivity/></div>
                {t('dashboard')}
            </NavLink>
            <NavLink to={"/receptionist/patients"} className={"nav-link"} end>
                <div className="nav-link-icon"><FaUserInjured/></div>
                {t('patient')}
            </NavLink>
        </div>
    );
}

export default Sidebar;