import { Component, OnInit, Input } from '@angular/core';

import { Pizza } from './../../shared/pizza';
import { Ingredient } from './../../shared/ingredient';
import { User } from './../../shared/user';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.css']
})
export class PizzaCardComponent implements OnInit {
    @Input() pizza: Pizza;
    @Input () pizzas: Array<Pizza>;

  constructor() { }

  ngOnInit() {
  }

}
