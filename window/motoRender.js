export default function motoRender(data) {
  return ` <div class="modal-content">
    <div class="modal-header">
      <p>${data[0].Brand} ${data[0].Model}</p>
      <i class="far fa-times-circle close"></i>
    </div>      
    <div class="modal-body">
    <img src=${data[0].Image}  width="500" height="400" alt="..." class="window-photo">
      <p>Type of moto: ${data[0]['Type of moto']}</p>
      <p>${data[0].Description}</p>
      <p>Capacity: ${data[0].Capacity}</p>
      <p>Qty: ${data[0].Qty}</p>
      <p>Tank volume: ${data[0]['Tank volume']}</p>
      <p>Type of refrigeration: ${data[0]['Type of refrigeration']}</p>
      <p>Year of issue: ${data[0]['Year of issue']}</p>
      <p>Price: ${data[0]['Price']}$</p>       
    </div>   
    <div class="modal-footer">      
    <a class="icons"><i class="fab fa-instagram"></i></a>
    <a class="icons"><i class="fab fa-telegram-plane"></i></a>
    <a class="icons"><i class="fab fa-whatsapp"></i></a>       
    <div class="window-btn-container">
    <button type="button" id=${data[0].ID} class="btn btn-primary addToBskt">Add to basket</button>
    </div>
    </div>
  </div>`;
}
