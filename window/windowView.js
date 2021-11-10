import View from './../common/view.js';
import motoRender from './motoRender.js';

export default class WindowView extends View {
  dom = {
    modal: document.querySelector('.modal')
  };

  constructor() {
    super();
  }

  dltModalContainer() {
    document.querySelector('.close').addEventListener('click', () => {
      document.querySelector('.modal-content').remove();
      this.dom.modal.style.display = 'none';
    });
  }

  render(data) {
    this.dom.modal.style.display = 'block';

    const listHTML = motoRender(data);

    this.dom.modal.insertAdjacentHTML('beforeend', listHTML);
    this.dltModalContainer();
  }
}