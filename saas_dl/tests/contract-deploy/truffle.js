// truffle.js
// truffle migrate --network development

require('dotenv').config();
const HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      gas: 6500000,
      network_id: "5777"
    },
    rinkeby: {
        provider: new HDWalletProvider(process.env.MNENOMIC, process.env.INFURA_API_KEY),
        network_id: 3,
        gas: 4500000
    },
  }
};