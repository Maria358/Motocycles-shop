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
        this.option = option;
        this.sorted = this.data.sort((a, b) => {
            if (a[this.option] !== b[this.option]) {
                return a[this.option] - b[this.option];
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

    filterBy = async (value) => {
        if (this.filtered) {
            this.data = await this.getData();
            this.data = this.sort(this.option);
        }
        this.filtered = this.data.filter((obj) => obj['Type of moto'] === value);
        this.data = this.filtered;
        return this.filtered;
    };

    searchByID = (input) => {
        const filtered = this.data.filter(obj => {
            return obj.ID.includes(input);
        });
        return filtered;
    }
}