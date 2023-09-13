import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Bank Service/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  //password check for confirm password
  pswCheck: any = false

  //Create Model for signup form
  signupForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]], //space added in name validation
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    cpsw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })
  constructor(private rou: Router, private fb: FormBuilder,private ds:DataService) { }

  signup() {
    // alert("acc created")
    // this.rou.navigateByUrl("")

    // console.log(this.signupForm.value.acno);
    var path = this.signupForm.value
    var acno = path.acno
    var uname = path.uname
    var psw = path.psw
    var cpsw = path.cpsw

    //check if the form is valid or not
    if (this.signupForm.valid) {
      if (psw==cpsw) {
        this.pswCheck = false
        //api call to create_acc
        this.ds.accountCreate(acno,psw,uname).subscribe({
          next:(result:any)=>{
            alert(result.message)
            //Redirection
            this.rou.navigateByUrl("")
          },
          error:(result:any)=>{
            alert(result.error.message)
          }
        })
      }
      else {
        this.pswCheck = true
      }
      
    } 

  }

}

