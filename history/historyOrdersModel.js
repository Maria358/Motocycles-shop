export default class HistoryOrdersModel {
    constructor() {
        this.localOrdersKey = 'localOrders';
    }
    getOrderFromLocal = () => {
        const order = JSON.parse(localStorage.getItem(this.localOrdersKey));
        return order;
    }
}