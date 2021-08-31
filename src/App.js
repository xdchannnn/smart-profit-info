import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Activation from './pages/activation'

function App() {
  return (
    <Router>
      <Switch >
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/activation">
          <Activation />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
