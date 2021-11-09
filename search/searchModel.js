import Model from './../common/model.js';

export default class SearchModel extends Model {
    constructor() {
        super();
    }

    search = async (input) => {
        const data = await this.sheetData();
        const filtered = data.filter(obj => {
            return obj.Brand.toLowerCase().includes(input.toLowerCase());
        });
        return filtered;
    }
}