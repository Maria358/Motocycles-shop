import View from '../common/view.js';
import cardRender from '../common/cardRender.js';

export default class MotocycleView extends View {
    dom = {
        cartBox: document.querySelector('.cart-box'),
        openBtns: document.querySelectorAll('.open')
    };

    constructor(onOpen) {
        super();
        this.onOpen = onOpen;
    };

    render(data) {
        const listHTML = data.map((el) => cardRender(el));
        this.insertHTML(listHTML, this.dom.cartBox);

        document.querySelectorAll('.open').forEach(btn => btn.addEventListener('click', (event) => {
            const moto = event.path[1].querySelector('.card-title').textContent;
            console.log('moto', moto)
            this.onOpen(moto);
        }))
    }
}