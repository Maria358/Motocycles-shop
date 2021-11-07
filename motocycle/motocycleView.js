export default class MotocycleView {
    dom = {
        cartBox: document.querySelector('.cart-box'),
        options: document.querySelectorAll('.dropdown-item'),
        selectVal: document.querySelector('.selectVal'),
        formControl: document.querySelector('.form-control')
    };

    constructor(onSelect, onInput) {
        this.dom.options.forEach(option => option.addEventListener('click', (e) => {
            this.dom.selectVal.textContent = e.target.textContent;
            this.hideEl();
            onSelect();
        }));
        this.dom.formControl.addEventListener('input', () => {
            this.hideEl();
            onInput();
        })
    };

    getSelectedVal = () => this.dom.selectVal.textContent;

    getInputVal = () => this.dom.formControl.value;

    hideEl() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => card.style.display = 'none');
    };

    render = (data) => {
        this.listHTML = data.map((el) => {
            return `
        <div class="card" style="width: 25rem;">
        <div class="card-img"><img src=${el.Image} class="card-img-top" alt="img"></div>
        <div class="card-body">
          <h5 class="card-title">${el.Brand} ${el.Model}</h5>
          <p class="card-text">${this.shortDescription(el.Description)}</p>
          <a href="#" class="btn btn-outline-primary">Open</a>
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