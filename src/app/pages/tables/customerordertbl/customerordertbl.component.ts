import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-customerordertbl',
  templateUrl: './customerordertbl.component.html',
  styleUrls: ['./customerordertbl.component.scss']
})
export class CustomerordertblComponent implements OnInit {
  OrderList: any=[];

  constructor(private formBuilder: FormBuilder,private router: ActivatedRoute,private http:HttpClient,private route:Router) { 
  }

  StatusUpadteArray=[
    {
      name:'Ordered',
      value:'o'
    },
    {
      name:'Packed',
      value:'p'
    },
    {
      name:'Shipped',
      value:'s'
    }
  ]
  ngOnInit(): void {
    this.getOrderList();
  }
  getOrderList(){
    console.log("========")
    this.http.post(environment.apiUrl+'/getListoforders',{'id':'admin'}).subscribe(response => {
     console.log("======sds")
      this.OrderList=response['OrderList']
     
      // this.myForm.get('sliderimages').setValue(this.BannerDEtails[0].image_path)
    })
  }
  UpdateStatus(value,id,order_id){
    this.http.post(environment.apiUrl+'/updateOrders',{'order_status':value,'user_id':id,'order_id':order_id}).subscribe(response => {
      
      
       // this.myForm.get('sliderimages').setValue(this.BannerDEtails[0].image_path)
     })
  

  }

}
