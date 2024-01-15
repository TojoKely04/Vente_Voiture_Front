import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar expand="md" color="dark" dark>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/Annonce/">Annonce</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Statistiques
              </DropdownToggle>
              <DropdownMenu right dark>
                <DropdownItem href='/Statistique/Date'>Par Rapport Au Date</DropdownItem>
                <DropdownItem href='/Statistique/Marque'>Par Rapport Au Marque</DropdownItem>
                <DropdownItem href='/Statistique/Prix'>Par Rapport Au Prix</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Elements Necessaire
              </DropdownToggle>
              <DropdownMenu right dark>
                <DropdownItem href='/Categorie'>Categorie</DropdownItem>
                <DropdownItem href='/Marque'>Marque</DropdownItem>
                <DropdownItem href='/Energie'>Energie</DropdownItem>
                <DropdownItem href='/Vitesse'>Vitesse</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        <Nav>
          <NavItem>
            <NavLink href='/Deconnexion'>Se Deconnecter</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
  );
}

export default Example;

