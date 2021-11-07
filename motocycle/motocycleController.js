import MotocycleModel from './motocycleModel.js';
import MotocycleView from './motocycleView.js';

export default class MotocycleController {
    constructor() {
        this.view = new MotocycleView(this.onSelect, this.onInput);
        this.model = new MotocycleModel();
    }

    getData = async () => {
        this.data = await this.model.sheetData();
        return this.data;
    }

    init = async () => {
        this.view.render(await this.getData());
    }

    onSelect = async () => {
        const selectVal = this.view.getSelectedVal();
        const sorted = this.model.sort(await this.getData(), selectVal);
        this.view.render(sorted);
    }

    onInput = async () => {
        const inputVal = this.view.getInputVal();
        const filtered = this.model.search(await this.getData(), inputVal);
        this.view.render(filtered);
    }
}