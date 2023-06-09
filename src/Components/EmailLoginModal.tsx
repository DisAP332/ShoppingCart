import { useState } from "react"
import { Button, Modal, Form } from "react-bootstrap"

import { createUser, signInWithEmailandPass, addUserInfo, auth } from "../Config/Firebase"

export const EmailLoginModal = (Props) => {

    const [newUsersname, setNewUsername] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newPasswordVerify, setNewPasswordVerify] = useState('')

    const [signInEmail, setSignInEmail] = useState('')
    const [signInPassword, setSignInPassword] = useState('')

    const verifyData = (Hide) => {
        if (newPassword === newPasswordVerify && newPassword.length >= 6){
            createUser(newEmail, newPassword)
            addUserInfo(newUsersname, newEmail, Number(newPhone))
            Hide()
        } else {
            window.alert('Looks like you made a error signing up!')
        }
    }

    const loginHandler = (Hide) => {
        signInWithEmailandPass(signInEmail, signInPassword)
        if(auth.currentUser){
            console.log('Congrats on your successful login!')
            Hide()
        } else {
            window.alert('Login Unsuccessful')
        }
    }
    
    return (
    <Modal show={Props.hideOrShow} onHide={Props.handleHide}>
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='formEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                onChange={(e) => setSignInEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId='formPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" 
                onChange={(e) => setSignInPassword(e.target.value)}
                />
            </Form.Group>
            <Button 
            style={{float: 'right', marginTop: '1rem'}}
            onClick={() => loginHandler(Props.handleHide)}
            >
            Log In
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Header>
            <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group controlId='formNewName'>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" 
                onChange={(e) => setNewUsername(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId='formNewEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                onChange={(e) => setNewEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId='formNewPhone'>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Enter phone number"
                onChange={(e) => setNewPhone(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId='formNewPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" 
                onChange={(e) => setNewPassword(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId='formNewPasswordReEnter'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Re-enter Password" 
                onChange={(e) => setNewPasswordVerify(e.target.value)}
                />
            </Form.Group>
            <Button 
            style={{float: 'right', marginTop: '1rem'}}
            onClick={() => verifyData(Props.handleHide)}
            >
            Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={Props.handleHide}>
            Close
          </Button>
        </Modal.Footer>
    </Modal>
    )
}