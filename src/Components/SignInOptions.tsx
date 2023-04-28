import {Modal, Button} from 'react-bootstrap';
import { auth, signInwithGoogle } from '../Config/Firebase'
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { EmailLoginModal } from './EmailLoginModal';

export const SignInOptions = (Props) => {

    const [showEmailLoginModal, setShowEmailLoginModal] = useState(false)

    const handleCloseEmailModal = () => setShowEmailLoginModal(false)
    const handleShowEmailModal = () => setShowEmailLoginModal(true)

    const emailOptionHandler = (hideInit) => {
      hideInit()
      handleShowEmailModal()
    }

    return (
      <>
        <Modal show={Props.hideOrShow} onHide={Props.handleHide}>
        <Modal.Header closeButton>
          <Modal.Title>Sign in with Google or Email?</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex justify-content-around' id='SIOptions'>
          <Button onClick={signInwithGoogle} href='/'>Google</Button>
          <Button onClick={() => emailOptionHandler(Props.handleHide)}>Email</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={Props.handleHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <EmailLoginModal
        handleHide = {handleCloseEmailModal}
        hideOrShow = {showEmailLoginModal}
        setHideOrShow = {handleShowEmailModal}
      />
    </>
    )
}