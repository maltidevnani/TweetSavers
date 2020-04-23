import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedTweetsComponent } from './saved-tweets.component';

describe('SavedTweetsComponent', () => {
  let component: SavedTweetsComponent;
  let fixture: ComponentFixture<SavedTweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedTweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
