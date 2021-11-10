import BasketView from './basketView.js';

export default class BasketController {
    constructor() {
        this.view = new BasketView(this.onAddToBasket);
    }

    onAddToBasket() {
        console.log('on basket click')
        this.view.render();
    }
}