import WindowView from './windowView.js';
import Observer from './../common/observer.js';
import WindowModel from './windowModel.js';

export default class WindowController {
    constructor() {
        this.view = new WindowView(this.onAdd);
        this.model = new WindowModel();
        Observer.subscribe(Observer.events.onOpen, this.onOpen);
    }

    onOpen = (moto) => {
        const motoData = this.model.getCertainMoto(moto);
        this.view.render(motoData);
    }

    onAdd = (event) => {
        const choosenMoto = event; // получили мотоцикл на который нажали
        Observer.notify(Observer.events.onAddToBskt, choosenMoto);
    }
}