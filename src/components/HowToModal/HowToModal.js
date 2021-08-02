import React, {useState} from 'react'
import './HowToModal.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const HowToModal = ({ showModal, handleCloseModal }) => {
    
    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
                Close
            </Button>
            <Button variant="primary" onClick={handleCloseModal}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default HowToModal
