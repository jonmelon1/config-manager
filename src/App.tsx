import './App.css';

import Sidebar from './Sidebar';

import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import About from './MenuOptions/About';
import Welcome from './MenuOptions/Welcome';

import AvailableEnvironments from './MenuOptions/AvailableEnvironments';

import Configurations from './MenuOptions/Configurations';
import { LogInManager } from './MenuOptions/LogIn'
import LogOut from './MenuOptions/LogOut';
import BackDoor from './MenuOptions/BackDoor'

function App() {
  return (
    <div>
      <div className="row">
        <Router>
        <div>
          <Sidebar/>

          <Switch>
            <div className="pageView">           

          <Route exact path="/" >
            <Welcome/>
          </Route>

          <Route exact path="/about">
            <About/>
          </Route>


          <Route path="/availableEnvironments">
            <AvailableEnvironments/>
          </Route>


          <Route path="/configurations">
            <LogInManager/>
          </Route>

          <Route path="/logOut">
            <LogOut/>
          </Route>

          <Route path="/secretbackdoor">
            <BackDoor/>
          </Route>

          </div>
          </Switch>
        </div>
        </Router>
      </div>
    </div>
  );
}

export default App;