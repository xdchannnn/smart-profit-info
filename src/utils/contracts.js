import Web3 from "web3";
import contractAbi from "./contractAbi";

export const TEST_BINANCE = "https://data-seed-prebsc-1-s1.binance.org:8545/";

const web3 = new Web3(
  Web3.givenProvider || new Web3.providers.HttpProvider(TEST_BINANCE)
);

export const contract = new web3.eth.Contract(
  contractAbi.abi,
  contractAbi.address
);

export const connectWallet = async () =>
  await new Promise((resolve, reject) => {
    if (window.ethereum) {
      const metamask = new Web3(window.ethereum);
      window.ethereum
        .enable()
        .then(() => {
          if (metamask) {
            if (window.ethereum.selectedAddress !== undefined) {
              resolve({
                wallet: metamask,
                contract: new metamask.eth.Contract(
                  contractAbi.abi,
                  contractAbi.address,
                  { from: window.ethereum.selectedAddress }
                ),
              });
            }
          }
        })
        .catch((e) => reject(e));
    } else if (window.BinanceChain) {
      const binanceChain = new Web3(window.BinanceChain);
      window.BinanceChain.enable()
        .then(() => {
          if (binanceChain) {
            window.BinanceChain.request({ method: "eth_accounts" }).then(
              (accounts) => {
                if (accounts.length)
                  resolve({
                    wallet: binanceChain,
                    contract: new binanceChain.eth.Contract(
                      contractAbi.abi,
                      contractAbi.address,
                      {
                        from: accounts[0],
                      }
                    ),
                  });
              }
            );
          }
        })
        .catch((e) => reject(e));
    } else throw new Error("Нет кошелька!");
  });

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
