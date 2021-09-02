import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Activation from "../pages/activation";
import MyTeam from "../pages/myTeam";
import GeneralTeam from "../pages/generalTeam";

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
      <Route path="/activation">
        <Activation />
      </Route>
      <Route exact path="/my-team">
        <MyTeam />
      </Route>
      <Route exact path="/general-team">
        <GeneralTeam />
      </Route>
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Private;
