import MyApp from 'next'

import { Nav, Navbar, NavDropdown,Container, Brand } from 'react-bootstrap'

const Menu = () =>{
    return(


      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">

      <img
        src="logo-itriad.svg"
        width="250"
        height="auto"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
 /*
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><img
        src="logo-itriad.svg"
        width="250"
        height="auto"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
    
    <Nav className="me-auto">
      <Nav.Link href="#home">
      </Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
    </Nav>
    </Container>
  </Navbar>
*/
 
    )
}

export default Menu