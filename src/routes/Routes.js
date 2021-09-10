import { BrowserRouter as Router } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/auth.context";
import Private from "./Private";
import Public from "./Public";

import { ContractContextProvider } from "../context/contract.context";

const Routes = () => {
  const { token } = useContext(AuthContext);
  return (
    <ContractContextProvider>
      <Router>{!!token ? <Private /> : <Public />}</Router>
    </ContractContextProvider>
  );
};

export default Routes;
