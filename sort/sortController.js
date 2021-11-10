import SortView from './sortView.js';
import Observer from './../common/observer.js';


export default class SortController {
    constructor() {
        this.view = new SortView(this.onSort);
    }

    onSort = () => {
        const { sortVal } = this.view.getNeedVal();
        Observer.notify(Observer.events.onSort, sortVal);
    }
}