import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<User[]>('users');
  }

  getUser(id: string) {
    return this.http.get<User>(`users/${id}`);
  }

  post(user: User) {
    return this.http.post<User>('users', user);
  }

  put(id: string, user: User) {
    return this.http.post<User>(`users/${id}`, user);
  }

  destroy(id: string) {
    return this.http.delete<User>(`users/${id}`);
  }

}
