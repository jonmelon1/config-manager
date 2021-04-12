import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { IoHome, IoList, IoDocumentLock } from "react-icons/io5";

function Sidebar() {
  return (
    <div className="sidebar">
      <ProSidebar>
      <Menu iconShape="square">
      <MenuItem><div className="sidebarHeader">Configuration Manager</div></MenuItem>
      
      <SubMenu title="Home" icon={<IoHome />}>
        <MenuItem><NavLink to="/">Welcome</NavLink></MenuItem>
        <MenuItem><NavLink to="/about">About</NavLink></MenuItem>
      </SubMenu>
      
      <SubMenu title="Configuration Data" icon={<IoList />}>
        <MenuItem><NavLink to="/availableEnvironments">Available Environments</NavLink></MenuItem>
      </SubMenu>

      <SubMenu title="Admin" icon={<IoDocumentLock />}>
        <MenuItem><NavLink to="/configurations">Edit Properties</NavLink></MenuItem>
        <MenuItem><NavLink to="/logOut">Log out</NavLink></MenuItem>
        
      </SubMenu>
      </Menu>
      </ProSidebar>
    </div>
  );
}

export default Sidebar;