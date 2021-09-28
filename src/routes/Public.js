import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Forgot from "../pages/forgot";
import Join from "../pages/join";
import FAQ from "../pages/faq";
import Modal from "../components/homeComponents/copyrightModal";



import Admin from '../pages/admin'; //REMOVE AFTER DEVELOPMENT

const Public = () => {
  return (
    <>
      <Modal />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/forgot">
          <Forgot />
        </Route>
        <Route exact path="/join">
          <Join />
        </Route>
        <Route exact path="/faq">
          <FAQ />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route path="*">404 Not Found</Route>
      </Switch>
    </>
  );
};

export default Public;
