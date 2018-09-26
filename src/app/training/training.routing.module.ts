import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingComponent } from './containers/training/training.component';

const routes: Routes = [
    {
        path: '',
        component: TrainingComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class TrainingRoutingModule { } 
