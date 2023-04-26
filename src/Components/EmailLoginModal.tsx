import { Button, Modal, Form } from "react-bootstrap"

export const EmailLoginModal = (Props) => {
    return (
    <Modal show={Props.hideOrShow} onHide={Props.handleHide}>
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='formEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId='formPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
            <Button>Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Header>
            <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group controlId='formNewName'>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group controlId='formNewEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId='formNewPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
            <Form.Group controlId='formNewPasswordReEnter'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Re-enter Password" />
            </Form.Group>
            <Button>Submit</Button>
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