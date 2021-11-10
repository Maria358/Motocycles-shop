import WindowView from './windowView.js';
import Observer from './../common/observer.js';
import WindowModel from './windowModel.js';

export default class windowController {
    constructor() {
        this.view = new WindowView(this.onOpen);
        this.model = new WindowModel();
        Observer.subscribe(Observer.events.onOpen, this.onOpen);
    }

    onOpen = (moto) => {
        const motoData = this.model.getCertainMoto(moto);
        this.view.render(motoData);
    }
}