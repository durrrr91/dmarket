import { Component, OnInit } from '@angular/core';
import { ContractsService } from '../contracts.service';
import { SourcesService } from '../sources.service';

@Component({
  selector: 'app-create-ico',
  templateUrl: './create-ico.component.html',
  styleUrls: ['./create-ico.component.css']
})
export class CreateIcoComponent implements OnInit {

  public userState = {
    account: ''
  }
  public contractsSourceInput = {};
  public contracts = [];
  public contractsVars = {
    token_name: 'Dapp Token',
    token_symbol: 'DAPP',
    decimals: 18
  };

  constructor(private cs: ContractsService, private ss: SourcesService) {
    this.setAllContracts();
    this.compileAllContracts();
    this.setAccountData();
  }

  ngOnInit() {
  }

  setAllContracts() {
    this.contractsSourceInput['DappToken'] = this.ss.DappToken(this.contractsVars);
    this.contractsSourceInput['DappTokenSale'] = this.ss.DappTokenSale();
  }

  compileAllContracts() {
    this.contracts = [];
    this.cs.compileContract(this.contractsSourceInput).then(contract => {
      console.log(contract)

      const DappToken = {};
      DappToken['contractSource'] = this.contractsSourceInput['DappToken'];
      DappToken['contractBytecode'] = contract['contracts']['DappToken:DappToken']['bytecode'];
      DappToken['contractAbi'] = contract['contracts']['DappToken:DappToken']['interface'];
      DappToken['contractGasEstimate'] = contract['contracts']['DappToken:DappToken']['gasEstimates']['creation'][1];
      this.contracts.push(DappToken);

      const DappTokenSale = {};
      DappTokenSale['contractSource'] = this.contractsSourceInput['DappTokenSale'];
      DappTokenSale['contractBytecode'] = contract['contracts']['DappTokenSale:DappTokenSale']['bytecode'];
      DappTokenSale['contractAbi'] = contract['contracts']['DappTokenSale:DappTokenSale']['interface'];
      DappTokenSale['contractGasEstimate'] = contract['contracts']['DappTokenSale:DappTokenSale']['gasEstimates']['creation'][1];
      this.contracts.push(DappTokenSale);
    });
  }

  setAccountData() {
    this.cs.getAccount().then(account => {
      this.userState.account = account;
    });
  }

  contractDeploy(contractState) {
    this.cs.deployContract(contractState, this.userState).then(contract => {
      console.log(contract);
    });
  }

}
