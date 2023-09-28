import { giveActualPrice } from "./helpers.js";
import { productListRender, initialPageValues } from "./renders.js";

let cartProducts;
let superMarkets;
let superMarketProducts;
let productRenderCheck = {
  heb: false,
  walmart: false,
  soriana: false,
  laComer: false,
  ley: false,
  costco: false,
  bodegaAurrera: false,
  sams: false,
  chedrau: false,
};
// Query selectors
const column1 = document.querySelector(".column__1");
const productsList1 = document.querySelector(".products__li__1");

const displayCart = function (btn, i, list) {
  superMarketProducts[superMarkets[i]].cartProducts.forEach((product) => {
    product.cart = true;
  });

  initialPageValues(superMarkets[i]);
  productRenderCheck[superMarkets[i]] = true;
  console.log(superMarketProducts[superMarkets[i]].cartProducts);
  productListRender(
    list,
    superMarketProducts[superMarkets[i]].cartProducts,
    false
  );
  let prevPageBtn = document.querySelector(`#${superMarkets[i]}__prev`);
  let btnContainer = document.querySelector(
    `#${superMarkets[i]}__btn__container`
  );
  btnContainer.classList.remove("invisible");
  prevPageBtn.classList.add("invisible");
  // column.insertAdjacentHTML("afterbegin", html);
  btn.textContent = "Haz click aqui para ocultar todos los productos";
};

const hideCart = function (btn, i, list) {
  let pageDisp = document.querySelector(`#${superMarkets[i]}__disp`);
  let btnContainer = document.querySelector(
    `#${superMarkets[i]}__btn__container`
  );
  btnContainer.classList.add("invisible");
  pageDisp.textContent = `Page 1`;
  console.log("HOLA");
  document.querySelector(`.products__li__${i + 1}`).innerHTML = "";
  productRenderCheck[superMarkets[i]] = false;
  btn.textContent = "Haz click aqui para mostrar todos los productos";
};

const displaySubtotal = function (subTotal, i) {
  let html;
  const column = document.querySelector(`.column__${i + 1}`);
  const products__li = document.querySelector(`.products__li__${i + 1}`);
  const logoSpace = document.querySelector(`.logo__${i + 1}`);

  if (subTotal) {
    html = `
    <div class="subtotal">
    <h4>
    Tu total sera de $${subTotal};
    </h4>
    <button class="product__addbtn btn cartbtn__${
      i + 1
    }">	&plus;Haz click aqui para ver todos los productos</button>
    </div>`;
    // const botonProductos = document.querySelector(".cartbtn__1");
    logoSpace.insertAdjacentHTML("beforeend", html);

    let cartbtn = document.querySelector(`.cartbtn__${i + 1}`);
    cartbtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log(productRenderCheck);

      if (!productRenderCheck[superMarkets[i]]) {
        displayCart(cartbtn, i, products__li);
        console.log("ESTE?>");

        // productRenderCheck[superMarkets[i]] = true;
        // console.log("HOLAAAAAA");
        // productListRender(
        //   products__li,
        //   superMarketProducts[superMarkets[i]].cartProducts
        // );

        // // column.insertAdjacentHTML("afterbegin", html);
        // cartbtn.textContent = "Haz click aqui para ocultar todos los productos";
      } else {
        hideCart(cartbtn, i, products__li);
      }
    });
  }
};
const calculateSubTotal = function () {
  let subTotal = 0;
  for (let [index, superMarket] of superMarkets.entries()) {
    // console.log(superMarket);
    // console.log(superMarkets);
    let i = 0;
    for (i; i < superMarketProducts[superMarket].cartProducts.length; i++) {
      // console.log(cartProducts[i]);
      // console.log(superMarketProducts[superMarket].cartProducts[i]);

      let prices = giveActualPrice(
        superMarketProducts[superMarket].cartProducts[i]
      );
      let price = parseFloat(prices);
      let quantity = parseInt(
        superMarketProducts[superMarket].cartProducts[i]._quantity
      );
      subTotal += price * quantity;
    }
    displaySubtotal(Math.trunc(subTotal * 1000) / 1000, index);
    subTotal = 0;
  }
  return subTotal;
};

const cartColumnDisplay = function () {
  if (localStorage.getItem("superMarketProducts"))
    superMarketProducts = JSON.parse(
      localStorage.getItem("superMarketProducts")
    );
  console.log(superMarketProducts);

  if (localStorage.getItem("superMarkets"))
    superMarkets = JSON.parse(localStorage.getItem("superMarkets"));
  let html;
  const container = document.querySelector(".column__container");
  const columnContainer = document.querySelector(".column-container");
  columnContainer.classList.remove("hidden");

  columnContainer.style.gridTemplateColumns = `repeat(${superMarkets.length}, 1fr)`;
  for (let i = 0; i < superMarkets.length; i++) {
    html = `<div class="column column__${i + 1}" id="${superMarkets[i]}">
 
    <div class="logo__space logo__${i + 1}">
        <img class=logo__img
          src="./img/${superMarkets[i]}_logo.png"
          alt="${superMarkets[i]}"
          height="80px"
        />
      </div>
      <div class="products__li__${i + 1}" id="${superMarkets[i]}"></div>
      <div class="btn__container" id="${superMarkets[i]}__btn__container">
        <button class="prev__btn btn invisible" id="${
          superMarkets[i]
        }__prev">Previous</button>
        <p class="page__display invisible" id="${
          superMarkets[i]
        }__disp">Page 1</p>
        <button class="next__btn btn invisible" id="${
          superMarkets[i]
        }__next">Next</button>
      </div>
    </div>`;
    container.insertAdjacentHTML("beforeend", html);
    // const botonProductos = document.querySelector(".cartbtn__1");
    // window.addEventListener("click", function (e) {
    //   e.preventDefault();
    //   let products__li = this.document.querySelector(
    //     `.products__li__${i + 1}}`
    //   );
    //   let column = this.document.querySelector(`.column__${i + 1}`);

    //   if (e.target.classList.value.includes(`cartbtn__${i + 1}`)) {
    //     console.log(superMarketProducts[superMarkets[i]].cartProducts);

    //     productListRender(
    //       products__li,
    //       superMarketProducts[superMarkets[i]].cartProducts
    //     );

    //     column.insertAdjacentHTML("afterbegin", html);
    //     e.target.textContent =
    //       "Haz click aqui para ocultar todos los productos";
    //   }
    // });
  }
  calculateSubTotal();
};
cartColumnDisplay();

//CART BUTTON SYSTEM TO ADD OR DECREASE
