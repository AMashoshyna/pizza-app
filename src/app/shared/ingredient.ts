export class Ingredient {
    constructor(
        public id: number,
        public image: string,
        public title: string,
        public price: number,
        public checked?: boolean
    ) { }
};
