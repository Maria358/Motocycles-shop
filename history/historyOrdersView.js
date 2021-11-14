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
        const historyItem = data.map(data => this.cardRender(data));
        this.insertHTML(historyItem, this.dom.historyBody);

        this.dom.close.addEventListener('click', () => {
            console.log('close')
            this.changeCondModal('none');
        });
    }
}