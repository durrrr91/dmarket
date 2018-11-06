![enter image description here](https://github.com/durrrr91/dmarket/blob/master/src/assets/store/store.png?raw=true)
**Ethereum based marketplace for media files**

!! This project is **not** complete and was built for the London Blockchain Week Hackathon in 2017.

To run locally:

    npm install
    npm install -g truffle
    cd contracts
Set providers in contracts/truffle.js. Will work out of the box with Ganache for local development and Rinkeby test network.

    truffle migrate
    
  The project currently doesn't have a backend, so you will need to manually set the deployed contract address and ABI in /src/environments/environment.ts. Leave the default values there to work with already deployed contract in the Rinkeby test network. The contract has 3 deployed media files already included in the project. To add more files call the "addItem" function in contracts.service.ts
  The default contract address on Rinkeby is https://rinkeby.etherscan.io/address/0xff8150272c20c3b926ef6b7bed9c83ab2916494f

    ng serve

Connect with MetaMask and go to /market-listings to buy and items or check ownership of items.

The system was originally supposed to run with it's own token, so we also have /create-ico route, that will compile a custom crowdsale for the user in their browser using Solc and let them deploy the contracts via MetaMask.