import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorModule } from './vendor/vendor.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VendorModule
  ],
  declarations: [],
  exports: [VendorModule, FormsModule,
    ReactiveFormsModule]
})
export class SharedModule { }
