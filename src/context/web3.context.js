import { createContext } from "react";
import useContract from "../hooks/web3/contract.hook";
import useRegister from "../hooks/web3/userActions/register.hook";

const Web3Context = createContext({
  register: () => {},
  loading: false,
  connectMetamask: () => {},
  priceLoading: false,
  getPrice: async () => {},
});

export const Web3ContextProvider = ({ children }) => {
  const { loading, register } = useRegister();
  const contract = useContract();

  return (
    <Web3Context.Provider
      value={{
        register,
        loading,
        getPrice: contract.getPrice,
        priceLoading: contract.loading,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Context;
