import React, {useState} from 'react'
import './LandingPage.css'
import { useHistory } from 'react-router-dom';
import  Form  from '../../components/Form/Form';
import Button from 'react-bootstrap/Button';
import HowToModal from '../../components/HowToModal/HowToModal';
import cardsShuffling from '../../sounds/cardsShuffling.mp3';
const LandingPage = ({setPlayer1Name, setPlayer2Name, player1Name, player2Name}) => {
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    
    const playAudio = (audio) => {
        new Audio(audio).play();
    }
    return (
        <>
        <div id='homePageBG'>
        </div>
        <div id='homePageContent'>
            <h1>Welcome to SlapJack</h1>
            <Form
                setPlayer1Name={setPlayer1Name}
                setPlayer2Name={setPlayer2Name}
                player1Name={player1Name}
                player2Name={player2Name}
            />
            <div className='homePageButtonsContainer'>
                <Button variant='warning' className='homePageButtons' onClick={handleShowModal}>
                    How To Play
                </Button>
                <HowToModal showModal={showModal} handleCloseModal={handleCloseModal}/>
                <Button variant='success' className='homePageButtons' onClick={()=>{
                    console.log('User clicked Play from LandingPage');
                    history.push('/play');
                    playAudio(cardsShuffling);
                }}>
                    Play
                </Button>
            </div>
        </div>
        </>
    )
}

export default LandingPage
