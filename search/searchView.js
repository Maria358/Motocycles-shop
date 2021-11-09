export default class SearchView {
    dom = {
        inputVal: document.querySelector('.form-control')
    };

    constructor(onSearchByName) {
        this.dom.inputVal.addEventListener('input', onSearchByName);
    }

    getNeedVal = () => ({
        inputVal: this.dom.inputVal.value
    })
}