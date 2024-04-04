import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FiActivity } from 'react-icons/fi';

function SidebarItems() {

    return (
        <Nav className='accordion'>
            <div className='sidenav-menu-heading'>Menu</div>
            <NavLink to={'/administrator'} className='nav-link' end>
                <div className='nav-link-icon'>
                    <FiActivity />
                </div>
                Dashboard
            </NavLink>
        </Nav>
    );
}

export default SidebarItems;