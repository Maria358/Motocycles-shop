import MotocycleModel from './../motocycle/motocycleModel.js';

export default class BasketModel extends MotocycleModel {
    constructor() {
        super();
        this.localBasketKey = 'localBasket';
        this.localOrdersKey = 'localOrders';
        this.localBasket = [];
        this.localOrders = [];
        this.ordersId = [];
        this.searchByID;
    }

    init = () => {
        this.localBasket = JSON.parse(localStorage.getItem(this.localBasketKey));
    };

    addToBasket = (id) => {
        if (localStorage.getItem(this.localBasketKey)) {
            this.localBasket = [...JSON.parse(localStorage.getItem(this.localBasketKey))];
            localStorage.removeItem(this.localBasketKey);
        }
        const motoData = this.searchByID(id);
        this.localBasket.push(motoData[0]);
        localStorage.setItem(this.localBasketKey, JSON.stringify(this.localBasket));

        return this.localBasket;
    };

    getItemsFromBasket = () => {
        const items = JSON.parse(localStorage.getItem(this.localBasketKey));

        return items;
    };

    remainingProducts = (data, id) => {
        const basketItems = JSON.parse(localStorage.getItem(this.localBasketKey));
        this.localBasket = basketItems.filter((item) => item.ID !== id);
        localStorage.removeItem(this.localBasketKey);
        localStorage.setItem(this.localBasketKey, JSON.stringify(this.localBasket));

        return this.localBasket;
    };

    saveOrdersToLocal = (order) => {
        if (localStorage.getItem(this.localOrdersKey)) {
            this.localOrders = [...JSON.parse(localStorage.getItem(this.localOrdersKey))];
            localStorage.removeItem(this.localOrdersKey);
        }
        this.localOrders.push(order);
        localStorage.setItem(this.localOrdersKey, JSON.stringify(this.localOrders));
    };

    getItemById = (id) => {
        const moto = this.searchByID(id);
        return moto;
    };

    getNeedModel = (data, id) => {
        const needModel = data.filter((el) => el.ID === id);
        return needModel;
    };

    countTotalAmount = () => {
        const amount = this.localBasket.map(item => item.Price);
        this.result = amount.reduce((previousValue, currentValue) => {
            return +previousValue + +currentValue;
        }, 0);

        return this.result;
    };

    validInputName = (username) => {
        const letters = /^[A-Za-z]+$/;
        if (username.value.match(letters) && username.value.length >= 2) {
            return true;
        } else {
            username.focus();
            return false;
        }
    };

    validInputEmail = (useremail) => {
        const mailformat = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (useremail.value.match(mailformat) && useremail.value.length > 0) {
            return true;
        } else {
            useremail.focus();
            return false;
        }
    };
}
