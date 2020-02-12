export const address = "0x13d2740CB75133E71FFf54d23dBd1cF1c2fCaFAF"
export const abi = [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "firstName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "lastName",
          "type": "string"
        }
      ],
      "name": "UserCreated",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "userCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "users",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "firstName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "lastName",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "firstName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "lastName",
          "type": "string"
        }
      ],
      "name": "createUser",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
