import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Details from './details/Details';

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard}></Route>
      <Route path="/details" component={Details}></Route>
    </Switch>
  </Router>
  );
}

export default App;
