import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'environments/environment';

@Component({
  selector: 'ngx-productupdate',
  templateUrl: './productupdate.component.html',
  styleUrls: ['./productupdate.component.scss']
})
export class ProductupdateComponent implements OnInit {

  id: string;
  prod_list: any;
  image_list: any;
  myFilesType: any=[] ;
  FeaturedImge: any=[];

  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private http:HttpClient,private router:Router) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
     if(this.id){
       this.getBlogList()
     }
    }); 
   }
  productForm: FormGroup;
  myFiles:any=[];
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
    
      blog_name: ['', Validators.required],
      blog_head: ['', Validators.required],
      blog_desc:['', Validators.required],
      auth_name: ['', Validators.required],
      blog_id:[''],
     });
}

get f() { return this.productForm.controls; }

onSubmit() {
    
  console.log(this.productForm.value)
  console.log(this.myFiles)
    //  console.log(this.myFiles)
    var formData = new FormData();
   
    for(let i=0;i<this.myFiles.length;i++){
      console.log(this.myFiles[i])
      formData.append('myfile',this.myFiles[i])
    }
       
       formData.append('blog_name',this.productForm.controls['blog_name'].value)
       formData.append('blog_heading',this.productForm.controls['blog_head'].value)
       formData.append('blog_desc',this.productForm.controls['blog_desc'].value)
       formData.append('auth_name',this.productForm.controls['auth_name'].value)
  
       formData.append('blog_id',this.productForm.controls['blog_id'].value)
  
    //    console.log(formData)
      this.http.post(environment.apiUrl + '/blog_dtls_save',formData).subscribe(response => {
        if(response['response'] =="Success"){

        this.router.navigate(['/pages/tables/smart-table'])
      
        }
      })
  }
  oFileChange(event,type){
    console.log(event)
    for(var  i=0;i<event.target.files.length;i++){
  
      
       this.myFiles.push(event.target.files[i])
      
    }
  
  }
 
  getBlogList(){
    this.http.post(environment.apiUrl + '/update_blog',{'blog_id':this.id}).subscribe(response => {
      
     if(response['response'] =="Success"){
      this.prod_list = response['blog_list'];
        this.productForm.get('blog_id').setValue(this.prod_list[0].blog_id)
        this.productForm.get('blog_name').setValue(this.prod_list[0].blog_name)
        this.productForm.get('blog_head').setValue(this.prod_list[0].blog_heading)
        this.productForm.get('blog_desc').setValue(this.prod_list[0].blog_desc)
        this.productForm.get('auth_name').setValue(this.prod_list[0].auth_name)
       
      }
     
      //window.location.reload();
    })

    

  }
  

}

