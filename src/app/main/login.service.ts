import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  public name: string;
  public psw: string;

  constructor() {
   this.name= "";
   this.psw= "";
  }

  setData(name, psw){
    this.name = name;
    this.psw = psw;
  }

  getUser(){
    return this.name;
  }

}