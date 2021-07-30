import './App.css';
import LandingPage from './containers/LandingPage/LandingPage';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Switch>

      <Route exact path='/'> 
          <LandingPage />
      </Route>
 
      <Route exact path='/play'> 
        
      </Route>
 
    </Switch>
      
    </>
  );
}

export default App;
