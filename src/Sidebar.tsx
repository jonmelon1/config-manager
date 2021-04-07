
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
        <MenuItem><NavLink to="/development">Development</NavLink></MenuItem>
        <MenuItem><NavLink to="/test">Test</NavLink></MenuItem>
        <MenuItem><NavLink to="/production">Production</NavLink></MenuItem>
        <MenuItem><NavLink to="/disasterRecovery">Disaster Recovery</NavLink></MenuItem>
      </SubMenu>

      <SubMenu title="Admin" icon={<IoDocumentLock />}>
        <MenuItem><NavLink to="/environments">Environments</NavLink></MenuItem>
        <MenuItem><NavLink to="/configurations">Configurations</NavLink></MenuItem>
      </SubMenu>

      </Menu>
      </ProSidebar>
    </div>
  );
}

export default Sidebar;