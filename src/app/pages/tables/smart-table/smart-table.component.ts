import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'environments/environment';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  prod_list: any;

  constructor(private http:HttpClient,private router: ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.getProdist()
  }
  Edit(id){
  console.log("---------");
  this.route.navigate(['/pages/forms/productupdate',id]);
}  
  getProdist(){
  this.http.post(environment.apiUrl + '/get_blog',{id:""}).subscribe(response => {
    if(response['response']=='Success'){
     this.prod_list=response['blog_list'];

    }
     else{
       
     }
        
    })
  }
  Delete(id,index){
    this.http.post(environment.apiUrl + '/delete_blog',{blog_id:id}).subscribe(response => {
      if(response['response']=='Success'){
       this.prod_list.splice(index,1)
      }
       else{
         
       }
          
      })
    }
  
}
