import View from '../common/view.js';
import cardRender from '../common/cardRender.js';

export default class MotocycleView extends View {
    dom = {
        cartBox: document.querySelector('.cart-box'),
        sortBy: document.querySelectorAll('.sortby'),
        sortVal: document.querySelector('.sortVal'),
        openBtns: document.querySelectorAll('.open'),
        paginationItems: document.querySelectorAll('.pagination .page-link')
    };

    constructor(onSelectSort, onOpen) {
        super();
        this.onOpen = onOpen;
        this.giveAction(this.dom.sortBy, this.dom.sortVal, onSelectSort);
        this.pagination(this.dom.paginationItems)
    };

    giveAction(collection, element, handler) {
        collection.forEach(option => option.addEventListener('click', event => {
            element.textContent = event.target.textContent;
            this.hideEl();
            handler();
        }));
    }

    getNeedVal = () => ({
        sortVal: this.dom.sortVal.textContent
    })

    hideEl() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => card.style.display = 'none');
    };

    pagination = (data, selector) => {
        const notesOnPage = 6;
        for (const el of selector) {
            el.addEventListener('click', () => {
                let pageNum = +el.textContent
                let start = (pageNum - 1) * notesOnPage
                let end = start + notesOnPage;
                let notes = data.slice(start, end)
                console.log(notes)
            })
        }
    }


    render(data) {
        const listHTML = data.map((el) => cardRender(el));
        this.insertHTML(listHTML, this.dom.cartBox);
        document.querySelectorAll('.open').forEach(btn => btn.addEventListener('click', (event) => {
            const moto = event.path[1].querySelector('.card-title').textContent;
            this.onOpen(moto);
        }))        
    }
}