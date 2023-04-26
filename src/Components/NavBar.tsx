import { Container, Navbar, Nav, NavDropdown, Form, Row, Dropdown } from "react-bootstrap"

export const NavBar = () => {
    return (
        <Navbar bg="light" expand='lg'>
            <Container>
                <Row>
                    left
                </Row>
                <Row>
                    <h1 className="Banner">DRAKEN JEWELRY</h1>
                </Row>
                <Row>
                    <Dropdown>
                        <Dropdown.Toggle id='dropdown'>
                            Account
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Account</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">SignOut</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
                        </Dropdown.Menu> 
                    </Dropdown>
                </Row>
            </Container>
        </Navbar>
      );
}