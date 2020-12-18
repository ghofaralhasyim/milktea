import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostioService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {

    const requestOptions = {
      headers: new HttpHeaders({
        'app-id': '5fdc783bf327cd7a0923ef80',
      })
    };

    const url = "https://dummyapi.io/data/api/post?limit=10"
    return this.http.get<any>(url,requestOptions)
  }

  getUser(): Observable<any>{
    const requestOptions = {
      headers: new HttpHeaders({
        'app-id': '5fdc783bf327cd7a0923ef80',
      })
    };

    const url = "https://dummyapi.io/data/api/user?limit=5"
    return this.http.get<any>(url,requestOptions)
  }

  getUserLimit(): Observable<any>{
    const requestOptions = {
      headers: new HttpHeaders({
        'app-id': '5fdc783bf327cd7a0923ef80',
      })
    };

    const url = "https://dummyapi.io/data/api/user?limit=20"
    return this.http.get<any>(url,requestOptions)
  }

  getComment(): Observable<any>{
    const requestOptions = {
      headers : new HttpHeaders({
        'app-id': '5fdc783bf327cd7a0923ef80',
      })
    }
    const url = "https://dummyapi.io/data/api/post/SFAt3mJK0qu4QOd9LgSX/comment?limit=10"
    return this.http.get<any>(url,requestOptions)
  }

  getPostSingleUser(): Observable<any>{
    const requestOptions = {
      headers : new HttpHeaders({
        'app-id': '5fdc783bf327cd7a0923ef80',
      })
    }
    const url = "https://dummyapi.io/data/api/user/5aZRSdkcBOM6j3lkWEoP/post"
    return this.http.get<any>(url,requestOptions)
  }

  getTag(): Observable<any>{
    const requestOptions = {
      headers : new HttpHeaders({
        'app-id': '5fdc783bf327cd7a0923ef80',
      })
    }
    const url = "https://dummyapi.io/data/api/tag?limit=10"
    return this.http.get<any>(url,requestOptions)
  }
}
