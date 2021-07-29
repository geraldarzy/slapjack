import React from 'react'
import './LandingPage.css'
const LandingPage = () => {
    return (
        <div id='homePage'>
            <h1>Welcome to SlapJack</h1>
            <button className='hello' onClick={()=>console.log('User clicked Play from LandingPage')}>Play</button>
        </div>
    )
}

export default LandingPage
