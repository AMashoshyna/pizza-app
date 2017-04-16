import { Ingredient } from './ingredient';

export class Pizza {

    constructor(
        public id: number,
        public title: string,
        // public ingredients: Array<Ingredient>,
        public price: number,
        public imgUrl: string
    ) { }
};