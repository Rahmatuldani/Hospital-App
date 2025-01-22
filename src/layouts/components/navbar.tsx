import { Button, Dropdown, Nav, Navbar } from "react-bootstrap";
import { FiActivity, FiBell, FiLogOut, FiMail, FiMenu, FiSettings } from "react-icons/fi";
import DefaultPicture from "@/assets/assets/img/illustrations/profiles/profile-1.png";
import Flag from "react-flagkit";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function NavbarLayout() {
    const { i18n } = useTranslation();
    const [flag, setFlag] = useState<string>(i18n.language)
    function toggleSidebar() {
        document.body.classList.toggle("sidenav-toggled")
    }

    function changeLang(lang: string) {
        setFlag(lang);
        i18n.changeLanguage(lang)
    }

    return (
        <Navbar className="topnav shadow justify-content-between justify-content-sm-start bg-white">
            <Navbar.Brand>Hospital App</Navbar.Brand>
            <Button className="btn-transparent-dark order-1 order-lg-0 mr-lg-2" variant="icon" onClick={toggleSidebar}>
                <FiMenu/>
            </Button>
            <Nav className="align-items-center ml-auto">
                <Dropdown className="nav-item no-caret mr-3 mr-lg-0 dropdown-user">
                    <Dropdown.Toggle variant="icon" className="btn-transparent-dark">
                        <Flag country={flag.toUpperCase()} size={16}/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-right border-0 shadow animated--fade-in-up" style={{ minWidth: "fit-content" }}>
                        <Dropdown.Item onClick={() => changeLang('id')}>
                            <div className="dropdown-item-icon"><Flag country="ID" size={16}/></div>
                            ID
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => changeLang('gb')}>
                            <div className="dropdown-item-icon"><Flag country="GB" size={16}/></div>
                            EN
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="nav-item no-caret d-none d-sm-block mr-3 dropdown-notifications">
                    <Dropdown.Toggle className="btn-transparent-dark" variant="icon"><FiBell/></Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-right border-0 shadow animated--fade-in-up">
                        <Dropdown.Header className="dropdown-notifications-header">
                            <FiBell className="mr-2"/>
                            Alerts Center
                        </Dropdown.Header>
                        <Dropdown.Item className="dropdown-notifications-item">
                            <div className="dropdown-notifications-item-icon bg-warning"><FiActivity/></div>
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-details">December 29, 2020</div>
                                <div className="dropdown-notifications-item-content-text">This is an alert message. It&apos;s nothing serious, but it requires your attention.</div>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-notifications-footer">View All Alerts</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="nav-item no-caret d-none d-sm-block mr-3 dropdown-notifications">
                    <Dropdown.Toggle className="btn-transparent-dark" variant="icon"><FiMail/></Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-right border-0 shadow animated--fade-in-up">
                        <Dropdown.Header className="dropdown-notifications-header">
                            <FiMail className="mr-2"/>
                            Message Center
                        </Dropdown.Header>
                        <Dropdown.Item className="dropdown-notifications-item">
                            <img className="dropdown-notifications-item-img" src={DefaultPicture} alt="profile-img" />
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                <div className="dropdown-notifications-item-content-details">Thomas Wilcox &#xB7; 58m</div>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-notifications-footer">Read All Messages</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="nav-item no-caret mr-3 mr-lg-0 dropdown-user">
                    <Dropdown.Toggle variant="icon" className="btn-transparent-dark">
                        <img src={DefaultPicture} alt="profile-img" className="img-fluid"/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-right border-0 shadow animated--fade-in-up">
                        <Dropdown.Header className="d-flex align-items-center">
                            <img className="dropdown-user-img" src={DefaultPicture} alt="profile-img" />
                            <div className="dropdown-user-details">
                                <div className="dropdown-user-details-name">Testing</div>
                                <div className="dropdown-user-details-email">123180000</div>
                            </div>
                        </Dropdown.Header>
                        <Dropdown.Divider/>
                        <Dropdown.Item>
                            <div className="dropdown-item-icon"><FiSettings/></div>
                            Account
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <div className="dropdown-item-icon"><FiLogOut/></div>
                            Logout
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Navbar>
    );
}

export default NavbarLayout;