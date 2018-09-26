import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromContainers from './containers';
import { AuthRoutingModule } from './auth.routing.module';
import { SharedModule } from '../shared/shared.module';

const containers = [fromContainers.LoginComponent, fromContainers.SignupComponent];


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  declarations: [...containers]
})
export class AuthModule { }
