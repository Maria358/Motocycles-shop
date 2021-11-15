import View from './../common/view.js';

export default class HistoryOrdersView extends View {
    dom = {
        historyBtn: document.querySelector('.history'),
        historyBody: document.getElementById('history-body'),
        historyModal: document.querySelector('.history-modal-container'),
        modalHistory: document.querySelector('.modal-history'),
        close: document.getElementById('close-history')
    }

    constructor(onHistory) {
        super();
        this.dom.historyBtn.addEventListener('click', () => {
            onHistory();
        });
    }

    changeCondModal = (condition) => {
        this.dom.historyModal.style.display = `${condition}`;
    }

    render(data) {
        this.changeCondModal('block');
        this.dom.modalHistory.style.display = 'block'

        const historyItem = data.map(data => this.historyItemRender(data));

        this.insertHTML(historyItem, this.dom.historyBody);

        this.dom.close.addEventListener('click', () => {
            this.changeCondModal('none');
        });
    }

    historyItemRender = (data) => {
        return `<div class="cart-item">
        <div class="item-details">
          <img src=${data.Image} alt="..." class="item-image">    
             <div class="cart-item-data">
                <h4 class="cart-item-name">${data.Brand} ${data.Model}</h4>
                <p class="cart-item-price">Price: $${data.Price}</p>
             </div>
      </div>           
  </div>`
    }
}