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
import { Routes, Route, Link } from "react-router-dom";

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
          <MenuItem><a href="/Annonce">Par Rapport Au Date</a></MenuItem>
          <MenuItem>Par Rapport au marque</MenuItem>
          <MenuItem>Par Rapport au prix</MenuItem>
        </SubMenu>
        <SubMenu title="Gestion Elements Necessaires" icon={<FaHeart />}>
          <a href="/Categorie"><MenuItem>Categorie</MenuItem></a>
          <a href="/Marque"><MenuItem>Marque</MenuItem></a>
          <a href="/Energie"><MenuItem>Energie</MenuItem></a>
          <a href="/BoiteVitesse"><MenuItem>Vitesse</MenuItem></a>
          <a href="/Moteur"><MenuItem >Moteur</MenuItem></a>

        </SubMenu>
        
      </Menu>
    </ProSidebar>
  );
};

export default SideNavigation;