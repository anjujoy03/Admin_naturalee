import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  myFiles: any=[];
  banner_id='';
  id: string;
  BannerDEtails: any;
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: ActivatedRoute,private http:HttpClient,private route:Router) { 
    this.router.paramMap.subscribe(params => {
      this.id = params.get('id');
     if(this.id){
       this.getBannerDetails()
     }
    }); 
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      sliderimages: ['', Validators.required],
    })
  }
  
  oFileChange(event){
    console.log(event)
    for(var  i=0;i<event.target.files.length;i++){
       this.myFiles.push(event.target.files[i])


  }
  }
  onSubmit() 
    {
    
    console.log(this.myFiles)
      //  console.log(this.myFiles)
      var formData = new FormData();
     
      for(let i=0;i<this.myFiles.length;i++){
        formData.append('myfile',this.myFiles[i])
      }
      formData.append('banner_id',this.banner_id)
      
        this.http.post(environment.apiUrl + '/saveBannerImage',formData).subscribe(response => {
       
          this.route.navigate(['/pages/tables/bannertbl']);
        })
    }
    getBannerDetails(){

      this.http.post(environment.apiUrl + '/getBannerDetails',{'banner_id':this.id}).subscribe(response => {
       
        this.BannerDEtails=response['BannerList']
        // this.myForm.get('sliderimages').setValue(this.BannerDEtails[0].image_path)
      })
    }

  }

