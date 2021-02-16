import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3003/api';

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
}
