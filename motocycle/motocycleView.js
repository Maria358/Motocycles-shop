import View from '../common/view.js';
import cardRender from '../common/cardRender.js';

export default class MotocycleView extends View {
    dom = {
        cartBox: document.querySelector('.cart-box'),
        openBtns: document.querySelectorAll('.open'),
        pagination: document.querySelector('.pagination')
    };

    constructor(onOpen) {
        super();
        this.onOpen = onOpen;
    }

    render(data) {
        const listHTML = data.map((el) => cardRender(el));
        this.insertHTML(listHTML, this.dom.cartBox);
        document.querySelectorAll('.open').forEach((btn) =>
            btn.addEventListener('click', (event) => {
                const moto = event.path[1].querySelector('.card-title').textContent;
                this.onOpen(moto);
            })
        );
    }

    pagination = (data) => {
        let notesOnPage = 9;
        let countOfItems = Math.ceil(data.length / notesOnPage);
        let paginationItems = [];

        for (let i = 1; i <= countOfItems; i++) {
            paginationItems.push(this.linkHTML(i));
        }

        this.insertHTML(paginationItems, this.dom.pagination);
        const lis = document.querySelectorAll('.pagination li');

        this.render(this.showPagePgination(data, lis[0], notesOnPage));
        lis.forEach((el) => el.addEventListener('click', () => this.render(this.showPagePgination(data, el, notesOnPage))));
    };


    linkHTML = (i) => {
        return `<li class="page-item"><a class="page-link" href="#">${i}</a></li>`;
    };

    paginationRender(data) {
        this.pagination(data);
    }
}
