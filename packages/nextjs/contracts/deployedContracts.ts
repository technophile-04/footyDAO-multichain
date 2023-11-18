const contracts = {
  420: {
    FootyDAO: {
      address: "0x6ed3783fda9ab2ca991ab6a99e574784874a7678",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "router",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "ERC721IncorrectOwner",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "ERC721InsufficientApproval",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "approver",
              type: "address",
            },
          ],
          name: "ERC721InvalidApprover",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
          ],
          name: "ERC721InvalidOperator",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "ERC721InvalidOwner",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "receiver",
              type: "address",
            },
          ],
          name: "ERC721InvalidReceiver",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "ERC721InvalidSender",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "ERC721NonexistentToken",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "router",
              type: "address",
            },
          ],
          name: "InvalidRouter",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "OwnableInvalidOwner",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "OwnableUnauthorizedAccount",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "approved",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "messageId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "uint64",
              name: "sourceChainSelector",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "MessageReceived",
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
              name: "action",
              type: "uint256",
            },
          ],
          name: "SimpleCheckPoint",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "balanceOf",
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
              components: [
                {
                  internalType: "bytes32",
                  name: "messageId",
                  type: "bytes32",
                },
                {
                  internalType: "uint64",
                  name: "sourceChainSelector",
                  type: "uint64",
                },
                {
                  internalType: "bytes",
                  name: "sender",
                  type: "bytes",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "token",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Client.EVMTokenAmount[]",
                  name: "destTokenAmounts",
                  type: "tuple[]",
                },
              ],
              internalType: "struct Client.Any2EVMMessage",
              name: "message",
              type: "tuple",
            },
          ],
          name: "ccipReceive",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "claimMemory",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_sportEventId",
              type: "uint256",
            },
            {
              internalType: "address[]",
              name: "notJoinedList",
              type: "address[]",
            },
          ],
          name: "closeSportEvent",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_startTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_endTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_registrationWindow",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_stake",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_cost",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_maxAttendance",
              type: "uint256",
            },
          ],
          name: "createSportEvent",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_sportEventId",
              type: "uint256",
            },
          ],
          name: "exitSportEvent",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getAllSportEventsData",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "creator",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "startTime",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "endTime",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "registrationWindow",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "stake",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "cost",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "maxAttendance",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "participants",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "waitingList",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "takenWaitingList",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "tokenIds",
                  type: "uint256[]",
                },
              ],
              internalType: "struct IFootyDAO.SportEvent[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "getApproved",
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
          inputs: [],
          name: "getLastReceivedMessageDetails",
          outputs: [
            {
              internalType: "bytes32",
              name: "messageId",
              type: "bytes32",
            },
            {
              internalType: "string",
              name: "text",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_sportEventId",
              type: "uint256",
            },
          ],
          name: "getListOfParticipants",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getRouter",
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
              internalType: "uint256",
              name: "_sportEventId",
              type: "uint256",
            },
          ],
          name: "getSportEventData",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "creator",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "startTime",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "endTime",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "registrationWindow",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "stake",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "cost",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "maxAttendance",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "participants",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "waitingList",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "takenWaitingList",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "tokenIds",
                  type: "uint256[]",
                },
              ],
              internalType: "struct IFootyDAO.SportEvent",
              name: "",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "price",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sportEventId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "tokenURI",
                  type: "string",
                },
              ],
              internalType: "struct IFootyDAO.Memory[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_sportEventId",
              type: "uint256",
            },
          ],
          name: "getWaitingList",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
          ],
          name: "isApprovedForAll",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_sportEventId",
              type: "uint256",
            },
          ],
          name: "isGameSaleTime",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_sportEventId",
              type: "uint256",
            },
            {
              internalType: "address[]",
              name: "_users",
              type: "address[]",
            },
          ],
          name: "joinSportEventMany",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_sportEventId",
              type: "uint256",
            },
          ],
          name: "joinSportEventSingle",
          outputs: [],
          stateMutability: "payable",
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
          name: "memoryByTokenId",
          outputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "price",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "sportEventId",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "tokenURI",
              type: "string",
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
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "memoryTokenIdsOfSportEvent",
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
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
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
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "ownerOf",
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
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "purchaseMemory",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_cid",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "_sportEventId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_price",
              type: "uint256",
            },
          ],
          name: "putMemoryOnSale",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "sportEventCount",
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
          name: "sportEvents",
          outputs: [
            {
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "startTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "endTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "registrationWindow",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "stake",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "cost",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxAttendance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "takenWaitingList",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
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
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "tokenURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
  },
  80001: {
    YourContract: {
      address: "0x64968Ef4e9773a4f01bbE24AF96f9fEc633fED39",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_owner",
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
              indexed: true,
              internalType: "address",
              name: "greetingSetter",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "newGreeting",
              type: "string",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "premium",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "GreetingChange",
          type: "event",
        },
        {
          inputs: [],
          name: "greeting",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
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
          inputs: [],
          name: "premium",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_newGreeting",
              type: "string",
            },
          ],
          name: "setGreeting",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "totalCounter",
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
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "userGreetingCounter",
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
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
    },
    FootyDAOAdapter: {
      address: "0xc150cbd1a99036989debcfbfe820829197ba04aa",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "currentBalance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "calculatedFees",
              type: "uint256",
            },
          ],
          name: "NotEnoughBalance",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "messageId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "uint64",
              name: "destinationChainSelector",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "address",
              name: "receiver",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "feeToken",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "fees",
              type: "uint256",
            },
          ],
          name: "MessageSent",
          type: "event",
        },
        {
          inputs: [],
          name: "baseChainContractAddr",
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
          inputs: [],
          name: "baseChainSelector",
          outputs: [
            {
              internalType: "uint64",
              name: "",
              type: "uint64",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_sportEventId",
              type: "uint256",
            },
            {
              internalType: "address[]",
              name: "_notJoinedList",
              type: "address[]",
            },
          ],
          name: "closeSportEvent",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_startTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_endTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_registrationWindow",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_stake",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_cost",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_maxAttendance",
              type: "uint256",
            },
          ],
          name: "createSportEvent",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint64",
              name: "_baseChainSelector",
              type: "uint64",
            },
            {
              internalType: "address",
              name: "_baseChainContractAddr",
              type: "address",
            },
            {
              internalType: "address",
              name: "_router",
              type: "address",
            },
            {
              internalType: "address",
              name: "_link",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_sportEventId",
              type: "uint256",
            },
          ],
          name: "joinSportEventSingle",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "recoverChainlinkTokens",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "s_linkToken",
          outputs: [
            {
              internalType: "contract LinkTokenInterface",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "s_router",
          outputs: [
            {
              internalType: "contract IRouterClient",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
  },
  88882: {
    YourContract: {
      address: "0x836eb45ba61b368F1088115c89DECEF7d274481c",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_owner",
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
              indexed: true,
              internalType: "address",
              name: "greetingSetter",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "newGreeting",
              type: "string",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "premium",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "GreetingChange",
          type: "event",
        },
        {
          inputs: [],
          name: "greeting",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
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
          inputs: [],
          name: "premium",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_newGreeting",
              type: "string",
            },
          ],
          name: "setGreeting",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "totalCounter",
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
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "userGreetingCounter",
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
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
    },
    MockToken: {
      address: "0x60efB6c5Ce6134EBa43AC86400409F59F8398C31",
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "symbol",
              type: "string",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "allowance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "needed",
              type: "uint256",
            },
          ],
          name: "ERC20InsufficientAllowance",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "balance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "needed",
              type: "uint256",
            },
          ],
          name: "ERC20InsufficientBalance",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "approver",
              type: "address",
            },
          ],
          name: "ERC20InvalidApprover",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "receiver",
              type: "address",
            },
          ],
          name: "ERC20InvalidReceiver",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "ERC20InvalidSender",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          name: "ERC20InvalidSpender",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          name: "allowance",
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
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "balanceOf",
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
          name: "decimals",
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
              internalType: "address",
              name: "_to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256",
            },
          ],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
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
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    WeekRewards: {
      address: "0x8eB6bfc0A4e65A974DE60E50AEA61e6F5F913FAa",
      abi: [
        {
          inputs: [
            {
              internalType: "address[]",
              name: "_fanTokens",
              type: "address[]",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "OwnableInvalidOwner",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "OwnableUnauthorizedAccount",
          type: "error",
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
              internalType: "address[]",
              name: "users",
              type: "address[]",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "totalAmount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "fanTokenId",
              type: "uint256",
            },
          ],
          name: "RewardsDistributed",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_fanToken",
              type: "address",
            },
          ],
          name: "addFanToken",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address[]",
              name: "_users",
              type: "address[]",
            },
            {
              internalType: "uint256",
              name: "_totalAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_fanTokenId",
              type: "uint256",
            },
          ],
          name: "distributeRewards",
          outputs: [],
          stateMutability: "nonpayable",
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
          name: "fanTokens",
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
          inputs: [],
          name: "numberOfFanTokens",
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
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
  },
  421613: {
    YourContract: {
      address: "0xde9c476EB881Bc4e3a1730063A282B1c307569f2",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_owner",
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
              indexed: true,
              internalType: "address",
              name: "greetingSetter",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "newGreeting",
              type: "string",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "premium",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "GreetingChange",
          type: "event",
        },
        {
          inputs: [],
          name: "greeting",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
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
          inputs: [],
          name: "premium",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_newGreeting",
              type: "string",
            },
          ],
          name: "setGreeting",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "totalCounter",
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
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "userGreetingCounter",
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
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
    },
    FootyDAOAdapter: {
      address: "0xeCa9b010374Bd30A0Ba132F12A8271F7E038c481",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "currentBalance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "calculatedFees",
              type: "uint256",
            },
          ],
          name: "NotEnoughBalance",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "messageId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "uint64",
              name: "destinationChainSelector",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "address",
              name: "receiver",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "feeToken",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "fees",
              type: "uint256",
            },
          ],
          name: "MessageSent",
          type: "event",
        },
        {
          inputs: [],
          name: "baseChainContractAddr",
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
          inputs: [],
          name: "baseChainSelector",
          outputs: [
            {
              internalType: "uint64",
              name: "",
              type: "uint64",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_sportEventId",
              type: "uint256",
            },
            {
              internalType: "address[]",
              name: "_notJoinedList",
              type: "address[]",
            },
          ],
          name: "closeSportEvent",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_startTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_endTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_registrationWindow",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_stake",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_cost",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_maxAttendance",
              type: "uint256",
            },
          ],
          name: "createSportEvent",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint64",
              name: "_baseChainSelector",
              type: "uint64",
            },
            {
              internalType: "address",
              name: "_baseChainContractAddr",
              type: "address",
            },
            {
              internalType: "address",
              name: "_router",
              type: "address",
            },
            {
              internalType: "address",
              name: "_link",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_sportEventId",
              type: "uint256",
            },
          ],
          name: "joinSportEventSingle",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "recoverChainlinkTokens",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "s_linkToken",
          outputs: [
            {
              internalType: "contract LinkTokenInterface",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "s_router",
          outputs: [
            {
              internalType: "contract IRouterClient",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
  },
  11155111: {
    YourContract: {
      address: "0x2dD2E7cEc5a706b128b9F2f7daa9358677893cE8",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_owner",
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
              indexed: true,
              internalType: "address",
              name: "greetingSetter",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "newGreeting",
              type: "string",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "premium",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "GreetingChange",
          type: "event",
        },
        {
          inputs: [],
          name: "greeting",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
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
          inputs: [],
          name: "premium",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_newGreeting",
              type: "string",
            },
          ],
          name: "setGreeting",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "totalCounter",
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
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "userGreetingCounter",
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
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
    },
    FootyDAO: {
      address: "0x6DA9EBa2967696b21a61D1b6a85524D83c6FD585",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "router",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "ERC721IncorrectOwner",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "ERC721InsufficientApproval",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "approver",
              type: "address",
            },
          ],
          name: "ERC721InvalidApprover",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
          ],
          name: "ERC721InvalidOperator",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "ERC721InvalidOwner",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "receiver",
              type: "address",
            },
          ],
          name: "ERC721InvalidReceiver",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "ERC721InvalidSender",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "ERC721NonexistentToken",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "router",
              type: "address",
            },
          ],
          name: "InvalidRouter",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "OwnableInvalidOwner",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "OwnableUnauthorizedAccount",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "approved",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "messageId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "uint64",
              name: "sourceChainSelector",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "MessageReceived",
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
              name: "action",
              type: "uint256",
            },
          ],
          name: "SimpleCheckPoint",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "balanceOf",
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
              components: [
                {
                  internalType: "bytes32",
                  name: "messageId",
                  type: "bytes32",
                },
                {
                  internalType: "uint64",
                  name: "sourceChainSelector",
                  type: "uint64",
                },
                {
                  internalType: "bytes",
                  name: "sender",
                  type: "bytes",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "token",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Client.EVMTokenAmount[]",
                  name: "destTokenAmounts",
                  type: "tuple[]",
                },
              ],
              internalType: "struct Client.Any2EVMMessage",
              name: "message",
              type: "tuple",
            },
          ],
          name: "ccipReceive",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "claimMemory",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_sportEventId",
              type: "uint256",
            },
            {
              internalType: "address[]",
              name: "notJoinedList",
              type: "address[]",
            },
          ],
          name: "closeSportEvent",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_startTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_endTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_registrationWindow",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_stake",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_cost",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_maxAttendance",
              type: "uint256",
            },
          ],
          name: "createSportEvent",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_sportEventId",
              type: "uint256",
            },
          ],
          name: "exitSportEvent",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getAllSportEventsData",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "creator",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "startTime",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "endTime",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "registrationWindow",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "stake",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "cost",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "maxAttendance",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "participants",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "waitingList",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "takenWaitingList",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "tokenIds",
                  type: "uint256[]",
                },
              ],
              internalType: "struct IFootyDAO.SportEvent[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "getApproved",
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
          inputs: [],
          name: "getLastReceivedMessageDetails",
          outputs: [
            {
              internalType: "bytes32",
              name: "messageId",
              type: "bytes32",
            },
            {
              internalType: "string",
              name: "text",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_sportEventId",
              type: "uint256",
            },
          ],
          name: "getListOfParticipants",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getRouter",
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
              internalType: "uint256",
              name: "_sportEventId",
              type: "uint256",
            },
          ],
          name: "getSportEventData",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "creator",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "startTime",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "endTime",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "registrationWindow",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "stake",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "cost",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "maxAttendance",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "participants",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "waitingList",
                  type: "address[]",
                },
                {
                  internalType: "uint256",
                  name: "takenWaitingList",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "tokenIds",
                  type: "uint256[]",
                },
              ],
              internalType: "struct IFootyDAO.SportEvent",
              name: "",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "price",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sportEventId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "tokenURI",
                  type: "string",
                },
              ],
              internalType: "struct IFootyDAO.Memory[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_sportEventId",
              type: "uint256",
            },
          ],
          name: "getWaitingList",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
          ],
          name: "isApprovedForAll",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_sportEventId",
              type: "uint256",
            },
          ],
          name: "isGameSaleTime",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_sportEventId",
              type: "uint256",
            },
            {
              internalType: "address[]",
              name: "_users",
              type: "address[]",
            },
          ],
          name: "joinSportEventMany",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_sportEventId",
              type: "uint256",
            },
          ],
          name: "joinSportEventSingle",
          outputs: [],
          stateMutability: "payable",
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
          name: "memoryByTokenId",
          outputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "price",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "sportEventId",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "tokenURI",
              type: "string",
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
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "memoryTokenIdsOfSportEvent",
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
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
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
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "ownerOf",
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
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "purchaseMemory",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_cid",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "_sportEventId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_price",
              type: "uint256",
            },
          ],
          name: "putMemoryOnSale",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "sportEventCount",
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
          name: "sportEvents",
          outputs: [
            {
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "startTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "endTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "registrationWindow",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "stake",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "cost",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxAttendance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "takenWaitingList",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
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
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "tokenURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
  },
} as const;

export default contracts;
