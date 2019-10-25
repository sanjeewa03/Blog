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
      <div style={{overflow: "visible",position:"fixed",top:"0",width:"100%",zIndex: "4"}}>
        <Navbar color="light" light expand="md" >
          <NavbarBrand href="/">AppEDit Mobile</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar style={{marginRight:"5%"}}>
              <NavItem >
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
             
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
