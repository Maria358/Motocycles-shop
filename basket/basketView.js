import View from './../common/view.js';

export default class BasketView extends View {
    domStr = [
        { name: 'addBtn', selector: '.basket' },
        { name: 'modalBody', selector: '.modal-body2' },
        { name: 'modalContainer', selector: '.modal-basket' },
        { name: 'counterContainer', selector: '.counter' },
        { name: 'closeBasketBtn', selector: '.closeBsktModal' },
        { name: 'modalContent', selector: '.modal-content2' },
        { name: 'counter', selector: '#counterItem' },
        { name: 'form', selector: '.form' },
        { name: 'formBtn', selector: '.form-order-btn' },
        { name: 'username', selector: '.username' },
        { name: 'useremail', selector: '.useremail' },
        { name: 'footer', selector: '.mdl-footer' }
    ];

    constructor(
        onBasket,
        onAddOrder,
        onRemainingProducts,
        receiveAmout,
        sortInBasket,
        changeBasketCount,
        checkUsername,
        checkUserEmail
    ) {
        super();
        this.linkDOMElements();

        this.onAddOrder = onAddOrder;
        this.onRemainingProducts = onRemainingProducts;
        this.sortInBasket = sortInBasket;
        this.receiveAmout = receiveAmout;
        this.checkUsername = checkUsername;
        this.checkUserEmail = checkUserEmail;
        this.changeBasketCount = changeBasketCount;

        this.dom.addBtn.addEventListener('click', onBasket);
        this.dom.closeBasketBtn.addEventListener('click', () => {
            this.changeCondModal('none');
            this.dom.form.style.display = 'none';
        });
    }

    changeCondModal = (condition) => {
        this.dom.modalContent.style.display = `${condition}`;
        this.dom.modalContainer.style.display = `${condition}`;
    };

    countItem = (count) => {
        if (count !== 0) {
            this.dom.counterContainer.style.display = 'block';
            this.dom.counter.textContent = count;
        } else {
            this.dom.counterContainer.style.display = 'none';
            this.dom.modalContainer.style.display = 'none';
        }
    };

    render(data) {
        if (data.length == 0) return;

        this.changeCondModal('block');

        this.baseRender(data);

        document.querySelectorAll(`.delete`).forEach((btn) =>
            btn.addEventListener('click', (event) => {
                const id = event.target.id.slice(0, event.target.id.length - 1);
                this.onRemainingProducts(id);
            })
        );

        document.querySelectorAll(`.order`).forEach((btn) =>
            btn.addEventListener('click', (event) => {
                
                this.baseRender(this.sortInBasket(data, event.target.id));
                this.dom.footer.style.display = 'none';
                document.querySelector(`.window-btn-container`).style.display = 'none';
                this.dom.form.style.display = 'block';

                this.dom.formBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.onAddOrder(event.target.id, this.dom.username.value);
                    this.dom.form.style.display = 'none';
                    this.dom.username.value = '';
                    this.dom.useremail.value = '';
                    this.onRemainingProducts(event.target.id);
                    this.changeCondModal('none');
                });
            })
        );

        this.dom.username.addEventListener('blur', () => {
            this.checkValid(this.dom.username, this.checkUsername);
        });

        this.dom.useremail.addEventListener('blur', () => {
            this.checkValid(this.dom.useremail, this.checkUserEmail);

            if (this.checkUsername(this.dom.username) && this.checkUserEmail(this.dom.useremail)) {
                this.dom.formBtn.removeAttribute('disabled');
            }
        });

        document.getElementById('total-amount').textContent = `${this.receiveAmout()}$`;
    }

    basketItemRender = (data) => {
        return `<div class="cart-item">
                  <div class="item-details">
                  <img src=${data.Image} alt="..." class="item-image"> 
                       <div class="cart-item-data">
                          <h4 class="cart-item-name">${data.Brand} ${data.Model}</h4>
                          <p class="cart-item-price">Price: $${data.Price}</p>
                       </div>
                </div>           
                <div class="window-btn-container">
                       <button type="button" id=${data.ID} class="order btn btn-primary">Order</button>
                       <button type="button" id="${data.ID}d" class="delete btn btn-danger">Delete</button>
                </div>
            </div>`;
    };

    baseRender = (data) => {
        const basketItem = data.map((item) => this.basketItemRender(item));
        this.insertHTML(basketItem, this.dom.modalBody);
    };

    checkValid = (selector, method) => {
        if (method(selector)) {
            selector.parentElement.className = 'form-control success';
        } else {
            selector.parentElement.className = 'form-control error';
        }
    };
}
