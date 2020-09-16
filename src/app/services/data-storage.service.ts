import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { apiService } from './api.service';
import { Users } from '../classes/users';

@Injectable({ providedIn: 'root' })

export class DataStorageService {
  constructor(private http: HttpClient, private _apiService: apiService) {}

  storeRecipes() {
    const users = this._apiService.getUsers();
    this.http
      .put(
        'https://jsonplaceholder.typicode.com/users/',
        users
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Users[]>(
        'https://jsonplaceholder.typicode.com/users/'
      )
      .pipe(
        map(users => {
          return users.map(user => {
            return {
              ...user
            };
          });
        }),
        tap(users => {
          this._apiService.setUsers(users);
        })
      )
  }

}
