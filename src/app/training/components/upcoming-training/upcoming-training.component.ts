import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-upcoming-training',
  templateUrl: './upcoming-training.component.html',
  styleUrls: ['./upcoming-training.component.css']
})
export class UpcomingTrainingComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  @Output() trainingStart: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }
  startTraining() {
    this.trainingStart.emit();
  }

}
