import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  currentUser: User = new User()

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.selectedUser.subscribe(res => {
      this.currentUser = res as User;
      console.log(res);
    })
  }

}
