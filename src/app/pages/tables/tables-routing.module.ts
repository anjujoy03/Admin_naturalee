import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import {StocktblComponent} from './stocktbl/stocktbl.component'
import {BannertblComponent} from './bannertbl/bannertbl.component';
import {CustomertblComponent} from './customertbl/customertbl.component';
import {CustomerordertblComponent} from './customerordertbl/customerordertbl.component'
import { from } from 'rxjs';
import {AuthenticationGuard} from '../../authentication.guard'

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
      path: 'smart-table',
      component: SmartTableComponent,
    },
    {
      path: 'tree-grid',
      component: TreeGridComponent,canActivate:[AuthenticationGuard],
    },
    {
      path: 'tree-grid/:id',
      component: TreeGridComponent,canActivate:[AuthenticationGuard],
    },
  
    {
      path:'stocktbl',
      component:StocktblComponent,canActivate:[AuthenticationGuard]
    },
    {
      path:'bannertbl',
      component:BannertblComponent,canActivate:[AuthenticationGuard]
    },
    {
      path:'customertbl',
      component:CustomertblComponent,canActivate:[AuthenticationGuard]
    },
    {
      path:'customerordertbl',
      component:CustomerordertblComponent,canActivate:[AuthenticationGuard]
    }
   
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
  TreeGridComponent,
];
