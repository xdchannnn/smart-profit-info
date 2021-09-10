import { createContext } from "react";
import useContract from "../hooks/web3/contract.hook";

const ContractContext = createContext({
  getPrice: async () => {},
  loading: false,
});

export const ContractContextProvider = ({ children }) => {
  const { getPrice, loading } = useContract();

  return (
    <ContractContext.Provider value={{ getPrice, loading }}>
      {children}
    </ContractContext.Provider>
  );
};

export default ContractContext;
