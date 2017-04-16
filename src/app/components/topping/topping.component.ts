import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from './../../shared/ingredient';

@Component({
  selector: 'app-topping',
  templateUrl: './topping.component.html',
  styleUrls: ['./topping.component.css']
})
export class ToppingComponent implements OnInit {
  @Input() ingredient: Ingredient;

  constructor() { }

  ngOnInit() {
  }

}
