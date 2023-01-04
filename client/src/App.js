import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import CreateActivity from './components/CreateActivity';
import SearchBar from './components/SearchBar';
import Detail from './components/Detail';

function App() {
  return (
   <BrowserRouter>
       <div className="App">
       <Switch>
         <Route exact path= '/' component= {LandingPage}>
         
         </Route>
         <Route exact path= '/home' component= {Home}>
         <Home/>
          </Route>
          <Route exact path= '/activity' component= {CreateActivity}> 
          <CreateActivity/>
          </Route>
          <Route path= '/:id' component= {Detail}> 
          <Detail/>
          </Route>
      </Switch>
    </div>
   </BrowserRouter>
    
  );
}

export default App;
