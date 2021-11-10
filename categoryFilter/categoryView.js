export default class CategoryView {
    dom = {
        filterVal: document.querySelector('.filterVal')
    }

    constructor(onClickByCategory) {
        this.types = document.querySelectorAll('.type');
        this.types.forEach(el => el.addEventListener('click', onClickByCategory));
    }


}