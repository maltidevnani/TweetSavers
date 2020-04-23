import { Component, OnInit, OnDestroy } from '@angular/core';
import {FetchTweetsService} from '../app/fetch-tweets.service';
import {  takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TweetSaver';
  constructor(private dataService: FetchTweetsService) { }
  tweets=[];
  destroy$: Subject<boolean> = new Subject<boolean>();
  ngOnInit() {

    this.dataService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[])=>{
      console.log(data);
      this.tweets = data;
    })  
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

}
