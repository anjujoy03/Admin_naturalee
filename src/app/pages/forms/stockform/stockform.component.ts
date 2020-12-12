import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';


// import custom validator to validate that password and confirm password fields match


@Component({
  selector: 'ngx-stockform',
  templateUrl: './stockform.component.html',
  styleUrls: ['./stockform.component.scss']
})
export class StockformComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean;
  get f() { return this.loginForm.controls; }

  constructor(private formBuilder: FormBuilder,private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
 
    //   
  this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),
      this.emailDomainValidator]
  ],
      Password: ['', Validators.required],
      
     });
}
emailDomainValidator(control: FormControl) { 
  let email = control.value; 
  if (email && email.indexOf("@") != -1) { 
    let [_, domain] = email.split("@"); 
    if (domain !== "gmail.com") { 
      return {
        emailDomain: {
          parsedDomain: domain
        }
      }
    }
  }
  return null; 
}
Authenticate(){
  this.submitted = true;
  this.http.post(environment.apiUrl + '/adminlogin',(this.loginForm.value)).subscribe(response => {
   if(response['response']=='Success'){
   const user=1;
 localStorage.setItem('SeesionUser',user.toString()) 

 console.log("=============")
 this.route.navigateByUrl("/pages/forms/productadd");
   }
    //window.location.reload();
  })
}
}