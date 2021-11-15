import BasketView from './basketView.js';
import Observer from './../common/observer.js';
import BasketModel from './basketModel.js';
import { textMSG } from '../common/textMessage.js';

export default class BasketController {
    constructor() {
        this.view = new BasketView(
            this.onBasket,
            this.onAddOrder,
            this.onRemainingProducts,
            this.receiveAmount,
            this.sortInBasket,
            this.changeBasketCount,
            this.checkUsername,
            this.checkUserEmail
        );
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

    changeBasketCount = (id) => {
        const res = this.onRemainingProducts(id);
        if (res && res.length !== 0) {
            this.view.render(res);
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
        const needModel = this.model.getNeedModel(data, id);
        return needModel;
    };

    onAddOrder = (id, userName) => {
        const data = this.model.getItemById(id);
        const textMessage = textMSG(data[0].Brand, data[0].Model, userName, data[0].Price);
        this.model.saveOrdersToLocal(data[0]);
        this.onSendMSG(textMessage);
    };

    onSendMSG = (msg) => {
        Observer.notify(Observer.events.sendMsgToTG, msg);
    };

    receiveAmount = () => {
        this.amount = this.model.countTotalAmount();
        return this.amount;
    };

    checkUsername = (value) => {
        const validName = this.model.validInputName(value);
        return validName;
    };

    checkUserEmail = (value) => {
        const validEmail = this.model.validInputEmail(value);
        return validEmail;
    };
}
