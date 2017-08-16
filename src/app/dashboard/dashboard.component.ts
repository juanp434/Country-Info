import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

import { MainComponent } from './../main/main.component';

import { LoginService } from './../main/login.service';
import { GetDataService } from './../get-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string;
  countries: any;
  loader: any;
  country: any = null;
  

  constructor(
    private user: LoginService, 
    private data: GetDataService,
    private router: Router
    ) {
  }
  
  ngOnInit() {
    if(this.user.getUser() == ''){
      if (localStorage.getItem('user')) {
        this.username= localStorage.getItem('user');
      }else{
        this.router.navigate(['login']);
      }
    }else{
      localStorage.setItem('user', this.user.getUser());
      this.username= this.user.getUser();
    }

    this.getCountries();
  }

  onComplete(){
    this.loader =0;
    this.country = this.countries[0];
  }

  getCountries(){
    this.loader=true;
    this.data.fetchData().subscribe(
      (res) => {this.countries = res.json(); this.onComplete()}, 
      );
  }

  moreInfo(select){
    let index = select.target.selectedIndex;
    this.country = this.countries[index];

  }


}
