import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root',
})
export class FetchTweetsService {
  private ROOT_API = 'http://tweetsaver.herokuapp.com';
  constructor(private httpClient: HttpClient) {}
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getData(query) {
    // Pass the key for your callback (in this case 'callback')
    // as the second argument to the jsonp method
    let apiUrl = `${this.ROOT_API}/?q=${query}&count=10`;
    return this.httpClient
      .jsonp(apiUrl, 'callback')
      .pipe(retry(1), catchError(this.handleError));
  }
}
