import { Component, OnInit } from '@angular/core';

import { PizzaQueueService } from './../../pizza-queue.service';
// import { PizzaComponent } from './../pizza/pizza.component';
import { Pizza } from './../../shared/pizza';


@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {
 pizzas: Pizza[];
  constructor(  private pizzaService: PizzaQueueService) { }
getPizzas() {
    this.pizzaService.getPizzas()
    .then(pizzas => {this.pizzas = pizzas;
        console.log(this.pizzas)
    });
}
  ngOnInit() {
     this.getPizzas();
  }

}
