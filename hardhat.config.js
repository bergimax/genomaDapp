/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.1",
   defaultNetwork: "ropsten",
   networks: {
      hardhat: {},
      ropsten: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      },
      testnetBSC: {
      	url: "https://data-seed-prebsc-2-s3.binance.org:8545",
      	chainId: 97,
      	gasPrice: 20000000000,
      	accounts: [`0x${PRIVATE_KEY}`]
      },
      mainnetBSC: {
      	url: "https://bsc-dataseed.binance.org/",
      	chainId: 56,
      	gasPrice: 20000000000,
      	accounts: [`0x${PRIVATE_KEY}`]
      },
      polygon_mumbai: {
	url: API_URL_MATIC,
        accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}
