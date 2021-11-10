import MotocycleModel from "../motocycle/motocycleModel.js";

export default class WindowModel extends MotocycleModel {
    constructor() {
        super();
        this.data;
    }

    getCertainMoto(model) {
        const motoData = this.data.filter(moto => moto.Model === model.split(' ')[1]);
        return motoData;
    }
}