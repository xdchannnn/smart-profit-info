import { createContext } from "react";
import useContract from "../hooks/web3/contract.hook";
import useMetamask from "../hooks/web3/metamask.hook";
import useRegister from "../hooks/web3/userActions/register.hook";

const Web3Context = createContext({
  register: () => {},
  loading: false,
  connectMetamask: () => {},
});

export const Web3ContextProvider = ({ children }) => {
  const { metamask, userAddress, connectMetamask } = useMetamask();
  const { loading, register } = useRegister({ metamask, userAddress });

  return (
    <Web3Context.Provider
      value={{
        connectMetamask,
        register,
        loading,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Context;
