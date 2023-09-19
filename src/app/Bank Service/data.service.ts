import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl:any="http://localhost:3000"
  constructor(private http:HttpClient) { }
 
//api call to create account
accountCreate(acno:any,psw:any,uname:any){
  const bodyData={acno,psw,uname}// backend le same values, same values aanenki single name koduthal mathy.
  return this.http.post(`${this.baseUrl}/bankuser/createacc`,bodyData)
}

loginAccount(acno:any,psw:any){
  const dataLogin={acno,psw}
  return this.http.post(`${this.baseUrl}/bankuser/login`,dataLogin)
}

//Api to get balance
getBalance(acno:any){
  return this.http.get(`${this.baseUrl}/bankuser/balance/${acno}`)
}

//Api to money Transfer
moneyTransferApi(sAcno:any,rAcno:any,amount:any,psw:any,date:any){
  const bodyData = {sAcno,rAcno,amount,psw,date}
  return this.http.post(`${this.baseUrl}/bankuser/money-transfer`,bodyData)
}
//api to get bank statement/ transaction history
accountStatementApi(acno:any){
  return this.http.get(`${this.baseUrl}/bankuser/account-statement/${acno}`)
}


}
