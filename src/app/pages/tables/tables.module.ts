import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';
import { StocktblComponent } from './stocktbl/stocktbl.component';
import { BannertblComponent } from './bannertbl/bannertbl.component';
import { CustomertblComponent } from './customertbl/customertbl.component';
import { CustomerordertblComponent } from './customerordertbl/customerordertbl.component';
// import { ProducttblComponent } from './producttbl/producttbl.component';



@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
    StocktblComponent,
    BannertblComponent,
    CustomertblComponent,
    CustomerordertblComponent,
    
   
  ],
})
export class TablesModule { }
