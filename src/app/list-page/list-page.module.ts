import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPageRoutingModule } from './list-page-routing.module';
import { ListPageComponent } from './list-page.component';
// import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [ListPageComponent],
  imports: [
    CommonModule,
    ListPageRoutingModule,
    // AppRoutingModule
  ]
})
export class ListPageModule { }
