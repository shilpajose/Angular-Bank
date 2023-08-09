import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
data1="Account Number"

login(a:any,b:any){
  console.log(a.value);
  console.log(b.value);
  alert("Login clicked")
}


}

