import Model from './../common/model.js';

export default class MotocycleModel extends Model {
    constructor() {
        super();
        this.sheetData();
    }

    getData = async () => {
        this.data = await this.sheetData();
        return this.data;
    }

    sort = (option) => {
        const sorted = this.data.sort((a, b) => {
            if (a[option] !== b[option]) {
                return a[option] - b[option];
            };
        });
        return sorted;
    }

    search = (input) => {
        const filtered = this.data.filter(obj => {
            return obj.Brand.toLowerCase().includes(input.toLowerCase());
        });
        return filtered;
    }

    filterBy = (value) => {
        const filtered = this.data.filter((obj) => obj['Type of moto'] === value.toLowerCase());
        return filtered;
    };
}