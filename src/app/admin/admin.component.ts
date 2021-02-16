
import { User } from '../models/user';
import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
import { Event as NavigationEvent } from "@angular/router";
import { filter } from "rxjs/operators";
import { NavigationStart } from "@angular/router";
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  clicked: boolean = false;
  @Input() routeText: string = "Homepage";
  routeText1: any;
  showBusyIndicator: boolean = false;
  public show: boolean = false;
  hideTableColumn: boolean = true;
  users: User[] = [];
  constructor(private router: Router, private userService: UserService) {

  }
  ngOnInit(): void {
  }


  setClicked(val: boolean): void {
    this.clicked = val;
  }

  logoutClick() {
    window.location.href = '/login';
    // this.router.navigate(["/login"]);
  }

  HomepageClick() {
    this.routeText = "Homepage";
    this.router.navigate(['/admin/home']);
  }

  usersClick() {
    this.routeText = "Users";
    this.router.navigate(['/admin/users']);
  }

  CategoriesClick() {
    this.routeText = "Categories";
  }

  SideAttractionsClick() {
    this.routeText = "Side Attractions";
  }

  DealsClick() {
    this.routeText = "Deals";
  }

  RestaurantsClick() {
    this.routeText = "Restaurants";
  }

  ReservationsClick() {
    this.routeText = "Reservations";
  }

  customersClick() {
    this.routeText = "Customers";
  }
}
