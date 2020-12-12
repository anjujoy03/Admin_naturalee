import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'ngx-stocktbl',
  templateUrl: './stocktbl.component.html',
  styleUrls: ['./stocktbl.component.scss']
})
export class StocktblComponent implements OnInit {
  prod_list: any;

  constructor(private http:HttpClient,private router: ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.getProdist()
  }
  Edit(id){
  console.log("---------");
  this.route.navigate(['/pages/forms/productadd',id]);
}  
  getProdist(){
  this.http.post(environment.apiUrl + '/getprodList',{id:""}).subscribe(response => {
    if(response['response']=='Success'){
     this.prod_list=response['prod_list'];
     console.log(this.prod_list)
    }
     else{
       
     }
        
    })
  }
  Delete(id,index){
    this.http.post(environment.apiUrl + '/deleteprodist',{prod_id:id}).subscribe(response => {
      if(response['response']=='Success'){
       this.prod_list.splice(index,1)
      }
       else{
         
       }
          
      })
    }
  
  
}
