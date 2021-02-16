import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserType } from '../models/user-type.enum';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild("user_name")
  user_name!: ElementRef;
  @ViewChild("password")
  password!: ElementRef;
  user:User = new User();
  errorMessage = '';


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.user.email = this.user_name.nativeElement.value;
    this.user.password = this.password.nativeElement.value;

    this.userService.login(this.user).subscribe(res => {
      let response = res as any;
      console.log(response);
      this.userService.updateSelectedUser(response.user);
      if(res){
        if(response.user.userType == UserType.Admin){
          this.router.navigate(['/admin'])
        } else {
          this.router.navigate(['/home'])
        }
      }
      else{
        console.log('what')
      }
    },(error) => {
        this.errorMessage = error.error
      console.log(error)
    })

  }

}
