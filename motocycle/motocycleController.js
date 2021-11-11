import MotocycleModel from './motocycleModel.js';
import MotocycleView from './motocycleView.js';
import Observer from './../common/observer.js';

export default class MotocycleController {
    constructor() {
        this.view = new MotocycleView(this.onOpen);
        this.model = new MotocycleModel();
        Observer.subscribe(Observer.events.onCategoryFilter, this.onfilterBy);
        Observer.subscribe(Observer.events.onSearchByName, this.onInput);
        Observer.subscribe(Observer.events.onSort, this.onSelectSort);
    }

    init = async () => {
        this.view.paginationRender(await this.model.getData());
    };


    onSelectSort = (sortVal) => {
        const sorted = this.model.sort(sortVal);
        this.view.paginationRender(sorted);
    };

    onInput = (input) => {
        const filtered = this.model.search(input);
        this.view.paginationRender(filtered);
    };

    onfilterBy = async (value) => {
        if(value == 'All Category'){
            this.view.paginationRender(await this.model.getData());
        } else {
            const filtered = await this.model.filterBy(value);
            this.view.paginationRender(filtered);
        }
    }

    onOpen = (moto) => {
        Observer.notify(Observer.events.onOpen, moto)
    }

}
