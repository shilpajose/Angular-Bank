import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
data1="Account Number"

login(){
  alert("Login clicked")
}
acnoChange(event:any){
  console.log(event.target.value);
  
}
pswdChange(event:any){
  console.log(event.target.value);
}

}

