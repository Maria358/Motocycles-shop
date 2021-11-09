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

    sort = async (option) => {
        const sorted = this.data.sort((a, b) => {
            if (a[option] !== b[option]) {
                return a[option] - b[option];
            };
        });
        return sorted;
    }

    search = (input) => {
        console.log(input)
        const filtered = this.data.filter(obj => {
            return obj.Brand.toLowerCase().includes(input.toLowerCase());
        });
        return filtered;
    }
}