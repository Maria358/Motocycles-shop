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

    // render = (data) => {
    //     const listHTML = data.map((el) => {
    //         return `
    //         <div class="card" style="width: 15rem;">
    //         <div class="card-img">
    //             <img src=${el.Image} class="card-img-top" alt="...">
    //             <p class="card-price">$${el.Price}</p>
    //         </div>
    //         <div class="card-body">
    //           <h5 class="card-title">${el.Brand} ${el.Model}</h5>
    //           <p class="type">${el['Type of moto']}</p>
    //           <p class="card-text">${this.shortDescription(el.Description)}</p>
    //           <a href="#" class="btn btn-primary">Open</a>
    //         </div>
    //       </div>
    //     `;
    //     });
    //     this.insertHTML(listHTML, this.dom.cartBox);
    // };
}
