
import {Injectable, OnInit} from '@angular/core';
import * as Web3 from 'web3';
import { environment } from '../environments/environment';

declare let require: any;
declare let window: any;
declare let BrowserSolc: any;

@Injectable()
export class ContractsService {
  private _account: string = null;
  private _web3: any;

  constructor() {
    if (typeof window.web3 !== 'undefined') {
      this._web3 = new Web3(window.web3.currentProvider);
      if (this._web3.version.network !== '4') {
        console.log('Please connect to the Rinkeby network');
      }
    } else {
      console.log(
        'Please use a dapp browser like mist or MetaMask plugin for chrome'
      );
    }
  }

  private createContractInstance (tokenAbi, tokenAddress) {
    return this._web3.eth.contract(tokenAbi).at(tokenAddress);
  }

  // Compiles the ICO contract
  public async compileContract(contractSource): Promise<object> {
    let source, optimize;
    let compiled;
    compiled = await new Promise((resolve, reject) => {
      BrowserSolc.loadVersion('soljson-v0.4.24+commit.e67f0147.js', function(compiler) {
        source = contractSource;
        optimize = 1;
        resolve(compiler.compile({sources: source}, optimize));
      });
    });
    return Promise.resolve(compiled);
  }

  // Deploys the ICO contract
  public async deployContract(contractState, userState): Promise<object> {
    return new Promise((resolve, reject) => {
      const contract = this._web3.eth.contract(JSON.parse(contractState.contractAbi));
      const contractInstance = contract.new({
        data: contractState.contractBytecode,
        from: userState.account,
        gas: contractState.contractGasEstimate + 400000,
        gasPrice: this._web3.toWei(100, 'gwei')
      }, (err, res) => {
        if (err) {
            console.log(err);
            reject(err)
        }
        console.log(res.transactionHash);
        if (res.address) {
            console.log('Contract address: ' + res.address);
        }
        resolve(res);
      });
    });
  }

  // Gets current MetaMask account
  public async getAccount(): Promise<string> {
    this._account = await new Promise((resolve, reject) => {
      this._web3.eth.getAccounts((err, accs) => {
        if (err != null) {
          alert('There was an error fetching your accounts.');
          return;
        }
        if (accs.length === 0) {
          alert(
            'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
          );
          return;
        }
        resolve(accs[0]);
      });
    }) as string;
    this._web3.eth.defaultAccount = this._account;
    return Promise.resolve(this._account);
  }

  // Get the token balance of current MetaMask account
  public async getUserICOBalance(contract): Promise<number> {
    const account = await this.getAccount();
    return new Promise((resolve, reject) => {
      const _web3 = this._web3;
      contract.balanceOf.call(account, function (err, result) {
        if (err != null) {
          reject(err);
        }
        resolve(_web3.fromWei(result).toNumber());
      });
    }) as Promise<number>;
  }

  // Buy item from the store
  public async buyItem(item): Promise<object> {
    // TODO get this from backend (deployed with truffle)
    const contract = this.createContractInstance(environment.storeABI, environment.storeAddress);
    const account = await this.getAccount();

    return new Promise((resolve, reject) => {
      contract.buy(item.hash, {'from': account, 'value': this._web3.toWei(item.price, 'ether')}, function(err, receipt) {
        if (err) {
          reject(err)
        }else {
          resolve(receipt);
        }
      })
    });
  }

  // Adds item to the store
  // Requires price and hash of the media.
  // Current MetaMask account will be the owner
  public async addItem(item) {
    // TODO get this from backend (deployed with truffle
    const contract = this.createContractInstance(environment.storeABI, environment.storeAddress);
    const account = await this.getAccount();

    return new Promise((resolve, reject) => {
      contract.add(item.hash, this._web3.toWei(item.price, 'ether'), {'from': account}, function(err, receipt) {
        if (err) {
          reject(err)
        }else {
          resolve(receipt);
        }
      })
    });
  }

  // Checks if your account owns media with it's hash (stored in the blockchain)
  public async checkHash(item) {
    const contract = this.createContractInstance(environment.storeABI, environment.storeAddress);
    const account = await this.getAccount();
    return new Promise((resolve, reject) => {
      contract.proveBuy(item.hash, {'from': account}, function(err, response) {
        if (err) {
          reject(err)
        }else {
          resolve(response);
        }
      })
    });
  }

  // Checks if your account owns media with it's hash (stored in the blockchain)
  public async checkOwnership(item) {
    const contract = this.createContractInstance(environment.storeABI, environment.storeAddress);
    const account = await this.getAccount();
    return new Promise((resolve, reject) => {
      contract.proveOwnership(item.hash, {'from': account}, function(err, response) {
        if (err) {
          reject(err)
        }else {
          resolve(response);
        }
      })
    });
  }
}
