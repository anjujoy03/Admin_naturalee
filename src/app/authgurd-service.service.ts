import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthgurdServiceService {

  constructor() { }
  gettoken(){  
    if(localStorage.getItem("SeesionUser")){
      return true;

    }else{
      return false;
    } 
    }  
}
