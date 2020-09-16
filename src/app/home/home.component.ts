import { Component, OnInit } from '@angular/core';
import { ContactformComponent } from '../contactform/contactform.component';
import { ContactlistComponent } from '../contactlist/contactlist.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
