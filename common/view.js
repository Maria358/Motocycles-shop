export default class View {
    insertHTML = (list, selector) => {
        selector.innerHTML = '';
        list.forEach((element) => selector.insertAdjacentHTML('beforeend', element));
    };

    showPagePgination(data, collection, num) {
        return data.slice((+collection.textContent - 1) * num, ((+collection.textContent - 1) * num) + num);
    };

    linkDOMElements = () => {
        this.dom = this.domStr.reduce((acc, { name, selector }) => {
            acc[name] = document.querySelector(selector);
            return acc;
        }, {});
    }
}
