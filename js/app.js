// model
// const url = 'https://opensheet.vercel.app/1r52WWS8-y-hs0PPChtHj_XZgkSPconZCokamfzBS-rY/data';

// view
// const cartBox = document.querySelector('.cart-box');

//controller
// sheetData(url);

//model
// async function sheetData(url) {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         //view
//         const listHTML = data.map((el) => {
//             return `
//             <div class="card" style="width: 15rem;">
//             <div class="card-img"><img src=${el.Image} class="card-img-top" alt="..."></div>
//             <div class="card-body">
//               <h5 class="card-title">${el.Brand} ${el.Model}</h5>
//               <p class="card-text">${shortDescription(el.Description)}</p>
//               <a href="#" class="btn btn-primary">Open</a>
//             </div>
//           </div>
//             `;
//         });
//         //view
//         for (const item of listHTML) {
//             cartBox.insertAdjacentHTML('beforeend', item);
//         }
//     } catch (e) {
//         console.log(e.message);
//     }
// }
//model
// function shortDescription(str) {
//     return `${str.slice(0, 100)}...`;
// }
