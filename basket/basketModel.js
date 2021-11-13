import MotocycleModel from './../motocycle/motocycleModel.js';

export default class BasketModel extends MotocycleModel {
    constructor() {
        super();
        this.motos = [];
        this.searchByID;
    }

    addToBasket = (id) => {
        
        const motoData = this.searchByID(id);
        if (!this.checkTheMoto(id)) {
            localStorage.setItem(`${id}`, JSON.stringify(motoData[0]));
            this.motos.push(JSON.parse(localStorage.getItem(`${id}`)));
        }
        return this.motos;
    };

    checkTheMoto = (id) => {
        const isTrue = this.motos.some((moto) => moto.ID === id);
        return isTrue;
    };

    getItemsFromBasket = () => {
        return Object.keys(localStorage).reduce((obj, k) => {
            return [...obj, JSON.parse(localStorage.getItem(k))];
        }, []);
    };

    remainingProducts = (data, value) => {
        localStorage.removeItem(value)
        return data.filter(el => el.ID !== value)
    };


}
