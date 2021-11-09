import Model from './../common/model.js';

export default class MotocycleModel extends Model {
    constructor() {
        super();
    }

    getData = async () => {
        this.data = await this.sheetData();
        return this.data;
    }

    sort = async (option) => {
        const data = await this.sheetData();
        const sorted = data.sort((a, b) => {
            if (a[option] !== b[option]) {
                return a[option] - b[option];
            };
        });
        return sorted;
    }

    filterBy = async (input) => {
        const data = await this.sheetData();
        const filtered = data.filter(obj => {
            return obj['Type of moto'] === input.toLowerCase();
        });
        return filtered;
    }
}