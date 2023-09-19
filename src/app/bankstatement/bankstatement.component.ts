import { Component } from '@angular/core';
import { DataService } from '../Bank Service/data.service';

@Component({
  selector: 'app-bankstatement',
  templateUrl: './bankstatement.component.html',
  styleUrls: ['./bankstatement.component.css']
})


export class BankstatementComponent {
acno:any
transactionArray:any=[]
spinner:any=true

constructor(private ds:DataService){
}

ngOnInit(): void{
  
    if (localStorage.getItem("currentAcno")) {
      this.acno = JSON.parse(localStorage.getItem("currentAcno") || "")
      console.log(this.acno);
      //balance api call
      this.ds.accountStatementApi(this.acno).subscribe({
        next: (result: any) => {
          this.transactionArray = result.message    //message il aanu nammal balance pass cheyyunnath
          console.log(this.transactionArray);
          
        }
      })

    }
    setTimeout(() => {
      this.spinner=false
    }, 2000);
  
}
}
