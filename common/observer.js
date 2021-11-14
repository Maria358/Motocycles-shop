export default class Observer {
    static listeners = {};

    static subscribe(name, listener) {
        if (!this.listeners[name]) {
            this.listeners[name] = [];
        }

        this.listeners[name].push(listener);
    }

    static unsubscribe() {

    }

    static notify(name, data) {
        if (!this.listeners[name]) {
            this.listeners[name] = [];
        }

        this.listeners[name].forEach(fn => fn(data));
    }

    static events = {
        onSearchByName: 'SEARCH BY NAME',
        onCategoryFilter: 'PRODUCT TYPE',
        onOpen: 'OPEN MOTO DATA',
        onSort: 'SORT DATA BY',
        onAddToBskt: 'ADD MOTO TO BASKET',
        getAddedMoto: 'GET ADDED MOTO',
        sendMsgToTG: 'SEND MESSAGE TO TELEGRAM',
        onOrder: 'TRABSFER DATA TO HISTORY',
    }
}