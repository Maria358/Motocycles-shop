import Model from './../common/model.js';

export default class MotocycleModel extends Model {
    constructor() {
        super();
        //this.data;
        this.sheetData();
    }

    getData = async () => {
        this.data = await this.sheetData();
        return this.data;
    }

    sort = (option) => {
        if (this.filtered) {
            this.data = this.filtered;
        }
        this.sorted = this.data.sort((a, b) => {
            if (a[option] !== b[option]) {
                return a[option] - b[option];
            };
        });
        this.data = this.sorted;
        return this.sorted;
    }

    search = (input) => {
        const filtered = this.data.filter(obj => {
            return obj.Brand.toLowerCase().includes(input.toLowerCase());
        });
        return filtered;
    }

    filterBy = (value) => {
        this.filtered = this.data.filter((obj) => obj['Type of moto'] === value.toLowerCase());
        if (this.sorted) {
            this.data = this.sorted;
        }
        return this.filtered;
    };
}