import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './EndGameModal.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import spacekey from '../../pictures/space-key.png'
import enterkey from '../../pictures/enter-key.png'
import slappingHand from '../../pictures/slappingHand.png'
import { height } from 'dom-helpers';

const EndGameModal = ({ resetGame, showModal, handleCloseModal, player1Points, player2Points, player1Name, player2Name }) => {
    const history = useHistory();

    const determineWinner = () =>{
        if(player1Points === player2Points){
            return <div>
                Good close game! The points are tied at {player1Points}! Play again to determine the true winner!
                </div>
        } else if(player1Points > player2Points){
            return <div>Congrats to {player1Name} for winning the game with {player1Points}!</div>
        } else{
            return <div>Congrats to {player2Name} for winning the game with {player2Points}!</div>
        }
    }
    
    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Game Over!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <img src={slappingHand} style={{width:'5rem', height:'auto'}}/> */}
                {determineWinner()}               
            </Modal.Body>
            
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
                Close
            </Button>
            <Button variant="success" onClick={()=>{
                resetGame();
                handleCloseModal();
                }}>
                Play Again
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EndGameModal
