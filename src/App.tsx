import './App.css';
import About from './MenuOptions/Menu/About';
import Welcome from './MenuOptions/Menu/Welcome';
import Sidebar from './Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>

    
    
      <div className="row">
      <Router>
      <div>
        <Sidebar/>
        
        <Route path="/about">
          <About />
        </Route>
      </div>

      <div className="homepage">
        <Welcome/>
      </div>

      
    </Router>
    </div>
    </div>
  );
}

export default App;