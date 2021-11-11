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
            this.motos.push(motoData[0]);
        }
        return this.motos;
    }

    checkTheMoto = (id) => {
        const isTrue = this.motos.some(moto => moto.ID === id);
        return isTrue;
    }
}