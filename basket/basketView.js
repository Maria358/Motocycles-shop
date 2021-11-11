import View from './../common/view.js';
import { testMSG } from '../common/textMessage.js';

export default class BasketView extends View {
    dom = {
        addBtn: document.querySelector('.basket'),
        modal: document.querySelector('.modal-basket')
    };

    constructor(onBasket, onAddOrder) {
        super();
        this.testMSG = testMSG;
        this.onAddOrder = onAddOrder;
        this.dom.addBtn.addEventListener('click', onBasket);
    }

    removeModal = () => {
        document.querySelector('.modal-content').remove();
        this.dom.modal.style.display = 'none';
    };

    render(data) {
        this.dom.modal.style.display = 'block';
        const basketItem = data.map((item) => this.basketItemRender(item));
        this.insertHTML(basketItem, this.dom.modal);

        document.querySelector('.close').addEventListener('click', () => {
            this.removeModal();
        });


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
      <button type="button" id=${data.ID} class="btn btn-primary">Delete</button>
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
}
