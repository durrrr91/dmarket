import { Component, OnInit } from '@angular/core';
import { ContractsService } from '../contracts.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  public storeAssets = [
    {
      'source': '../assets/store/1.jpeg',
      'owner': '0x0d215dC4bB0d75fD99E36238E0bf4261c2527385',
      'price': '0.004',
      'hash': 'E155887E1CC233527A7771A3309DD36EB4933893E9B998C21514E3CD762F007F'
    },
    {
      'source': '../assets/store/2.jpeg',
      'owner': '0x0d215dC4bB0d75fD99E36238E0bf4261c2527385',
      'price': '0.00005',
      'hash': 'B0E87631FF8687BBE3D0CFD955AD7C1EB324992C32CC87C0F633D63C379310A9'
    },
    {
      'source': '../assets/store/3.jpeg',
      'owner': '0x0d215dC4bB0d75fD99E36238E0bf4261c2527385',
      'price': '0.03',
      'hash': 'C278D37A578A54D6BAEDB9A622D27BC65BF6387B6AA52A58ADC34B2B15D293C9'
    }
  ];

  constructor(private cs: ContractsService) {

  }

  ngOnInit() {
    this.storeAssets.forEach((item, index) => {
      this.checkHash(item).then(result => {
        this.storeAssets[index]['ownedByAddress'] = result;
      })
    })
  }

  // TODO
  // Add proper Auth system and allow everyone to add items
  // for now this is used only by admin
  addItem(item) {
    this.cs.addItem(item).then(result => {
      console.log(result);
    });
  }

  buyItem(item) {
    this.cs.buyItem(item).then(result => {
      console.log(result);
    });
  }

  checkHash(item) {
    return this.cs.checkHash(item).then(result => {
      return result;
    })
  }
}
