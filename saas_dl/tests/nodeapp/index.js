var Ganache = require("ganache-core");
var Web3 = require('web3');
var abi = require('../contract-deploy/build/contracts/TestToken.json');
// Set providers
//web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/QWtW1kyOkq4lVySpBKto"));
web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
// ---
console.log(abi.abi)

