import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl, FormArray, FormBuilder,
  FormControl, FormGroup, Validators
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(public router: Router,
  public fb: FormBuilder) {
    this.form = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  cancel() {
    this.closePopup();
  }
  closePopup() {
    this.router.navigate([{ outlets: { popup: null } }]);
  }

  ngOnInit() {
  }

}
