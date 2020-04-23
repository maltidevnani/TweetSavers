import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import { SavedTweetsComponent } from './saved-tweets/saved-tweets.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: SavedTweetsComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    SavedTweetsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    DragDropModule,
    MatCardModule,
    NgbModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
