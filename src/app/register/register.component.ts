import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { interval } from 'rxjs';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user : User = new User();
  registeredDate: any;
  @ViewChild("first_name")
  first_name!: ElementRef;
  @ViewChild("last_name")
  last_name!: ElementRef;
  @ViewChild("user_name")
  user_name!: ElementRef;
  @ViewChild("password")
  password!: ElementRef;

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  register(){

    this.user.firstName = this.first_name.nativeElement.value;
    this.user.lastName = this.last_name.nativeElement.value;
    this.user.email = this.user_name.nativeElement.value;
    this.user.password = this.password.nativeElement.value;
    let  dateObj = new Date(Date.now());
    if(this.registeredDate){
     dateObj = new Date(this.registeredDate.year, this.registeredDate.month,this.registeredDate.day)
    }

    this.user.birthDate = dateObj;
    console.log(this.user);
    this.userService.register(this.user).subscribe(res => {
      console.log(res);
      if(res){
        this.toastr.success("Registration Successful, you can as well login")

      }
      const user = res as User;
      this.userService.sendMail(user).subscribe(res => {
        console.log(res, 'Message sent');
      })
    }, error => {
      this.toastr.error("An error Occured in Registration, Please Try again");
    })
  }


}
