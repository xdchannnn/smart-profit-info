const contractAbi = {
  address: "0x61b12b26925C2265CcE966B58262634e1d76D037",
  abi: [
    {
      inputs: [
        {
          internalType: "address payable",
          name: "first",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "_userId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "_expired",
          type: "bool",
        },
      ],
      name: "AccountExpired",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "_total",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_change",
          type: "uint256",
        },
      ],
      name: "Change",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "_row",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_col",
          type: "uint256",
        },
      ],
      name: "FreePlaceFound",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "_paymentId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_userId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_refId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint8",
          name: "_level",
          type: "uint8",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_date",
          type: "uint256",
        },
      ],
      name: "PaymentToUpline",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "_userId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint8",
          name: "_status",
          type: "uint8",
        },
        {
          indexed: false,
          internalType: "uint8",
          name: "_plan",
          type: "uint8",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_date",
          type: "uint256",
        },
      ],
      name: "PlaceSold",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "_paymentId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_userId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_refId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_date",
          type: "uint256",
        },
      ],
      name: "RefBonusSent",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "_wallet",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_userId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_row",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_col",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_refId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint8",
          name: "_status",
          type: "uint8",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_date",
          type: "uint256",
        },
      ],
      name: "Register",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "row",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "start",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "end",
          type: "uint256",
        },
      ],
      name: "StartEndRow",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "_userId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint8",
          name: "status",
          type: "uint8",
        },
      ],
      name: "StatusUPdate",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "_userId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "_userId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint8",
          name: "_status",
          type: "uint8",
        },
        {
          indexed: false,
          internalType: "uint8",
          name: "_plan",
          type: "uint8",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_date",
          type: "uint256",
        },
      ],
      name: "Upgrade",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "userId_",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "row_",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "col_",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint8",
          name: "status_",
          type: "uint8",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "isExpired_",
          type: "bool",
        },
      ],
      name: "UplineFound",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "v1",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "v2",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "v3",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "v4",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "v5",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "v6",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "v7",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "v8",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "v9",
          type: "uint256",
        },
      ],
      name: "Values",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "_row",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_col",
          type: "uint256",
        },
      ],
      name: "_NewRowLastPlace",
      type: "event",
    },
    {
      inputs: [],
      name: "MAX_ROW",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
      ],
      name: "_buyPlace",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_refId",
          type: "uint256",
        },
      ],
      name: "_register",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_refId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
      ],
      name: "_support",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_userId",
          type: "uint256",
        },
      ],
      name: "_update",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
      ],
      name: "approveSale",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint8",
          name: "counter_",
          type: "uint8",
        },
        {
          internalType: "uint8",
          name: "status_",
          type: "uint8",
        },
      ],
      name: "checkLevel",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "rate",
          type: "uint256",
        },
      ],
      name: "checkPayment",
      outputs: [
        {
          internalType: "uint8",
          name: "status",
          type: "uint8",
        },
        {
          internalType: "uint256",
          name: "change",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_refId",
          type: "uint256",
        },
      ],
      name: "findFreePlace",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "col",
          type: "uint256",
        },
      ],
      name: "findUpline",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [],
      name: "gasPrice",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getLatestPrice",
      outputs: [
        {
          internalType: "int256",
          name: "",
          type: "int256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getPrices",
      outputs: [
        {
          internalType: "uint256[3]",
          name: "",
          type: "uint256[3]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getTerms",
      outputs: [
        {
          internalType: "uint256[3]",
          name: "",
          type: "uint256[3]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
      ],
      name: "getValues",
      outputs: [
        {
          internalType: "uint256[9]",
          name: "",
          type: "uint256[9]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "inactivityPeriod",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "lastFreePlaceInRow",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "lastPaymentId",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "lastUserId",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "lotteryPool",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "maxLotteryAmount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address payable",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "retriveBNB",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256[]",
          name: "winners",
          type: "uint256[]",
        },
      ],
      name: "sendToWinners",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_gp",
          type: "uint256",
        },
      ],
      name: "setGasPrice",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_period",
          type: "uint256",
        },
      ],
      name: "setInactivityPeriod",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
      ],
      name: "setMaxLotteryAmount",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_feed",
          type: "address",
        },
      ],
      name: "setPriceFeed",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256[3]",
          name: "newPrices",
          type: "uint256[3]",
        },
      ],
      name: "setPrices",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256[3]",
          name: "newTerms",
          type: "uint256[3]",
        },
      ],
      name: "setTerms",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address payable",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "userId",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "users",
      outputs: [
        {
          internalType: "address payable",
          name: "wallet",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "row",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "col",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "refId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "refCount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "upgradedRefs",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "refBonus",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "earned",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "last_row",
          type: "uint256",
        },
        {
          internalType: "uint8",
          name: "status",
          type: "uint8",
        },
        {
          internalType: "bool",
          name: "isForSale",
          type: "bool",
        },
        {
          internalType: "uint256",
          name: "expire",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
};

export default contractAbi;
