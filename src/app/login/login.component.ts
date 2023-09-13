import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Bank Service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
data1="Account Number"

acno:any
psw:any

loginForm = this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
})
constructor(private rout:Router,private fb:FormBuilder,private ds:DataService){
  
}

login(){
// this.rout.navigateByUrl("home")
// console.log(this.acno);
// console.log(this.psw);
var path=this.loginForm.value
var acno = path.acno
var psw = path.psw

if(this.loginForm.valid){
  this.ds.loginAccount(acno,psw).subscribe({
    next:(result:any)=>{

      //store accno in localstorage for future use
      localStorage.setItem("currentAcno",JSON.stringify(acno))
      //Storing Current User Name
      localStorage.setItem("CurrentUser",result.currentUser)

      //set acno
      localStorage.setItem("Acno",result.acno)

      alert(result.message)
      //redirection
      this.rout.navigateByUrl("home")
    },
    error:(result:any)=>{
      alert(result.error.message)
    }
  })
}
else{
  alert("invalid form")
}
}
}

