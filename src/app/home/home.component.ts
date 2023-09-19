import { Component } from '@angular/core';
import { DataService } from '../Bank Service/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import {DatePipe} from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data = "Happy Banking with us"

  name: any = ""
  acno: any = ""
  balance: any = ""
  message:any=""
  msgClr:any=true
  constructor(private ds: DataService, private fb: FormBuilder,private dp:DatePipe) { }

  ngOnInit(): void {
    //check data present or not in localstorage
    if (localStorage.getItem("CurrentUser")) {
      //localStorage.setItem("CurrentUser",result.currentUser)-> eee kodukkunna CurrentUser aanu getitem il use cheyyendath.
      this.name = localStorage.getItem("CurrentUser")
    }


  }
  //Balance check
  getbalance() {
    if (localStorage.getItem("currentAcno")) {
      this.acno = JSON.parse(localStorage.getItem("currentAcno") || "")
      // console.log(this.acno);
      //balance api call
      this.ds.getBalance(this.acno).subscribe({
        next: (result: any) => {
          this.balance = result.message    //message il aanu nammal balance pass cheyyunnath
        },
        error: (result: any) => {
          alert(result.error.message)
        }
      })

    }
  }

  //Profile view
  getProfile() {
    if (localStorage.getItem("currentAcno")) {
      this.acno = JSON.parse(localStorage.getItem("currentAcno") || "")//error varunnath data onnum parse cheyyan illathath kond aanu...so oru empthy string pass cheyth kodukuka
      // console.log(this.name, this.acno);

    }
  }

  // moneyTransfer form validation 
  moneyTransferform = this.fb.group({
    rAcno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    amnt: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })

  MoneyTransfer() {
    if (this.moneyTransferform.valid) {
      var path = this.moneyTransferform.value
      var rAcno = path.rAcno
      var amount = path.amnt
      var psw = path.psw
      // console.log(rAcno);

      //sender acno
      if(localStorage.getItem('currentAcno')){
        this.acno = JSON.parse(localStorage.getItem("currentAcno") || "")
        // console.log('shiluuu',this.acno);
      }

      //date acces
      const date = new Date()
      // console.log(date);
      //to convert data format in angular we can use angular pipes
      var latestDate = this.dp.transform(date,'medium') 
      console.log(latestDate);
      
      if(this.acno==rAcno){
        this.message="sender and receiver account number are same"
        this.msgClr=false
      }else{
        //api call
        this.ds.moneyTransferApi(this.acno,rAcno,amount,psw,latestDate).subscribe({//give values in same order..
          next:(result:any)=>{
            this.message=result.message
            this.msgClr=true
            // alert(result.message)
          },
          error:(result:any)=>{
            this.message=result.error.message
            this.msgClr=false
            // alert(result.error.message)
          }
        })
      }
      
    } else{
      this.message="Invalid form"
      this.msgClr=false
    }
  }

  logout(){
    if(localStorage.getItem('Acno')){
      localStorage.removeItem('currentAcno')
      localStorage.removeItem('CurrentUser')
      localStorage.removeItem('Acno')
      window.location.href=" "
    }
  }

}


