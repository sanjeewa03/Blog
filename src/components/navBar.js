import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">AppEDit Mobile</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  style={{ color: "black", marginRight: "15px" }}
                  activeStyle={{ color: "grey" }}
                  to="/products"
                >
                  Products
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: "black", marginRight: "15px" }}
                  activeStyle={{ color: "grey" }}
                  to="/blog"
                >
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: "black", marginRight: "15px" }}
                  activeStyle={{ color: "grey" }}
                  to="/tutorials"
                >
                  Tutorials
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  nav
                  caret
                  style={{ color: "black", marginRight: "15px" }}
                >
                  Sing Up
                </DropdownToggle>
                <DropdownMenu right>
                  <NavLink
                    style={{ color: "black", marginRight: "15px" }}
                    activeStyle={{ color: "grey" }}
                    to="/tutorials"
                  >
                    <DropdownItem>Sign In</DropdownItem>
                  </NavLink>
                  <NavLink
                    style={{ color: "black", marginRight: "15px" }}
                    activeStyle={{ color: "grey" }}
                    to="/tutorials"
                  >
                  <DropdownItem>Register</DropdownItem>
                  </NavLink>
                  
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
