export default class BasketView {
    dom = {
        addBtn: document.querySelector('.basket')
    }

    constructor(onBasket) {
        this.dom.addBtn.addEventListener('click', onBasket);
    }

    render(data) {
        console.log('render basket')
        return `Some motos`
    }
}