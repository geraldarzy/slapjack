import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './containers/LandingPage/LandingPage';
import {Switch, Route} from 'react-router-dom';
import PlayPage from './containers/PlayPage/PlayPage';

function App() {
  return (
    <>
    <Switch>

      <Route exact path='/'> 
          <LandingPage />
      </Route>
 
      <Route exact path='/play'> 
        <PlayPage/>
      </Route>
 
    </Switch>
      
    </>
  );
}

export default App;
