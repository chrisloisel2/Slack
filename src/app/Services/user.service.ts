import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  User = {};

  constructor(private http: HttpClient) {}

  login(user: any) {
    return this.http.post('http://localhost:3000/login', user);
  }

  logout() {
    this.User = {};
  }
}
