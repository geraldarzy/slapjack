import React, { useState } from 'react';

const Form = () => {
    const [player1Name, setPlayer1Name] = useState('')
    const [player2Name, setPlayer2Name] = useState('')
    const handleFormChangePlayer1=(e)=>{
        setPlayer1Name(e.target.value)
    }

    const handleFormChangePlayer2=(e)=>{
        setPlayer2Name(e.target.value)
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        console.log(event.target.children[0].children[0].value,'player1')
        console.log(event.target.children[1].children[0].value,'player2')
    }
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <label id='player1name'>
                    Name:
                    <input type="text" value={player1Name} onChange={handleFormChangePlayer1} />
                </label>
                <label id='player2name'>
                    Name:
                    <input type="text" value={player2Name} onChange={handleFormChangePlayer2} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default Form
