
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
                <label id='player1name'>
                    Name:
                    <input type="text" value={player1Name} onChange={handleFormChangePlayer1} />
                </label>
                <label id='player2name'>
                    Name:
                    <input type="text" value={player2Name} onChange={handleFormChangePlayer2} />
                </label>
            </form>
        </>
    )
}

export default Form
