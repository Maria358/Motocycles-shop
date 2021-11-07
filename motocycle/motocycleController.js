import MotocycleModel from './motocycleModel.js';
import MotocycleView from './motocycleView.js';

export default class MotocycleController {
    constructor() {
        this.view = new MotocycleView(this.onSelectSort, this.onInput, this.onSelectFilter);
        this.model = new MotocycleModel();
    }

    getData = async () => {
        this.data = await this.model.sheetData();
        return this.data;
    }

    init = async () => {
        this.view.render(await this.getData());
    }

    onSelectSort = async () => {
        const { sortVal } = this.view.getNeedVal();
        const sorted = this.model.sort(await this.getData(), sortVal);
        this.view.render(sorted);
    }

    onInput = async () => {
        const { inputVal } = this.view.getNeedVal();
        const filtered = this.model.search(await this.getData(), inputVal);
        this.view.render(filtered);
    }

    onSelectFilter = async () => {
        const { filterVal } = this.view.getNeedVal();
        const filtered = this.model.filterBy(await this.getData(), filterVal);
        this.view.render(filtered);
    }
}