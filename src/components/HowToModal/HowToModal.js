import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './HowToModal.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import spacekey from '../../pictures/space-key.png'
import enterkey from '../../pictures/enter-key.png'
import { height } from 'dom-helpers';

const HowToModal = ({ showModal, handleCloseModal }) => {
    const history = useHistory();
    
    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>SlapJack - How to Play</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                The goal of slapjack is to have the most cards at the end. To obtain cards, you must be the first one to 
                slap the Jack when it comes out.
                <br/><br/>
                1. The way the game starts is with a deck of cards faced down in the middle. <br/>
                2. Now each player takes turns flipping a card over and making a new deck with those 
                cards. <br/>
                3. When one out of the four Jack's pop up, the first player to slap the Jack, gets the whole pile of cards. <br/>
                4. When the last Jack is slapped, the player with the most cards wins the round.
                
            </Modal.Body>
            <Modal.Header>
                <Modal.Title>SlapJack - Controls</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                To slap the deck of cards, each player has their own keyboard binding.
                Whenever the player wants to slap the Jack, they must press their respective key. <br/>
                
                Player 1 Slap - Spacebar Key <img src={spacekey} style={{width:'5rem', height:'auto'}}/>
                <br/>
                Player 2 Slap - Enter Key <img src={enterkey} style={{width:'3rem', height:'auto'}}/>
                <br/><br/>
                If the card shown is not a Jack, to flip the next card over and add the current card to the 
                pile of seen cards, simply click the 'Next Card' button.
                <br/>
                The game ends when there is no more Jacks left in the deck.
                
            </Modal.Body><Modal.Header>
                <Modal.Title>SlapJack - Scoring</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                If a player slaps the deck when the card is not a Jack, the player loses 5 points.
                <br/>
                If a player slaps the deck and the card is a Jack, the whole deck of seen cards is added to the players points.
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
                Close
            </Button>
            <Button variant="success" onClick={()=>history.push('/play')}>
                Play
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default HowToModal
