import { Component, OnInit, Input } from '@angular/core';
import { apiService } from '../services/api.service';
import { Users } from '../classes/users';
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-contactview',
  templateUrl: './contactview.component.html',
  styleUrls: ['./contactview.component.css']
})
export class ContactviewComponent implements OnInit {
  user: Users;
  id: number;

  constructor(private _apiService: apiService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.user = this._apiService.getUser(this.id);
        }
      );
  }
  onAddUser() {
    this._apiService.createUser(this.user);
    console.log(this.user)
  }

}
