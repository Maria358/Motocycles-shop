import View from './../common/view.js';
import { testMSG } from '../common/textMessage.js';

export default class BasketView extends View {
    dom = {
        addBtn: document.querySelector('.basket'),
        modal: document.querySelector('.modal-basket'),
        counter: document.getElementById('counterItem'),
        counterContainer: document.querySelector('.counter')
    };

    constructor(onBasket, onAddOrder, onRemainingProducts) {
        super();
        this.testMSG = testMSG;
        this.onAddOrder = onAddOrder;
        this.onRemainingProducts = onRemainingProducts;
        this.dom.addBtn.addEventListener('click', onBasket);
    }

    removeModal = () => {
        document.querySelector('.modal-content').remove();
        this.dom.modal.style.display = 'none';
    };

    countItem = (count) => {
        if (count !== 0) {
            this.dom.counterContainer.style.display = 'block';
            this.dom.counter.textContent = count;
        } else {
            this.removeModal()
        }
    };

    render(data) {
        this.dom.modal.style.display = 'block';
        const basketItem = data.map((item) => this.basketItemRender(item));

        this.insertHTML(basketItem, this.dom.modal);

        document.querySelector('.close').addEventListener('click', () => {
            this.removeModal();
        });

        document.querySelector('.delete').addEventListener('click', (e) => {
            this.onRemainingProducts(e.target.id)
        })

        //!! запуск бота
        const order = document.querySelector('.order');
        this.doMsg(data, order);
    }

    basketItemRender = (data) => {
        return `<div class="modal-content">     
      <div class="modal-body">
      <i class="far fa-times-circle close"></i>
        <h5>${data.Brand} ${data.Model}</h5> 
        <p>$${data.Price}</p>
        <img src=${data.Image} alt="..." width="100" height="50">    
      </div>   
      <div class="modal-footer">          
      <div class="window-btn-container">
      <button type="button" id=${data.ID} class="order btn btn-primary">Order</button>
      <button type="button" id=${data.ID} class="delete btn btn-primary">Delete</button>
      </div>
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
