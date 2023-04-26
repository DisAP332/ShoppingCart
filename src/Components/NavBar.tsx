import { useState } from "react";
import { Container, Navbar, Nav, NavDropdown, Form, Row, Dropdown, Col, Modal, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom";
import { SignInOptions } from './SignInOptions'

export const NavBar = () => {
    const [showSignInOptions, setShowSignInOptions] = useState(false)

    const handleClose = () => setShowSignInOptions(false)
    const handleShow = () => setShowSignInOptions(true)

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
                            <Dropdown.Item onClick={handleShow}>
                                Account
                            </Dropdown.Item>
                            <Dropdown.Item href="/SignOut">SignOut</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="/Settings">Settings</Dropdown.Item>
                        </Dropdown.Menu> 
                    </Dropdown>
                </Row>
            </Container>
            <SignInOptions 
                handleHide = {handleClose}
                hideOrShow = {showSignInOptions}
                setHideOrShow = {setShowSignInOptions}
            />
        </Navbar>
      );
}