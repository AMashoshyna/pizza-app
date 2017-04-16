import { Component, OnInit } from '@angular/core';
import { PizzaConstructorService } from './../../pizza-constructor.service';
import { Ingredient } from './../../shared/ingredient';
import {
  AbstractControl, FormArray, FormBuilder,
  FormControl, FormGroup, Validators
} from '@angular/forms';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.css']
})
export class ConstructorComponent implements OnInit {
  public toppings: Array<Ingredient>;
  form: FormGroup;

  constructor(private constructorService: PizzaConstructorService,
    public fb: FormBuilder) {
    this.form = this.fb.group({
      title: '',
      description: '',
      size: ''
    });
    this.form.valueChanges.subscribe(data => {
      console.log(data);
    });
  }
  getToppings() {
    this.constructorService.getToppings()
      .then(toppings => {this.toppings = toppings; console.log(this.toppings); return Promise.resolve(toppings)})
          .then((data) => {
      this.form.addControl('ingredients',
        this.fb.group(
          data.reduce((cur, next) => {
            cur[next.title] = this.fb.group(
              {
                checked: false
              }
            );
            return cur;
          }, {})
        )
      );
    });
  }

  ngOnInit() {
    this.getToppings();
    console.log(this.form);
  }

}
