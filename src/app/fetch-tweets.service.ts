import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchTweetsService {
  private REST_API_SERVER = "http://tweetsaver.herokuapp.com/?q=obama&callback=yourJSONPCallbackFn&count=2";

  constructor(private httpClient: HttpClient) { }
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
  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER).pipe(catchError(this.handleError));
  }
  getData() {
    

    // Pass the key for your callback (in this case 'callback')
    // as the second argument to the jsonp method
    return this.httpClient.jsonp(this.REST_API_SERVER, 'callback');
  }
}
