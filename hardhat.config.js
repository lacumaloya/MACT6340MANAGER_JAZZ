require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

// change these for different networks
const POLYGON_AMOY_URL = `https://polygon-amoy.g.alchemy.com/v2/${ALCHEMY_API_KEY}`;
const POLYGON_MAINNET_URL = `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`;
const SEPOLIA_URL = `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`;
const ETHEREUM_URL = `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`;

const STUNT_WALLET_PRIVATE_KEY = process.env.STUNT_WALLET_PRIVATE_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

module.exports = {
  etherscan: {
    apiKey: {
      mainnet: ETHERSCAN_API_KEY,
      sepolia: ETHERSCAN_API_KEY,
      polygon: POLYGONSCAN_API_KEY,
      polygonAmoy: POLYGONSCAN_API_KEY,
    },
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY,
    token: "MATIC", // Still "MATIC" for now
    outputFile: "gas-report.txt",
    noColors: true,
  },  
  defaultNetwork: "polygonAmoy",
  networks: {
    hardhat: {
      chainId: 31337,
      gas: 30000000,
      blockGasLimit: 30000000,
    },
    polygonAmoy: {
      url: POLYGON_AMOY_URL,
      accounts: [STUNT_WALLET_PRIVATE_KEY],
      gasPrice: 35000000000,
      chainId: 80002,
    },
    polygon: {
      url: POLYGON_MAINNET_URL,
      accounts: [STUNT_WALLET_PRIVATE_KEY],
      gasPrice: 35000000000,
      chainId: 137,
    },
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [STUNT_WALLET_PRIVATE_KEY],
      gasPrice: 35000000000,
      chainId: 11155111,
    },
    ethereum: {
      url: ETHEREUM_URL,
      accounts: [STUNT_WALLET_PRIVATE_KEY],
      gasPrice: 35000000000,
      chainId: 1,
    },
  },
  solidity: {
    version: "0.8.22",
    settings: {
      optimizer: {
        enabled: false,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};