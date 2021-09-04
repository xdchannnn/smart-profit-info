import Web3 from "web3";
import { createContext, useState } from "react";
import { SmartProfit } from "../utils/contracts";

const TEST_BINANCE =
  "wss://dex.binance.org/api/ws/0x294658373ADBDBe836e2E841BB1996ceA9e56Fe3";

const web3 = new Web3(
  Web3.givenProvider || new Web3.providers.WebsocketProvider(TEST_BINANCE)
);

const Web3Context = createContext({
  register: () => {},
  connectMetamask: () => {},
});

export const Web3ContextProvider = ({ children }) => {
  const web3 = useState(null);

  return <Web3Context.Provider>{children}</Web3Context.Provider>;
};

export default Web3Context;
