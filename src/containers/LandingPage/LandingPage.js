import React from 'react'
import './LandingPage.css'
import { useHistory } from 'react-router-dom';
import  Form  from '../../components/Form/Form';
const LandingPage = ({setPlayer1Name, setPlayer2Name, player1Name, player2Name}) => {
    const history = useHistory();
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
            <button className='hello' onClick={()=>{
                console.log('User clicked Play from LandingPage');
                history.push('/play')
            }}>Play</button>
        </div>
        </>
    )
}

export default LandingPage
