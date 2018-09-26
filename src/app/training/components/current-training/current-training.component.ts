import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { map, shareReplay, take, takeUntil } from 'rxjs/operators';
import { interval, Observable, fromEvent, concat } from 'rxjs';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit, AfterViewInit {
  
  progressCount: number = 0;
  progress$: Observable<number>;
  stop$: Observable<any>;
  
  @ViewChild('stop') private stopButton: any;

  constructor() { }

  ngOnInit() {
    //this.initProgress();
  }

  ngAfterViewInit() {
    
   

    this.stop$ = concat(fromEvent(this.stopButton._elementRef.nativeElement, 'click'), interval(1000).pipe(take(20)))

    

    const interval$: Observable<number> = interval(1000);
    this.progress$ = interval$.pipe(
      map(_ => this.progressCount+=5),
      take(20),
      takeUntil(this.stop$),
      shareReplay()
    )
  }

  private initProgress() {
    const interval$: Observable<number> = interval(1000);
    this.progress$ = interval$.pipe(
      map(_ => this.progressCount+=5),
      takeUntil(this.stop$),
      shareReplay()
    )
   
  }

}
