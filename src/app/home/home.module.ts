import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromContainers from './containers';
import { HomeRoutingModule } from './home.routing.module';
import { SharedModule } from '../shared/shared.module';

const containers = [fromContainers.WelcomeComponent];

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [...containers]
})
export class HomeModule { }
