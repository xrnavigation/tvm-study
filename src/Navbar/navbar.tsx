import * as React from 'react';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const BRAND_STYLE: React.CSSProperties = {
  fontSize: '1.25rem',
  fontWeight: 500,
  lineHeight: 1.2,
};

const Navbarcustom = () => {
  return (
      <Navbar bg="light">
        <Container fluid>
          <LinkContainer to={"/"}>
            <Navbar.Brand>
              <span style={BRAND_STYLE} aria-label="Table vs. Map Study Condition Site">
                Table vs. Map Study Condition Site
              </span>
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="mr-auto">
              <NavDropdown title="Visual Maps" id="visual-maps-dropdown">
                    <LinkContainer to="/maps/map1">
                      <Nav.Link>Map - 1</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/maps/map2">
                      <Nav.Link>Map - 2</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/maps/map3">
                      <Nav.Link>Map - 3</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/maps/map4">
                      <Nav.Link>Map - 4</Nav.Link>
                    </LinkContainer>
              </NavDropdown>
              <NavDropdown title="Tables" id="tables-dropdown">
                    <LinkContainer to="/tables/table1">
                      <Nav.Link>Table 1</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/tables/table2">
                      <Nav.Link>Table 2</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/tables/table3">
                      <Nav.Link>Table 3</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/tables/table4">
                      <Nav.Link>Table 4</Nav.Link>
                    </LinkContainer>
              </NavDropdown>
              <NavDropdown title="Audiom Maps" id="audiom-maps-dropdown">
                    <LinkContainer to="/audiom/map1">
                      <Nav.Link>Audiom Map 1</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/audiom/map2">
                      <Nav.Link>Audiom Map 2</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/audiom/map3">
                      <Nav.Link>Audiom Map 3</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/audiom/map4">
                      <Nav.Link>Audiom Map 4</Nav.Link>
                    </LinkContainer>
              </NavDropdown>
          </Nav>
          </Container>
      </Navbar>
    )
}

export default Navbarcustom;
