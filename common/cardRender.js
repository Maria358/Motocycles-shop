export default function cardRender(data) {

  function shortDescription(str) {
    return `${str.slice(0, 100)}...`;
  }

  return `<div class="card" style="width: 15rem;">
            <div class="card-img">
                <img src=${data.Image} class="card-img-top" alt="...">
                <p class="card-price">$${data.Price}</p>
            </div>
            <div class="card-body">
              <h5 class="card-title">${data.Brand} ${data.Model}</h5>
              <p class="type-card">Type: ${data['Type of moto']} | Year of issue: ${data['Year of issue']}</p>
              <p class="card-text">${shortDescription(data.Description)}</p>
              <a href="#" class="btn btn-primary open">Open</a>
            </div>
          </div>`;
}
