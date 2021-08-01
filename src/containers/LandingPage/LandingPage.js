import React from 'react'
import './LandingPage.css'
import { useHistory } from 'react-router-dom';
import  Form  from '../../components/Form/Form';
const LandingPage = () => {
    const history = useHistory();
    return (
        <div id='homePage'>
            <h1>Welcome to SlapJack</h1>
            <Form/>
            <button className='hello' onClick={()=>{
                console.log('User clicked Play from LandingPage');
                history.push('/play')
            }}>Play</button>
        </div>
    )
}

export default LandingPage
