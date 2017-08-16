import { Component, OnInit, Input, Output } from '@angular/core';
import {Router} from '@angular/router';

import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input()
  errorLogin = false;

  constructor(private router: Router, private login: LoginService) { }

  ngOnInit() {
    localStorage.clear();
  }

  register(form: NgForm){
    this.login.setData(form.value.name, form.value.psw);

    if(form.value.name == "admin" && form.value.psw=="admin"){
      this.router.navigate(['dashboard']);
    }
    else{
      this.errorLogin= true;
    }

  }

  clear(){
    this.errorLogin= false;
  }

}
