export default class MotocycleView {
    dom = {
        cartBox: document.querySelector('.cart-box'),
        sortBy: document.querySelectorAll('.sortby'),
        sortVal: document.querySelector('.sortVal')
    };

    constructor(onSelectSort) {
        this.giveAction(this.dom.sortBy, this.dom.sortVal, onSelectSort);
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

    render = (data) => {
        this.hideEl();
        this.listHTML = data.map((el) => {
            return `
            <div class="card" style="width: 15rem;">
            <div class="card-img">
                <img src=${el.Image} class="card-img-top" alt="...">
                <p class="card-price">$${el.Price}</p>
            </div>
            <div class="card-body">
              <h5 class="card-title">${el.Brand} ${el.Model}</h5>
              <p class="type">${el['Type of moto']}</p>
              <p class="card-text">${this.shortDescription(el.Description)}</p>
              <a href="#" class="btn btn-primary">Open</a>
            </div>
          </div>
        `;
        });
        this.insertHTML(this.listHTML);
    };

    shortDescription = (str) => {
        return `${str.slice(0, 100)}...`;
    };

    insertHTML = (list) => {
        for (const item of list) {
            this.dom.cartBox.insertAdjacentHTML('beforeend', item);
        }
    };
}