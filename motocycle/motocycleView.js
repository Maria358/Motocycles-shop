export default class MotocycleView {
    dom = {
        cartBox: document.querySelector('.cart-box')
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
    }
    shortDescription = (str) => {
        return `${str.slice(0, 100)}...`;
    }
    insertHTML = (list) => {
        for (const item of list) {
            this.dom.cartBox.insertAdjacentHTML('beforeend', item);
        }
    }
}