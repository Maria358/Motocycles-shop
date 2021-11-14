import BasketView from './basketView.js';
import Observer from './../common/observer.js';
import BasketModel from './basketModel.js';
import { testMSG } from '../common/textMessage.js';

export default class BasketController {
    constructor() {
        this.view = new BasketView(this.onBasket, this.onAddOrder, this.onRemainingProducts, this.sortInBasket);
        this.model = new BasketModel();
        Observer.subscribe(Observer.events.onAddToBskt, this.onAddToBasket);
    }

    init = () => {
        if (this.model.getItemsFromBasket()) {
            this.counter = this.model.getItemsFromBasket().length;
            this.view.countItem(this.counter);
            this.model.init();
        }
    };

    onAddToBasket = (choosenMoto) => {
        this.data = this.model.addToBasket(choosenMoto);
        this.counter = this.model.getItemsFromBasket().length;
        this.view.countItem(this.counter);
    };

    onBasket = () => {
        this.data = this.model.getItemsFromBasket();
        if (this.data && this.data.length !== 0) {
            this.view.render(this.data);
        } else {
            alert("You haven't added something to your basket yet!");
        }
    };

    onRemainingProducts = (id) => {
        const listProducts = this.model.remainingProducts(this.model.getItemsFromBasket(), id);
        this.view.baseRender(listProducts);
        this.counter = this.model.getItemsFromBasket().length;
        this.view.countItem(this.counter);
        this.view.render(listProducts);
    };

    sortInBasket = (data, id) => {
        const needModel = this.model.getNeedModel(data, id)
        return needModel
    }

    onAddOrder = (id, userName) => {
        const data = this.model.getItemById(id);
        const textMessage = testMSG(data[0].Brand, data[0].Model, userName);
        this.model.saveOrdersToLocal(data[0]);
        this.onSendMSG(textMessage);
    };

    onSendMSG = (msg) => {
        Observer.notify(Observer.events.sendMsgToTG, msg);
    };
}
