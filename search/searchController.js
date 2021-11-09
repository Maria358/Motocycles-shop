import SearchView from './searchView.js';
import Observer from './../common/observer.js';


export default class SearchController {
    constructor() {
        this.view = new SearchView(this.onSearchByName);
    }

    onSearchByName = () => {
        const { inputVal } = this.view.getNeedVal();
        Observer.notify(Observer.events.onSearchByName, inputVal);
    }
}