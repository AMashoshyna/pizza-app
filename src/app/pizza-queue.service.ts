import { Injectable } from '@angular/core';
import { Pizza } from './shared/pizza';
import { Ingredient } from './shared/ingredient';
import { User } from './shared/user';

const pizzas = [
    new Pizza(1, 'pizza1',
        13, "http://images.clipartpanda.com/clipart-pizza-9Tz4gbXTE.jpeg"),
    new Pizza(2, 'pizza2',
        14, "http://images.clipartpanda.com/clipart-pizza-9Tz4gbXTE.jpeg"),
    new Pizza(3, 'pizza3',
        16, "http://images.clipartpanda.com/clipart-pizza-9Tz4gbXTE.jpeg"),
    new Pizza(4, 'pizza4',
        50, "http://images.clipartpanda.com/clipart-pizza-9Tz4gbXTE.jpeg"),
    new Pizza(5, 'pizza5',
        138, "http://images.clipartpanda.com/clipart-pizza-9Tz4gbXTE.jpeg"),
    new Pizza(6, 'pizza6',
        15, "http://images.clipartpanda.com/clipart-pizza-9Tz4gbXTE.jpeg"),
    new Pizza(7, 'pizza7',
        12, "http://images.clipartpanda.com/clipart-pizza-9Tz4gbXTE.jpeg"),
    new Pizza(8, 'pizza8',
        150, "http://images.clipartpanda.com/clipart-pizza-9Tz4gbXTE.jpeg"),
    new Pizza(9, 'pizza9',
        78, "http://images.clipartpanda.com/clipart-pizza-9Tz4gbXTE.jpeg"),
    new Pizza(10, 'pizza10',
        20, "http://images.clipartpanda.com/clipart-pizza-9Tz4gbXTE.jpeg")
];

const pizzaPromise = Promise.resolve(pizzas);
@Injectable()
export class PizzaQueueService {

    getPizzas() {

        return pizzaPromise;

    }

    getPizza(
        id: number | string): Promise<Pizza> {
        console.log(id);
        return pizzaPromise
            .then(pizzas => pizzas.find(pizza => { return pizza.id === id; }));

    }

}
