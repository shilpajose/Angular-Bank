import { Component } from '@angular/core';
import { DataService } from '../Bank Service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data = "Happy Banking with us"

  name: any = ""
  acno: any = ""
  balance:any=""
  constructor(private ds: DataService) { }

  ngOnInit(): void {
    //check data present or not in localstorage
    if (localStorage.getItem("CurrentUser")) {
      //localStorage.setItem("CurrentUser",result.currentUser)-> eee kodukkunna CurrentUser aanu getitem il use cheyyendath.
      this.name = localStorage.getItem("CurrentUser")
    }
    

  }
  //Balance check
getbalance(){
  if (localStorage.getItem("Acno")) {
    this.acno = JSON.parse(localStorage.getItem("Acno") || "")
    // console.log(this.acno);
    //balance api call
    this.ds.getBalance(this.acno).subscribe({
      next:(result:any)=>{
        this.balance=result.message    //message il aanu nammal balance pass cheyyunnath
      },
      error:(result:any)=>{
        alert(result.error.message)
      }
    })
    
  }}

  //Profile view
  profileview(){
    if(localStorage.getItem("Acno")){
      this.acno = JSON.parse(localStorage.getItem("Acno") || "")
    }
  }

}
