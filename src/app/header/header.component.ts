import { Component, OnInit } from '@angular/core';
import { ContractsService } from '../contracts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public currentAccount = null;
  constructor(private cs: ContractsService) {}

  ngOnInit() {
    const that = this;
    this.cs.getAccount().then(function (account) {
      that.currentAccount = account;
    })
  }

}
