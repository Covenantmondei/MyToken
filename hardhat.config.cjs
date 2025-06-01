require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

// Get variables from .env
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY?.trim();
const SEPOLIA_RPC = process.env.SEPOLIA_RPC?.trim();
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY?.trim();

// Hard fail if any are missing
if (!SEPOLIA_PRIVATE_KEY) {
  throw new Error("Missing SEPOLIA_PRIVATE_KEY in .env file");
}
if (!SEPOLIA_RPC) {
  throw new Error("Missing SEPOLIA_RPC in .env file");
}

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC,
      accounts: [SEPOLIA_PRIVATE_KEY]
    },
    'lisk-sepolia': {
      url: 'https://rpc.sepolia-api.lisk.com',
      accounts: [SEPOLIA_PRIVATE_KEY],
      gasPrice: 1000000000,
    },
  },
  etherscan: {
    // Use "123" as a placeholder, because Blockscout doesn't need a real API key, and Hardhat will complain if this property isn't set.
    apiKey: {
      "lisk-sepolia": "123"
    },
    customChains: [
      {
          network: "lisk-sepolia",
          chainId: 4202,
          urls: {
              apiURL: "https://sepolia-blockscout.lisk.com/api",
              browserURL: "https://sepolia-blockscout.lisk.com"
          }
      }
    ]
  },
  sourcify: {
    enabled: false
  },
};