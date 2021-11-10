import MotocycleModel from './motocycleModel.js';
import MotocycleView from './motocycleView.js';
import Observer from './../common/observer.js';

export default class MotocycleController {
    constructor() {
        this.view = new MotocycleView(this.onSelectSort, this.onOpen);
        this.model = new MotocycleModel();
        Observer.subscribe(Observer.events.onCategoryFilter, this.onfilterBy);
        Observer.subscribe(Observer.events.onSearchByName, this.onInput);
    }

    init = async () => {
        this.view.render(await this.model.getData());
    };

    onSelectSort = async () => {
        const { sortVal } = this.view.getNeedVal();
        const sorted = await this.model.sort(sortVal);
        this.view.render(sorted);
    };

    onInput = (input) => {
        const filtered = this.model.search(input);
        this.view.render(filtered);
    };

    onfilterBy = (value) => {
        const filtered = this.model.filterBy(value);
        this.view.render(filtered);
    }

    onOpen = (moto) => {
        Observer.notify(Observer.events.onOpen, moto)
    }
}
