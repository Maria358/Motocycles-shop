import MotocycleModel from './motocycleModel.js';
import MotocycleView from './motocycleView.js';
import Observer from './../common/observer.js';

export default class MotocycleController {
    constructor() {
        this.view = new MotocycleView(this.onSelectSort, this.onInput, this.onSelectFilter);
        this.model = new MotocycleModel();
    }

    init = async () => {
        this.view.render(await this.model.getData());
    }

    onSelectSort = async () => {
        const { sortVal } = this.view.getNeedVal();
        const sorted = await this.model.sort(sortVal);
        this.view.render(sorted);
    }

    onSelectFilter = async () => {
        const { filterVal } = this.view.getNeedVal();
        const filtered = await this.model.filterBy(filterVal);
        this.view.render(filtered);
    }

    onInput = () => {
        const { inputVal } = this.view.getNeedVal();
        Observer.notify(Observer.events.onSearchByName, inputVal);
    }
}