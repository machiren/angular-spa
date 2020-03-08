import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<any>('users');
  }

  getUser(id: string) {
    return this.http.get<any>(`users/${id}`);
  }

  post(user: any) {
    return this.http.post<any>('user', user);
  }

  put(id: string, user: any) {
    return this.http.post<any>(`user/${id}`, user);
  }

  destroy(id: string) {
    return this.http.delete<any>(`user/${id}`);
  }

  delete() {
    return this.http.delete<any>(`user`);
  }

}
