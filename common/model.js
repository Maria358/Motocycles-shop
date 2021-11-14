import { opensheet } from '../common/config.js';

export default class Model {
    sheetData = async () => {
        try {
            const response = await fetch(opensheet);
            this.data = await response.json();
            return this.data;
        } catch (e) {
            console.log(e.message);
        }
    };
    searchByID = (input) => {
        const filtered = this.data.filter(obj => {
            return obj.ID.includes(input);
        });
        return filtered;
    }
}