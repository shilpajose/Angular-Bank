import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  data="data inside"

  serviceMethod(){
    alert("service method")
  }
}
