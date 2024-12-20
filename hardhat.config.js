/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.20",
   settings: {
    optimizer: {
      enabled: true,
      runs: 10000,
    },
  },
   defaultNetwork: "mantleSepolia",
   networks: {
      hardhat: {},
      mantleSepolia: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`],
      }
   },
  etherscan: {
    apiKey: process.env.MANTLE_API_KEY,
    customChains: [
      {
        network: 'mantle',
        chainId: 5000,
        urls: {
          apiURL: 'https://api.mantlescan.xyz/api',
          browserURL: 'https://mantlescan.xyz',
        },
      },
      {
        network: 'mantleSepolia',
        chainId: 5003,
        urls: {
          apiURL: 'https://api-sepolia.mantlescan.xyz/api',
          browserURL: 'https://sepolia.mantlescan.xyz/',
        },
      },
    ],
  }
}