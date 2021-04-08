import './App.css';

import Sidebar from './Sidebar';

import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import About from './MenuOptions/About';
import Welcome from './MenuOptions/Welcome';

import AvailableEnvironments from './MenuOptions/AvailableEnvironments';

import Configurations from './MenuOptions/Configurations';
import Environments from './MenuOptions/Environments';

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