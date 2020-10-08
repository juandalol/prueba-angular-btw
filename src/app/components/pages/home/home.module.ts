import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WishListComponent } from '../../wish-list/wish-list.component';
import { MaterialModule } from '../../../modules/material/material.module';


@NgModule({
  declarations: [
    HomeComponent,
    WishListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
