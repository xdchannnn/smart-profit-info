import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Join from "../pages/join";

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
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Public;
