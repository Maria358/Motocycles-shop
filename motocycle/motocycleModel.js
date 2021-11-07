import { opensheet } from '../common/config.js';

export default class MotocycleModel {
    sheetData = async () => {
        try {
            const response = await fetch(opensheet);
            this.data = await response.json();
            return this.data;
        } catch (e) {
            console.log(e.message);
        }
    };

    sort = (data, option) => {
        const sorted = data.sort((a, b) => {
            if (a[option] !== b[option]) {
                return a[option] - b[option];
            };
        });
        return sorted;
    }

    search = (data, input) => {
        const filtered = data.filter(obj => {
            return obj.Brand.includes(input);
        });
        return filtered;
    }
}