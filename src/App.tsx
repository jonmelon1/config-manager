import './App.css';

import Sidebar from './Sidebar';

import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import About from './MenuOptions/Menu/About';
import Welcome from './MenuOptions/Menu/Welcome';

import Development from './MenuOptions/ConfigurationData/Development';
import Production from './MenuOptions/ConfigurationData/Production';
import Test from './MenuOptions/ConfigurationData/Test';
import DisasterRecovery from './MenuOptions/ConfigurationData/DisasterRecovery';

import Configurations from './MenuOptions/Admin/Configurations';
import Environments from './MenuOptions/Admin/Environments';

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


          <Route path="/development">
            <Development/>
          </Route>

          <Route path="/test">
            <Test/>
          </Route>

          <Route path="/production">
            <Production/>
          </Route>
          
          <Route path="/disasterRecovery">
            <DisasterRecovery/>
          </Route>


          <Route path="/environments">
            <Environments/>
          </Route>

          <Route path="/configurations">
            <Configurations/>
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