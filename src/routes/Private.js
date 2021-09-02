import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Activation from "../pages/activation";
import { Fragment, useContext } from "react";
import AuthContext from "../context/auth.context";

const Private = () => {
  const { user } = useContext(AuthContext);

  //preloader required
  if (!user) return <Fragment />;

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
