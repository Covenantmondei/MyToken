require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
};

require("dotenv").config(); // Load environment variables from .env file
// require ("hardhat/config()"); // Assuming you are using a .env file

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;
const SEPOLIA_RPC = process.env.SEPOLIA_RPC;

/** @type import('hardhat/config').HardhatUserConfig */
const config = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC,
      accounts: SEPOLIA_PRIVATE_KEY ? [SEPOLIA_PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};

module.exports = config;
