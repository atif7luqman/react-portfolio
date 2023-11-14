import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Container, Row } from 'react-bootstrap';


export default function Header() {

  return (
    <Container fluid>
      <Row>
        <Navbar variant="dark" expand="lg" bg='primary' className="mb-3 mr-3 p-2 ">
          <Navbar.Brand className='col-sm-6 '>Atif, Junior Software Engineer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='col-sm-6 justify-content-end pr-3' />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mr-auto">
              <Nav.Link href="/home">
                Introduction
              </Nav.Link>
              <Nav.Link eventKey="link-1">
                Projects
              </Nav.Link>
              <Nav.Link eventKey="link-2">
                About Me
              </Nav.Link>
              <Nav.Link eventKey="link-3">
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </Container>
  );
}