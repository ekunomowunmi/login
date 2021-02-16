import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users : User[] = [];
  headElements = ['First Name', 'Last Name', 'Email', 'Birth Date','User Type', 'Action'];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    console.log('in here')
    this.userService.getAllUsers().subscribe(res => {
      console.log(res);
      this.users = res as User[];
    })
    
  }
}
