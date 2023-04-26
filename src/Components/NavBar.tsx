import { Container, Navbar, Nav, NavDropdown, Form, Row, Dropdown, Col } from "react-bootstrap"
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <Navbar bg="light" expand='lg'>
            <Container>
                <Row>
                    left
                </Row>
                <Row>
                    <Row>
                        <Nav.Link to={'/Home'} as={NavLink}>
                        <h1 className="Banner" 
                        style={{
                        textAlign: 'center',
                        fontSize: '4.5rem',
                        marginTop: '1rem'
                        }}>
                            DRAKEN JEWELRY
                        </h1>
                        </Nav.Link>
                    </Row>
                    <Row id='bannerLinks'>
                        <Col><Nav.Link to={'/Shop'} as={NavLink}>SHOP</Nav.Link></Col>
                        <>|</>
                        <Col><Nav.Link to={'/AboutUs'} as={NavLink}>ABOUT US</Nav.Link></Col>
                    </Row>
                </Row>
                <Row>
                    <Dropdown>
                        <Dropdown.Toggle id='dropdown'>
                            Account
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/Account">Account</Dropdown.Item>
                            <Dropdown.Item href="/SignOut">SignOut</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="/Settings">Settings</Dropdown.Item>
                        </Dropdown.Menu> 
                    </Dropdown>
                </Row>
            </Container>
        </Navbar>
      );
}