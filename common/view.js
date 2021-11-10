export default class View {
    insertHTML = (list, selector) => {
        selector.innerHTML = '';
        list.forEach((element) => selector.insertAdjacentHTML('beforeend', element));
    };

}
