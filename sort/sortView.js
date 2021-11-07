export default class MotocycleView {
    dom = {
        options: document.querySelectorAll('.dropdown-item')
    };

    constructor(onClick) {
        this.dom.options.forEach(option => option.addEventListener('click', (event) => {
            console.log('s', event.target.textContent)
            onClick();
        }));
    };
}