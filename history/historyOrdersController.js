import HistoryOrdersModel from './historyOrdersModel.js';
import HistoryOrdersView from './historyOrdersView.js';

export default class HistoryOrdersController {
    constructor() {
        this.model = new HistoryOrdersModel();
        this.view = new HistoryOrdersView(this.onHistory);
    }

    onHistory = () => {
        const data = this.model.getOrderFromLocal();
        if (data) {
            this.view.render(data);
        } else {
            alert('You haven`t bought anything yet!')
        }

    }



}