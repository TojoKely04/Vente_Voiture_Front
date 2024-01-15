import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  return (
    <div>
      <Navbar style={{backgroundColor:'#1d1d1d'}} light expand="md">
        <NavbarBrand href="/">React Application</NavbarBrand>
       
        <NavbarText>
          <div>
          <NavLink style={{color:'white'}} href="https://github.com/reactstrap/reactstrap">
              Déconnexion
            </NavLink>
          </div>
        </NavbarText>
      </Navbar>
    </div>
    
  );
};

export default Header;