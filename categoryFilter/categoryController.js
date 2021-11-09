import CategoryView from './categoryView.js';
import Observer from './../common/observer.js';

export default class CategoryController {
    constructor() {
        this.view = new CategoryView(this.onClickByCategory);
    }

    onClickByCategory = (event) => {
        const value = event.target.textContent;
        Observer.notify(Observer.events.onCategoryFilter, value);
    };
}
