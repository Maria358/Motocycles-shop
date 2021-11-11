export default class SortView {
    dom = {
        sortBy: document.querySelectorAll('.sortby'),
        sortVal: document.querySelector('.sortVal')
    };

    constructor(onSelectSort) {
        this.giveAction(this.dom.sortBy, this.dom.sortVal, onSelectSort);
    }

    giveAction(collection, element, handler) {
        collection.forEach(option => option.addEventListener('click', event => {
            element.textContent = event.target.textContent;
            handler();
        }));
    }

    getNeedVal = () => ({
        sortVal: this.dom.sortVal.textContent
    })
}