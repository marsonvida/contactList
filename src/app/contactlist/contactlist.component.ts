import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {Router, ActivatedRoute} from "@angular/router";
import { apiService } from '../services/api.service';
import { Users } from '../classes/users';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})

export class ContactlistComponent implements OnInit, OnDestroy{
  users: Users[];
  subscription: Subscription;


  constructor(private _apiService: apiService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit () {
    this.subscription = this._apiService.usersChanged
    .subscribe(
      (users: Users[]) => {
        this.users = users;
      }
    );
    this.users = this._apiService.getUsers();
    }

      ngOnDestroy() {
        this.subscription.unsubscribe();
      }
}
