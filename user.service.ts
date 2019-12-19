import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';

import { User } from './user.model';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {
  }

  handleError(error) {
    console.log(error);
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public getAllUsers(): Observable<HttpResponse<User[]>> {
    return this.http.get<User[]>(
      'http://localhost:3000/api/users', { observe: 'response' });
  }

  // public getAllUsers(): Observable<User[]> {
  //   console.log("get all users");

  //   return this.http
  //     .get('http://localhost:3000/api/users').subscribe(data => {
  //       console.log(data);
  //       var users : Observable<User[]>;

  //       for (const d of (data as any)) {
  //         users.push({
  //           name: d.name,
  //           price: d.price
  //         });
  //       }
  //       return users;
  //     });

  //   // this.http
  //   //  .get('http://localhost:3000/api/users').pipe(map((response: any) => {
  //   //   console.log(response);
  //   //   const users = response.json();
  //   //   return users.map((user) => new User(user));
  //   // }
  //   // ),catchError(this.handleError));

  //   // return new Observable<User[]>();
  // }

}
