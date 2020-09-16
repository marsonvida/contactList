import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Users } from '../classes/users';
import { apiService } from '../services/api.service';


@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
  constructor(private httpClient: HttpClient,
    private _apiService: apiService) { }

  onSubmit(form: NgForm) {
    this._apiService.createUser(form.value);

    this.httpClient.post('https://jsonplaceholder.typicode.com/users', form.value)
    .subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  );
  alert("User contact details successfully added.")
  form.reset();
}

  ngOnInit() {

  }
}


