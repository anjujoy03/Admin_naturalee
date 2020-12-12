import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'ngx-bannertbl',
  templateUrl: './bannertbl.component.html',
  styleUrls: ['./bannertbl.component.scss']
})
export class BannertblComponent implements OnInit {
  BannerList: any=[];
  id: string;

  constructor(private formBuilder: FormBuilder,private router: ActivatedRoute,private http:HttpClient,private route:Router) {
    
   }

  ngOnInit(): void {
    this.http.post(environment.apiUrl + '/getBannerImage',{'type':'admin'}).subscribe(response => {
       
      this.BannerList=response['BannerList']
     
    
       
    })
  }
  Delete(banner_id,index){
    this.http.post(environment.apiUrl + '/deleteBannerImage',{'banner_id':banner_id}).subscribe(response => {
       if(response['response']=='Success'){
         console.log("======")
          return this.BannerList.splice(index, 1);
        
       }
     
    
       
    })

  }
  Edit(id){
    console.log(id)
  this.route.navigate(['/pages/forms/banner',id]);
  }
  

}
