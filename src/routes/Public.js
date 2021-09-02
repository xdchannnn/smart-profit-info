import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Join from "../pages/join";
import GeneralTeam from '../pages/generalTeam';

const Public = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/join">
        <Join />
      </Route>
      <Route exact path="/generalteam">
        <GeneralTeam />
      </Route>
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Public;
