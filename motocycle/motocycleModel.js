import Model from './../common/model.js';

export default class MotocycleModel extends Model {
    constructor() {
        super();
        this.sheetData()
    }

    getData = () => {
        this.data = this.sheetData();
        return this.data;
    };

    filterBy = (value) => {
        const filtered = this.data.filter((obj) => obj['Type of moto'] === value.toLowerCase());
        return filtered;
    };
}
