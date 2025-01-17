import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './components/order/order.component';

import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OrderRoutingModule,
    SharedModule,
    MaterialModule
  ],
  exports:[
    FormsModule
  ]
})
export class OrderModule { }
