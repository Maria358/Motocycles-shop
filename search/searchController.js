import SearchModel from './searchModel.js';
import SearchView from './searchView.js';
import Observer from './../common/observer.js';


export default class SearchController {
    constructor() {
        this.view = new SearchView();
        this.model = new SearchModel();
        Observer.subscribe(Observer.events.onSearchByName, this.onInput);
    }

    onInput = async () => {
        const { inputVal } = this.view.getNeedVal();
        const filtered = await this.model.search(inputVal);
        this.view.render(filtered);
    }

}