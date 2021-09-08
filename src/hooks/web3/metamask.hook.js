import { useCallback, useState } from "react";
import Web3 from "web3";
import { TEST_BINANCE } from "../../utils/contracts";
import { toast } from "react-toastify";

const web3 = new Web3(
  Web3.givenProvider || new Web3.providers.HttpProvider(TEST_BINANCE)
);

const useMetamask = () => {
  const [metamask, setMetamask] = useState(null);
  const [userAddress, setUserAddress] = useState(null);

  const connectMetamask = useCallback(() => {
    if (window.ethereum) {
      const metamask = new Web3(window.ethereum);
      setMetamask(metamask);
      window.ethereum
        .enable()
        .then(() => {
          if (metamask) {
            if (window.ethereum.selectedAddress !== undefined)
              setUserAddress(window.ethereum.selectedAddress);
          }
        })
        .catch((e) => toast(e.message, { type: "error" }));

      window.ethereum.on("accountsChanged", (accounts) => {
        setUserAddress(accounts[0]);
        toast("Вы сменили аккаунт!", { type: "info" });
      });
    }
    // if (window.ethereum) {
    //   const metamask = new Web3(window.ethereum);

    //   setMetamask(metamask);
    //   try {
    //     window.ethereum.enable().then(async function() {
    //       console.log("step2");
    //       if (metamask) {
    //         if (window.ethereum.selectedAddress !== undefined) {
    //           setUserAddress(window.ethereum.selectedAddress);
    //         } else if (
    //           web3.givenProvider.MetamaskInpageProvider !== undefined
    //         ) {
    //           setUserAddress(web3.givenProvider.MetamaskInpageProvider);
    //         } else if (metamask.givenProvider.selectedAddress !== undefined) {
    //           setUserAddress(metamask.givenProvider.selectedAddress);
    //         }
    //       }
    //     });
    //   } catch (e) {
    //     console.log(e);
    //   }
    // } // Legacy DApp Browsers
    // else if (window.web3) {
    //   const metamask = new Web3(web3.currentProvider);
    //   setMetamask(metamask);
    //   console.log(metamask);
    //   console.log("connect MetaMask");
    //   if (metamask) {
    //     if (window.ethereum.selectedAddress !== undefined) {
    //       setUserAddress(window.ethereum.selectedAddress);
    //     } else if (web3.givenProvider.MetamaskInpageProvider !== undefined) {
    //       setUserAddress(web3.givenProvider.MetamaskInpageProvider);
    //     } else if (metamask.givenProvider.selectedAddress !== undefined) {
    //       setUserAddress(metamask.givenProvider.selectedAddress);
    //     }
    //   }
    //   window.ethereum.on("accountsChanged", function(accounts) {
    //     // Time to reload your interface with accounts[0]!
    //     setUserAddress(accounts[0]);
    //   });
    // }
    // // Non-DApp Browsers
    // else {
    //   console.log("You have to install MetaMask !");
    //   web3 = new Web3(
    //     Web3.givenProvider ||
    //       new Web3.providers.HttpProvider(TEST_BINANCE, {
    //         // @ts-ignore
    //         clientConfig: {
    //           keepalive: true,
    //           keepaliveInterval: 60000, // milliseconds
    //         },
    //       })
    //   );
    // }
  }, []);

  return { metamask, userAddress, connectMetamask };
};

export default useMetamask;
