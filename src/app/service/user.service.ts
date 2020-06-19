import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiurl = 'http://localhost:3000/userForm';

  constructor(private http: HttpClient) {
  }

  create(user): Observable<any> {
    return this.http.post<any>(this.apiurl, user);
  }

  get(): Observable<any> {
    return this.http.get<User[]>(this.apiurl);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.apiurl}/${id}`);
  }

  update(user): Observable<any> {
    return this.http.put<any>(this.apiurl + '/' + user.id , user);
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiurl}/${id}`;
    return this.http.delete(url);
  }
}
