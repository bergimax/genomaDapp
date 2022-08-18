/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.1",
   defaultNetwork: "testnetBSC",
   networks: {
      hardhat: {},
      testnetBSC: {
      	url: API_URL,
      	chainId: 97,
      	gasPrice: 20000000000,
      	accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}

//url: "https://data-seed-prebsc-2-s3.binance.org:8545"
