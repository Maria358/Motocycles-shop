import Model from "../common/model.js";

export default class WindowModel extends Model {
    constructor() {
        super();
        this.data = this.sheetData();
    }

    getCertainMoto(model) {
        const motoData = this.data.filter(moto => moto.Model === model.split(' ')[1]);
        return motoData;
    }
}