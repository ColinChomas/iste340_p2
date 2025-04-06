import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './NavBar.css'; // Import the CSS file for styling

function NavBar() {
  return (
    <div className ="navBar">
        <Navbar expand="lg" >
            <Container>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="#home"><span className="navItem">Home</span></Nav.Link>
                    <Nav.Link href="#degrees"><span className="navItem">Our Degrees</span></Nav.Link>
                    <Nav.Link href="#minors"><span className="navItem">Minors</span></Nav.Link>
                    <Nav.Link href="#employment"><span className="navItem">Employment Statistics</span></Nav.Link>
                    <Nav.Link href="#people"><span className="navItem">Our People</span></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>

  );
}

export default NavBar;