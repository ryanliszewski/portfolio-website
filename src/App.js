import React, { Component } from 'react';
import logo from './logo.svg';

import './styles/App.css';

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
  DropdownItem } from 'reactstrap';

export default class App extends Component {

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
    console.log("test");
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand className="brand-name" href="/"> Ryan Liszewski</NavbarBrand>
        


        </Navbar>
        <div className="container">
        
        </div> 

      </div>
    );
  }
}

