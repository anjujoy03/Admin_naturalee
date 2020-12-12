import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'ngx-customertbl',
  templateUrl: './customertbl.component.html',
  styleUrls: ['./customertbl.component.scss']
})
export class CustomertblComponent implements OnInit {
  CustomerList: any=[];

  constructor(private formBuilder: FormBuilder,private router: ActivatedRoute,private http:HttpClient,private route:Router) { 
  }

  ngOnInit(): void {
    this.getCustomerList();
  }
  getCustomerList(){
    console.log("========")
    this.http.post(environment.apiUrl+'/getcustomersorders',{'id':'admin'}).subscribe(response => {
     console.log("======sds")
      this.CustomerList=response['OrderList']
      console.log(this.CustomerList)
      // this.myForm.get('sliderimages').setValue(this.BannerDEtails[0].image_path)
    })
  }
}
