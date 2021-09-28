import Web3 from "web3";
import contractAbi from "./contractAbi";
import WalletConnectProvider from "@walletconnect/web3-provider";

export const BINANCE_RPC = "https://data-seed-prebsc-1-s1.binance.org:8545/";
export const HASH_LINK = "https://testnet.bscscan.com/tx/";

const web3 = new Web3(new Web3.providers.HttpProvider(BINANCE_RPC));

const contract = new web3.eth.Contract(contractAbi.abi, contractAbi.address);

export const connectWallet = async (userAddress = null) =>
  await new Promise((resolve, reject) => {
    if (window.ethereum) {
      console.log(window.ethereum);
      const metamask = new Web3(window.ethereum);
      window.ethereum
        .enable()
        .then(() => {
          if (metamask) {
            if (window.ethereum.selectedAddress) {
              if (
                userAddress &&
                userAddress.toLowerCase() !==
                  window.ethereum.selectedAddress.toLowerCase()
              )
                throw new Error("Один кошелек на аккаунт!");
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
            window.BinanceChain.request({
              method: "eth_accounts",
            }).then((accounts) => {
              if (accounts.length) {
                if (
                  userAddress &&
                  userAddress.toLowerCase() !== accounts[0].toLowerCase()
                )
                  throw new Error("Один кошелек на аккаунт!");

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
            });
          }
        })
        .catch((e) => reject(e));
    } else {
      const walletConnectProvider = new WalletConnectProvider({
        rpc: { 1: BINANCE_RPC },
      });
      walletConnectProvider
        .enable()
        .then(() => {
          const walletConnect = new Web3(walletConnectProvider);
          if (walletConnectProvider.accounts.length) {
            console.log("connected");
            resolve({
              wallet: walletConnect,
              contract: new walletConnect.eth.Contract(
                contractAbi.abi,
                contractAbi.address,
                { from: walletConnectProvider.accounts[0] }
              ),
            });
          }
        })
        .catch((e) => reject(e));
    }
  });

export default contract;
