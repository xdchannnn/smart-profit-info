import { Switch, Route } from "react-router-dom";
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
      <Route path="*">404 Not Found</Route>
    </Switch>
  );
};

export default Public;
