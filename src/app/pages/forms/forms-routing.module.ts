import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import {ProductaddComponent} from './productadd/productadd.component'
import { ProductupdateComponent } from './productupdate/productupdate.component';
import {BannerComponent} from './banner/banner.component';
import {StockComponent} from './stock/stock.component';
import {StockformComponent} from './stockform/stockform.component'
import {AuthenticationGuard} from '../../authentication.guard'

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path:'stock',
        component:StockComponent
      },
      {
        path:'banner',
        component:BannerComponent,canActivate:[AuthenticationGuard]
      },
      {
        path:'banner/:id',
        component:BannerComponent,canActivate:[AuthenticationGuard]
      },
      
      {
        path:'productadd',
        component:ProductaddComponent,canActivate:[AuthenticationGuard]
      },
      {
        path:'productadd/:id',
        component:ProductaddComponent,canActivate:[AuthenticationGuard]
      },
      {
        path:'productupdate',
        component:ProductupdateComponent
      },
      {
        path:'productupdate/:id',
        component:ProductupdateComponent
      },
      {
        path: 'inputs',
        component: FormInputsComponent,
      },
      {
        path: 'layouts',
        component: FormLayoutsComponent,
      },
      {
        path: 'layouts',
        component: FormLayoutsComponent,
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
      },
      {
        path: 'datepicker',
        component: DatepickerComponent,
      },
      {
        path: 'stockform',
        component: StockformComponent,
      },

      
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {
}

