import { Component, OnInit , Inject} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { apiService } from "../services/api.service";

@Component({
  selector: 'app-contactedit',
  templateUrl: './contactedit.component.html',
  styleUrls: ['./contactedit.component.css']
})
export class ContacteditComponent implements OnInit {
  id: number;
  editMode = false;
  editForm: FormGroup;


  constructor(
    private router: Router,
    private _apiService: apiService,
    private route: ActivatedRoute) { }


  ngOnInit () {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    if (this.editMode) {
      this._apiService.updateUser(this.id, this.editForm.value);
    } else {
      this._apiService.createUser(this.editForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['/../'], { relativeTo: this.route });
  }

  private initForm() {
    let id = null;
    let name = '';
    let email = '';
    let phone = null;

    if (this.editMode) {
      const user = this._apiService.getUser(this.id);
      name = user.name;
      id = user.id;
      email = user.email;
      phone = user.phone;
    }

    this.editForm = new FormGroup({
      id: new FormControl(id),
      name: new FormControl(name, Validators.required),
      email: new FormControl(email, Validators.required),
      phone: new FormControl(phone, Validators.required),
      });
  }
}
