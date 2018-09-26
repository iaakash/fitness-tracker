import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromContainers from './containers';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: fromContainers.LoginComponent
    },
    {
        path: 'signup',
        component: fromContainers.SignupComponent
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class AuthRoutingModule { }
