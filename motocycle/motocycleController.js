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
        this.view.paginationRender(await this.model.getData());
    };

    onSelectSort = async () => {
        const { sortVal } = this.view.getNeedVal();
        const sorted = await this.model.sort(sortVal);
        this.view.paginationRender(sorted);
    };

    onInput = (input) => {
        const filtered = this.model.search(input);
        this.view.paginationRender(filtered);
    };

    onfilterBy = (value) => {
        const filtered = this.model.filterBy(value);
        this.view.paginationRender(filtered);
    }

    onOpen = (moto) => {
        Observer.notify(Observer.events.onOpen, moto)
    }
}
