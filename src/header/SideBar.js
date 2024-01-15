import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaGem, FaHeart } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";

const SideNavigation = () => {
  const [collapsed, setCollapsed] = useState(false);

  // added styles 
  const styles = {
    sideBarHeight: {
      height: "100vh",
    },
    menuIcon: {
      float: "right",
      margin: "10px",
    },
  };
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };
  return (
    <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
      <SidebarHeader>
        <div style={styles.menuIcon} onClick={onClickMenuIcon}>
          <AiOutlineMenu />
        </div>
      </SidebarHeader>
      
      <Menu iconShape="square">
        <MenuItem  icon={<FaGem />} href="/"> Annonces</MenuItem>
        <SubMenu title="Tableau Statistique" icon={<FaHeart />}>
          <MenuItem>Par Rapport Au Date</MenuItem>
          <MenuItem>Par Rapport au marque</MenuItem>
          <MenuItem>Par Rapport au prix</MenuItem>
        </SubMenu>
        <SubMenu title="Gestion Elements Necessaires" icon={<FaHeart />}>
          <MenuItem>Categorie</MenuItem>
          <MenuItem>Marque</MenuItem>
          <MenuItem>Energie</MenuItem>
          <MenuItem>Vitesse</MenuItem>
        </SubMenu>
        
      </Menu>
    </ProSidebar>
  );
};

export default SideNavigation;