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
    };

    cardRender = (data) => {
        return `<div class="cart-item">
        <div class="item-details">
          <img src=${data.Image} alt="..." class="item-image">    
             <div class="cart-item-data">
                <h4 class="cart-item-name">${data.Brand} ${data.Model}</h4>
                <p class="cart-item-price">Price: $${data.Price}</p>
             </div>
      </div>           
      <div class="window-btn-container">
             <button type="button" id=${data.ID} class="order btn btn-primary">Order</button>
             <button type="button" id="${data.ID}d" class="delete btn btn-danger">Delete</button>
      </div>
  </div>`
    }
}
