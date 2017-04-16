import { Injectable } from '@angular/core';
import { Pizza } from './shared/pizza';
import { Ingredient } from './shared/ingredient';
import { User } from './shared/user';

const toppings = [
new Ingredient(0, './../assets/ingredients/food-fancy-cheese.svg', 'cheeze', 10),
new Ingredient(1, './../assets/ingredients/food-tomato.svg', 'sauce', 12),
new Ingredient(2, './../assets/ingredients/Anonymous-onion.svg', 'onion', 15),
new Ingredient(3,  './../assets/ingredients/Peppers.svg', 'paprika', 20),
new Ingredient(4, './../assets/ingredients/dStulle-hard-boiled-egg.svg', 'eggs', 25),
new Ingredient(5, './../assets/ingredients/food-bacon.svg', 'bacon', 25),
new Ingredient(6, './../assets/ingredients/food-broccoli.svg', 'broccoli', 15),
new Ingredient(7, './../assets/ingredients/food-mushroom.svg', 'mushrooms', 20),
new Ingredient(8, './../assets/ingredients/food-salmon.svg', 'salmon', 23)
];

const toppingsPromise = Promise.resolve(toppings);

@Injectable()
export class PizzaConstructorService {

  constructor() { }

    getToppings() {

        return toppingsPromise;
    }
}
