import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserType } from '../models/user-type.enum';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  currentUser: User = new User();
  users:User[] = [];
  customers: User[] = [];
  admin: User[] = [];

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.userService.selectedUser.subscribe(res => {
      console.log('res',res);
      if(!res){
        this.router.navigate(['/login'])
      }
      this.currentUser = res as User;
      console.log(res);
    });
    this.getUsers();
  }

  getUsers(){
    console.log('in here')
    this.userService.getAllUsers().subscribe(res => {
      this.users = res as User[];
      console.log(this.users);
      this.getCustomers();
    })
  }

  getCustomers(){
    this.customers = this.users.filter(user => user.userType == UserType.Customer);
    this.admin =  this.users.filter(user => user.userType == UserType.Admin);
  }

}
