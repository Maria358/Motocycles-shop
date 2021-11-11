import BasketView from './basketView.js';
import Observer from './../common/observer.js';
import BasketModel from './basketModel.js';

export default class BasketController {
    constructor() {
        this.view = new BasketView(this.onBasket);
        this.model = new BasketModel();
        Observer.subscribe(Observer.events.onAddToBskt, this.onAddToBasket)
    }

    onAddToBasket = (choosenMoto) => {
        this.data = this.model.addToBasket(choosenMoto); // добавили выбранный мотоцикл в корзину
    }

    onBasket = () => {
        this.data = this.model.getItemsFromBasket();
        if (this.data.length !== 0) {
            this.view.render(this.data); // По клику на корзину - рендерим все выбранные мото
        } else {
            alert('You haven\'t added something to your basket yet!');
        }
    }
}