import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Activation from "../pages/activation";

const Private = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route exact path="/activation">
        <Activation />
      </Route>
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Private;
