import View from './../common/view.js';
import motoRender from './motoRender.js';

export default class WindowView extends View {
  dom = {
    modal: document.querySelector('.modal'),
    addBtn: document.querySelector('.addToBskt')
  };

  constructor(onAdd) {
    super();
    this.onAdd = onAdd;
  }

  dltModalContainer() {
    document.querySelector('.addToBskt').addEventListener('click', (event) => {
      this.removeModal();
      this.onAdd(event.target.getAttribute('id'));
    });

    document.querySelector('.close').addEventListener('click', () => {
      this.removeModal();
    });
  }

  removeModal = () => {
    document.querySelector('.modal-content').remove();
    this.dom.modal.style.display = 'none';
  }

  render(data) {
    this.dom.modal.style.display = 'block';

    const listHTML = motoRender(data);

    this.dom.modal.insertAdjacentHTML('beforeend', listHTML);
    this.dltModalContainer();
  }
}