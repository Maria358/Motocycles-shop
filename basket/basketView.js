import View from './../common/view.js';
import { testMSG } from '../common/textMessage.js';

export default class BasketView extends View {
    dom = {
        addBtn: document.querySelector('.basket'),
        modalBody: document.querySelector('.modal-body2'),
        modalContainer: document.querySelector('.modal-basket'),
        counter: document.getElementById('counterItem'),
        counterContainer: document.querySelector('.counter'),
        closeBasketBtn: document.querySelector('.closeBsktModal')
    }


    constructor(onBasket, onAddOrder, onRemainingProducts) {
        super();
        this.testMSG = testMSG;
        this.onAddOrder = onAddOrder;
        this.onRemainingProducts = onRemainingProducts;
        this.dom.addBtn.addEventListener('click', onBasket);
        this.dom.closeBasketBtn.addEventListener('click', () => {
            this.removeModal();
        });
    }

    removeModal = () => {
        document.querySelector('.modal-content2').remove();
        this.dom.modalContainer.style.display = 'none';
    };

    countItem = (count) => {
        if (count !== 0) {
            this.dom.counterContainer.style.display = 'block';
            this.dom.counter.textContent = count;
        } else {
            this.dom.counterContainer.style.display = 'none';
            this.dom.modal.style.display = 'none';
        }
    };

    render(data) {
        this.dom.modalContainer.style.display = 'block';
        const basketItem = data.map((item) => this.basketItemRender(item));
        const del = document.querySelectorAll('.delete');

        for (const item of del) {
            item.addEventListener('click', (e) => {
                this.onRemainingProducts(e.target.id);
            });
        }

        this.insertHTML(basketItem, this.dom.modalBody);

        //!! запуск бота
        const order = document.querySelector('.order');
        this.doMsg(data, order);
    }

    basketItemRender = (data) => {
        return `
        <div>
        <div>
           <h5>${data.Brand} ${data.Model}</h5> 
           <p>$${data.Price}</p>
           <img src=${data.Image} alt="..." width="100" height="50">    
      </div>           
      <div class="window-btn-container">
         <button type="button" id=${data.ID} class="order btn btn-primary">Order</button>
         <button type="button" id=${data.ID} class="delete btn btn-primary">Delete</button>
      </div>
      </div>`;
    };

    //!! метод для бота (нужно будет добавить его на кнопку формы)
    doMsg = (data, selector) => {
        selector.addEventListener('click', () => {
            const textMessage = this.testMSG(data[0].Brand, data[0].Model);
            this.removeModal();
            this.onAddOrder(textMessage);
        });
    };

    delProduct = (productList) => {
        const basketItem = productList.map((item) => this.basketItemRender(item));
        this.insertHTML(basketItem, this.dom.modal);
    };
}
