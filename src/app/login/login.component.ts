import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
data1="Account Number"

acno:any
psw:any
constructor(private rout:Router){
  
}

login(){
this.rout.navigateByUrl("home")
// console.log(this.acno);
// console.log(this.psw);



  // alert("Login clicked")
}


}

