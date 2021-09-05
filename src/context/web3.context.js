import Web3 from "web3";
import { createContext, useCallback, useState } from "react";
import { SmartProfit } from "../utils/contracts";
import { toast } from "react-toastify";

const TEST_BINANCE = "https://data-seed-prebsc-1-s1.binance.org:8545/";

let web3 = new Web3(
  Web3.givenProvider || new Web3.providers.HttpProvider(TEST_BINANCE)
);

const Web3Context = createContext({
  register: () => {},
  connectMetamask: () => {},
});

export const Web3ContextProvider = ({ children }) => {
  const [metamask, setMetamask] = useState(null);
  const [userAddress, setUserAddress] = useState(null);

  const register = useCallback(
    (value) => {
      if (metamask && userAddress) {
        const contract = new metamask.eth.Contract(
          SmartProfit.abi,
          SmartProfit.address
        );
        contract.methods._register(1).send(
          {
            from: userAddress,
            value: metamask.utils.toWei(String(value)),
          },
          (err, res) => {
            console.log(err, res);
          }
        );
      } else toast("Подключитесь к кошельку!", { type: "error" });
    },
    [metamask, userAddress]
  );

  const connectMetamask = () => {
    if (window.ethereum) {
      const metamask = new Web3(window.ethereum);

      setMetamask(metamask);
      try {
        window.ethereum.enable().then(async function() {
          console.log("step2");
          if (metamask) {
            if (window.ethereum.selectedAddress !== undefined) {
              setUserAddress(window.ethereum.selectedAddress);
            } else if (
              web3.givenProvider.MetamaskInpageProvider !== undefined
            ) {
              setUserAddress(web3.givenProvider.MetamaskInpageProvider);
            } else if (metamask.givenProvider.selectedAddress !== undefined) {
              setUserAddress(metamask.givenProvider.selectedAddress);
            }
          }
        });
      } catch (e) {
        console.log(e);
      }
    } // Legacy DApp Browsers
    else if (window.web3) {
      const metamask = new Web3(web3.currentProvider);
      setMetamask(metamask);
      console.log(metamask);
      console.log("connect MetaMask");
      if (metamask) {
        if (window.ethereum.selectedAddress !== undefined) {
          setUserAddress(window.ethereum.selectedAddress);
        } else if (web3.givenProvider.MetamaskInpageProvider !== undefined) {
          setUserAddress(web3.givenProvider.MetamaskInpageProvider);
        } else if (metamask.givenProvider.selectedAddress !== undefined) {
          setUserAddress(metamask.givenProvider.selectedAddress);
        }
        console.log("userAddress: ", userAddress);
      }
      window.ethereum.on("accountsChanged", function(accounts) {
        // Time to reload your interface with accounts[0]!
        setUserAddress(accounts[0]);
        console.log("change account: ", userAddress);
      });
    }
    // Non-DApp Browsers
    else {
      console.log("You have to install MetaMask !");
      web3 = new Web3(
        Web3.givenProvider ||
          new Web3.providers.HttpProvider(TEST_BINANCE, {
            // @ts-ignore
            clientConfig: {
              keepalive: true,
              keepaliveInterval: 60000, // milliseconds
            },
          })
      );
    }
  };

  return (
    <Web3Context.Provider value={{ register, connectMetamask }}>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Context;
