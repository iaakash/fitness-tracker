import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromContainers from './containers';
import { TrainingRoutingModule } from './training.routing.module';
import { SharedModule } from '../shared/shared.module';
import { PastTrainingComponent } from './components/past-training/past-training.component';
import { CurrentTrainingComponent } from './components/current-training/current-training.component';
import { UpcomingTrainingComponent } from './components/upcoming-training/upcoming-training.component';

const containers = [fromContainers.TrainingComponent];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TrainingRoutingModule
  ],
  declarations: [...containers, PastTrainingComponent, CurrentTrainingComponent, UpcomingTrainingComponent]
})
export class TrainingModule { }
