import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'ngx-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.scss']
})
export class ProductaddComponent implements OnInit {
  id: string;
  prod_list: any;
  image_list: any;
  myFilesType: any=[] ;
  FeaturedImge: any=[];

  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private http:HttpClient,private router:Router) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
     if(this.id){
       this.getprodDetails()
     }
    }); 
   }
  productForm: FormGroup;
  myFiles:any=[];
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
    
      proddesc: ['', Validators.required],
      prodname: ['', Validators.required],
      price:['', Validators.required],
      offer_price: ['', Validators.required],
      category_name: ['', Validators.required],
      category_type:['', Validators.required],
      product_quantity: ['', Validators.required],
      mainImage: ['', Validators.required],
      FetureImge:[],
      myFilesData:['',],
      prod_id:[],
     });
}

get f() { return this.productForm.controls; }
  
oFileChange(event,type){
  console.log(event)
  for(var  i=0;i<event.target.files.length;i++){

    
     this.myFiles.push(event.target.files[i])
     this.myFilesType.push({'name':event.target.files[i].name,'type':type})
    
    //  event.target.files[i].setAttribute('image_type',type);
   // this.myFiles.push({'image_path':event.target.files[i].name,'type':type})
    // this.productForm.get('myFiles').setValue(this.myFiles)
  }
  this.productForm.get('myFilesData').setValue(this.myFiles)
  console.log(this.myFiles)
}
onFileChange(event,type){
  this.FeaturedImge=event.target.files[0]
}


  onSubmit() {
    
console.log(this.productForm.value)
console.log(this.myFiles)
  //  console.log(this.myFiles)
  var formData = new FormData();
 
  for(let i=0;i<this.myFiles.length;i++){
    console.log(this.myFiles[i])
    formData.append('myfile',this.myFiles[i])
  }
  formData.append('feature',this.FeaturedImge)

  
  formData.append('filetypes',JSON.stringify(this.myFilesType))

  console.log()
  // for (let j=0;j<this.myFilesType.length;j++){
  //   formData.append('filetypes',JSON.stringify(this.myFilesType[j]))

  // }
  

 
     
     formData.append('proddesc',this.productForm.controls['proddesc'].value)
     formData.append('prodname',this.productForm.controls['prodname'].value)
     formData.append('price',this.productForm.controls['price'].value)
     formData.append('offer_price',this.productForm.controls['offer_price'].value)
     formData.append('category_name',this.productForm.controls['category_name'].value)
     formData.append('category_type',this.productForm.controls['category_type'].value)
     formData.append('product_quantity',this.productForm.controls['product_quantity'].value)
     formData.append('prod_id',this.productForm.controls['prod_id'].value)

  //    console.log(formData)
    this.http.post(environment.apiUrl + '/addProductdtls',formData).subscribe(response => {
      this.router.navigate(['/pages/tables/stocktbl'])
      
    })
}
getprodDetails(){
  console.log("====")
  this.http.post(environment.apiUrl+'/getproductDetail',{prod_id:this.id}).subscribe(response=>{
   
     if(response['response'] =="Success"){
     this.prod_list = response['prod_list'];
     this.image_list =response['image_list'];
       this.productForm.get('proddesc').setValue(this.prod_list[0].prod_desc)
       this.productForm.get('prodname').setValue(this.prod_list[0].prod_name)
       this.productForm.get('offer_price').setValue(this.prod_list[0].offer_price)
       this.productForm.get('price').setValue(this.prod_list[0].prod_price)
       this.productForm.get('category_name').setValue(this.prod_list[0].catogery_name)
       this.productForm.get('category_type').setValue(this.prod_list[0].type)
       this.productForm.get('product_quantity').setValue(this.prod_list[0].product_quantity)
       this.productForm.get('prod_id').setValue(this.prod_list[0].prod_id)
      
     }
},
error => {
    console.log('Log the error here: ', error);
});
}
DeleteProdist(id){
  this.http.post(environment.apiUrl+'/deleteprodist',{prod_id:this.id}).subscribe(response=>{
  
},
error => {
   console.log('Log the error here: ', error);
});
}

}
