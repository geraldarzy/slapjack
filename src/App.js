import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './containers/LandingPage/LandingPage';
import {Switch, Route} from 'react-router-dom';
import PlayPage from './containers/PlayPage/PlayPage';
import { useState } from 'react'
import HowToModal from './components/HowToModal/HowToModal';

function App() {
  const [player1Name, setPlayer1Name] = useState('')
  const [player2Name, setPlayer2Name] = useState('')
  return (
    <>
    <Switch>

      <Route exact path='/'> 
          <LandingPage
            setPlayer1Name={setPlayer1Name}
            setPlayer2Name={setPlayer2Name}
            player1Name={player1Name}
            player2Name={player2Name}
          />
      </Route>
 
      <Route exact path='/play'> 
        <PlayPage player1Name={player1Name} player2Name={player2Name}/>
      </Route>
 
      <Route exact path='/modal'> 
        <HowToModal/>
      </Route>
 
    </Switch>
      
    </>
  );
}

export default App;
