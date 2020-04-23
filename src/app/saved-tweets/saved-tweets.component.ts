import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { FetchTweetsService } from '../fetch-tweets.service';

@Component({
  selector: 'app-saved-tweets',
  templateUrl: './saved-tweets.component.html',
  styleUrls: ['./saved-tweets.component.css'],
})
export class SavedTweetsComponent implements OnInit {
  tweets = [];
  savedTweets = [];
  query = '';

  constructor(private dataService: FetchTweetsService) {}

  ngOnInit(): void {
    let savedTweets = localStorage.getItem('savedTweets');
    if (savedTweets) {
      this.savedTweets = JSON.parse(savedTweets);
    }
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    localStorage.setItem('savedTweets', JSON.stringify(this.savedTweets));
  }

  searchTweets() {
    if (!this.query) return alert('Please Enter Search Text');
    this.dataService.getData(this.query).subscribe((data: any) => {
      this.tweets = data.tweets;
    });
  }
}
