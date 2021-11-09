import MotocycleModel from './motocycleModel.js';
import MotocycleView from './motocycleView.js';
import Observer from './../common/observer.js';

export default class MotocycleController {
    constructor() {
        this.view = new MotocycleView();
        this.model = new MotocycleModel();
        Observer.subscribe(Observer.events.onCategoryFilter, this.onfilterBy)
    }

    init = async () => {
        this.view.render(await this.model.getData());
    }


    onfilterBy = (value) => {
        const filtered = this.model.filterBy(value);
        this.view.render(filtered);
    }
}