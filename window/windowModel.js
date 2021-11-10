import MotocycleModel from "../motocycle/motocycleModel.js";

export default class WindowModel extends MotocycleModel {
    constructor() {
        super();
        this.data;
    }

    getCertainMoto(data) {
        const model = data.split(' ').slice(1).join(' ');
        const motoData = this.data.filter(moto => moto.Model === model);
        return motoData;
    }
}