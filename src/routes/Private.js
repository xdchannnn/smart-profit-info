import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Activation from "../pages/activation";
import MyTeam from "../pages/myTeam";
import GeneralTeam from "../pages/generalTeam";
import Profile from "../pages/profile";
import Finance from "../pages/finance";
import FAQ from "../pages/faq";
import Sponsor from "../pages/sponsor";

import Modal from "../components/homeComponents/copyrightModal";
import Header from "../components/dashboardComponents/dashboardHeader";
import ErrorBoundary from "../components/loaders/ErrorBoundary";
import { Web3ContextProvider } from "../context/web3.context";

const Private = () => {
  return (
    <ErrorBoundary>
      <Web3ContextProvider>
        <Modal color="#3B5B91" />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/profile">
            <Profile />
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
          <Route exact path="/general-team/:id">
            <GeneralTeam />
          </Route>
          <Route exact path="/finance">
            <Finance />
          </Route>
          <Route exact path="/faq">
            <FAQ header={() => <Header />} />
          </Route>
          <Route exact path="/sponsor/:id">
            <Sponsor />
          </Route>
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Web3ContextProvider>
    </ErrorBoundary>
  );
};

export default Private;
