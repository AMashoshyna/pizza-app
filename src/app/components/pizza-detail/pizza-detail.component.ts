import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Pizza } from './../../shared/pizza';
import { Ingredient } from './../../shared/ingredient';
import { User } from './../../shared/user';

import { PizzaQueueService} from './../../pizza-queue.service';


@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {
  //  @Input() pizza: Pizza;
   public pizza: Pizza;

  constructor(
    private pizzaQueueService: PizzaQueueService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
goBack(): void {
  this.location.back();
}
  ngOnInit(): void {
      this.route.params
    .switchMap((params: Params) => { console.log(params); 
        return this.pizzaQueueService.getPizza(+params['id'])})
    .subscribe(pizza => { this.pizza = pizza; });
  }

}
