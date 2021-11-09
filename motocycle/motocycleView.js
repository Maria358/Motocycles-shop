import View from '../common/view.js';
import cardRender from '../common/cardRender.js';

export default class MotocycleView extends View {
    dom = {
        cartBox: document.querySelector('.cart-box')
    };

    constructor() {
        super();
    }

    render(data) {
        const listHTML = data.map((el) => cardRender(el));
        this.insertHTML(listHTML, this.dom.cartBox);
    }
}
