import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import Profile from './../Profile/profile_section'
import './navbar.css'
class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      // <Router>
      <MDBNavbar color="default-color" dark expand="md" className="main_nav">
        <MDBNavbarBrand >
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar style={{ padding: "0px" }}>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            </MDBNavItem>

            <MDBNavItem>
            
                <Profile path={this.props.path} />
            </MDBNavItem>
          </MDBNavbarNav>
          {/* <MDBNavbarNav>
          </MDBNavbarNav> */}
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;