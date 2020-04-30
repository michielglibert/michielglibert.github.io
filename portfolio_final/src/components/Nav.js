import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  padding: 48px;

  @media screen and (max-width: 992px) {
    display: none;
  }
`

const NavItem = styled(Link)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "CircularStd", sans-serif;
  margin: 0 64px;
  font-size: 12pt;
  cursor: pointer;
`

export class Nav extends Component {
  render() {
    return (
      <Wrapper>
        <NavItem
          to="about"
          spy={true}
          smooth={true}
          duration={1200}
          ignoreCancelEvents={true}
        >
          Over mijzelf
        </NavItem>
        <NavItem
          to="career"
          spy={true}
          smooth={true}
          duration={1200}
          ignoreCancelEvents={true}
        >
          Carriere
        </NavItem>
        <NavItem
          to="projects"
          spy={true}
          smooth={true}
          duration={1200}
          ignoreCancelEvents={true}
        >
          Projecten
        </NavItem>
        <NavItem
          to="contact"
          spy={true}
          smooth={true}
          duration={1200}
          ignoreCancelEvents={true}
        >
          Contact
        </NavItem>
      </Wrapper>
    )
  }
}

export default Nav
