import React, { Component } from 'react'
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
    Badge, } from 'reactstrap'

export class TopNavbar extends Component {

    state = {
      isOpen: false
    };

    toggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><h1>Desktop <Badge color="dark">Ninja</Badge></h1></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Categories
                </DropdownToggle>
                <DropdownMenu right>

                  <DropdownItem href="/processors">
                    Processors
                  </DropdownItem>

                  <DropdownItem href="/graphicscard">
                    Graphics Card
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink href="/about">About Us</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>

              <NavItem color="dark" outline>
                <NavLink href="/cart">Cart <Badge color="danger">0</Badge></NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/profile">
                    Profile
                  </DropdownItem>
                  <DropdownItem href="/settings">
                    Settings
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopNavbar