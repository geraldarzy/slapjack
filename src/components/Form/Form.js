
const Form = ({setPlayer1Name, setPlayer2Name, player1Name, player2Name}) => {
    const handleFormChangePlayer1=(e)=>{
        setPlayer1Name(e.target.value)
    }

    const handleFormChangePlayer2=(e)=>{
        setPlayer2Name(e.target.value)
    }
    return (
        <>
            <form>
                <div>
                    <label for='player1nameInput' style={{marginRight:'.5rem', marginBottom:'1rem'}}>
                        Player 1 Name: 
                    </label>
                    <input id='player1nameInput' type="text" value={player1Name} onChange={handleFormChangePlayer1} />
                </div>
                <div>
                    <label for='player2nameInput' style={{marginRight:'.5rem'}}>
                        Player 2 Name: 
                    </label>
                    <input id='player2nameInput' type="text" value={player2Name} onChange={handleFormChangePlayer2} />
                </div>
            </form>
        </>
    )
}

export default Form
