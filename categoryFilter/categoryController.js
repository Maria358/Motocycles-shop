import CategoryView from './categoryView.js';
import Observer from './../common/observer.js';

export default class CategoryController {
    constructor() {
        this.view = new CategoryView(this.onClickByCategory);
    }

    onClickByCategory = () => {
        const value = this.view.getNeedVal();
        Observer.notify(Observer.events.onCategoryFilter, value);
    };
}
