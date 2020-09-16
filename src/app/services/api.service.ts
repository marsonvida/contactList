import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../classes/users';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class apiService
{
    usersChanged = new Subject<Users[]>();
    private users: Users[] = [];

    apiUrl = 'https://jsonplaceholder.typicode.com/users/';

    constructor (private httpclient: HttpClient)
    {

    }

    setUsers(users: Users[]) {
        this.users = users;
        this.usersChanged.next(this.users.slice());
      }

    // //list of contacts
    // getUsers(): Observable<any> {
    //     return this.httpclient.get<Users[]>(this.apiUrl);
    // }

    getUsers() {
        return this.users.slice();
      }


    // //User details
    // getUser(id: number): Observable<any> {
    //     return this.httpclient.get<Users[]>(this.apiUrl + id);
    // }

    getUser(index: number) {
        return this.users[index];
      }


    // //Register User
    // createUser(user: Users): Observable<any> {
    //     return this.httpclient.post<Users>(this.apiUrl, user);
    // }

    createUser(user: Users) {
        this.users.push(user);
        this.usersChanged.next(this.users.slice());
      }

    // //Update User details
    // updateUser(user: Users): Observable<any> {
    //     return this.httpclient.put<Users>(this.apiUrl + user.id, user);
    // }

    updateUser(index: number, newUser: Users) {
        this.users[index] = newUser;
        this.usersChanged.next(this.users.slice());
      }
    // //delete user details
    // deleteUser(id: number): Observable<any> {
    //     return this.httpclient.delete<Users>(this.apiUrl + id);
    // }

    deleteUser(index: number){
        this.users.splice(index, 1);
        this.usersChanged.next(this.users.slice());
        return this.httpclient.delete<Users>(this.apiUrl + index);
      }

      }


