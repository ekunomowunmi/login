import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from './models/user';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3003/api';

  private dsSelectedUser = new BehaviorSubject<User>(new User());
  selectedUser = this.dsSelectedUser.asObservable();
  // url = 'https://omowunmi-be.firebaseapp.com/api';

  constructor(private http: HttpClient) { }

  register(data: any){
    return this.http.post(`${this.url}/register`,data);
  }

  login(data:any){
    return this.http.post(`${this.url}/login`,data);
  }

  getAllUsers(){
    return this.http.get(`${this.url}/getUsers`)
  }

  sendMail(user: User){
    return this.http.post(`${this.url}/sendMail`,user)
  }

  updateSelectedUser(user: User): void {
    this.dsSelectedUser.next(user);
  }
}
