import { Component, OnInit, Input } from '@angular/core';
import { Users } from 'src/app/classes/users';
import { apiService } from 'src/app/services/api.service';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contactitem',
  templateUrl: './contactitem.component.html',
  styleUrls: ['./contactitem.component.css']
})
export class ContactitemComponent implements OnInit {
  @Input() user: Users;
  @Input() index: number;

  constructor(private _apiService: apiService,
    private router: Router,
    private route: ActivatedRoute,
    private htppclient: HttpClient) {}

  ngOnInit(): void {
  }

  onDeleteUser() {
    this._apiService.deleteUser(this.index);
    this.htppclient.delete('https://jsonplaceholder.typicode.com/users');
    this.router.navigate(['list']);
    alert("Contact deleted.")


  }

}
