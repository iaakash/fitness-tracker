import { Component, OnInit } from '@angular/core';
import { map, shareReplay, take } from 'rxjs/operators';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  
  progressCount: number = 0;
  progress$: Observable<number>;

  constructor() { }

  ngOnInit() {
    this.initProgress();
  }

  private initProgress() {
    const interval$: Observable<number> = interval(1000);
    this.progress$ = interval$.pipe(
      map(_ => this.progressCount+=5),
      take(20),
      shareReplay()
    )
   
  }

}
