import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { String } from "react";

const navStyle = {
  backgroundColor: "limegreen",
};

interface HeaderProps {
  title: string;
  mode: "landing" | "main" | "empty";
}

const Header: React.FC<HeaderProps> = ({ title, mode }) => {
  const usr = sessionStorage.getItem("ActiveUsr");
  if (mode == "landing")
    return (
      <Navbar style={navStyle} variant="dark" fixed="top" expand="lg">
        <Container>
          <Navbar.Brand href="/">{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="justify-content-end">
              <Nav.Link href="#home">Sign In</Nav.Link>
              <Nav.Link href="#features">Sign Up</Nav.Link>
              {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  else if (mode == "main")
    return (
      <Navbar style={navStyle} variant="dark" fixed="top" expand="lg">
        <Container>
          <Navbar.Brand href="/">{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="justify-content-end">
              <Nav.Link href="/add">&nbsp;Add&nbsp;</Nav.Link>
              <Nav.Link href="/modify">&nbsp;Modify&nbsp;</Nav.Link>
              <Nav.Link href="/view">&nbsp;View&nbsp;</Nav.Link>
              <Nav.Link href={"/profile/" + usr}>&nbsp;{usr}&nbsp;</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  else
    return (
      <Navbar style={navStyle} variant="dark" fixed="top" expand="lg">
        <Container>
          <Navbar.Brand href="/">{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="justify-content-end">
              Know your costumers better !
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;
