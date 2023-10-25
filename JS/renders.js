import { giveActualPrice } from "./helpers.js";
import {
  calculateDiscountPercentage,
  increment,
  decrement,
} from "./helpers.js";

let pageCount = 1;
let counterOneP = 10;
let counterOneL = 0;
let pageLimit = false;
let pageDispAll = document.querySelectorAll(".page__display");

let brandSetCache;
let productsArrCache;
let caches = {
  heb: {
    brandsSet: [],
    productsArr: [],
  },
  soriana: {
    brandsSet: [],
    productsArr: [],
  },
  laComer: {
    brandsSet: [],
    productsArr: [],
  },
  ley: {
    brandsSet: [],
    productsArr: [],
  },
  walmart: {
    brandsSet: [],
    productsArr: [],
  },
  sams: {
    brandsSet: [],
    productsArr: [],
  },
  costco: {
    brandsSet: [],
    productsArr: [],
  },
  chedraui: {
    brandsSet: [],
    productsArr: [],
  },
  bodegaAurrera: {
    brandsSet: [],
    productsArr: [],
  },
};

let superMarketCharac = {
  heb: {
    pageCount: 1,
    counterP: 10,
    counterL: 0,
    pageLimit: false,
    eventListener: false,
  },
  soriana: {
    pageCount: 1,
    counterP: 10,
    counterL: 0,
    pageLimit: false,
    eventListener: false,
  },
  walmart: {
    pageCount: 1,
    counterP: 10,
    counterL: 0,
    pageLimit: false,
    eventListener: false,
  },
  laComer: {
    pageCount: 1,
    counterP: 10,
    counterL: 0,
    pageLimit: false,
    eventListener: false,
  },
  costco: {
    pageCount: 1,
    counterP: 10,
    counterL: 0,
    pageLimit: false,
    eventListener: false,
  },
  ley: {
    pageCount: 1,
    counterP: 10,
    counterL: 0,
    pageLimit: false,
    eventListener: false,
  },
  bodegaAurrera: {
    pageCount: 1,
    counterP: 10,
    counterL: 0,
    pageLimit: false,
    eventListener: false,
  },
  chedraui: {
    pageCount: 1,
    counterP: 10,
    counterL: 0,
    pageLimit: false,
    eventListener: false,
  },
  sams: {
    pageCount: 1,
    counterP: 10,
    counterL: 0,
    pageLimit: false,
    eventListener: false,
  },
};

export const initialPageValues = function (id) {
  superMarketCharac[id].counterP = 10;
  superMarketCharac[id].counterL = 0;
  superMarketCharac[id].pageLimit = false;
  superMarketCharac[id].pageCount = 1;
  console.log("Valores reiniciados");
  console.log(superMarketCharac);

  pageDispAll.textContent = `Page ${superMarketCharac[id].pageLimit.pageCount}`;
};

export const productRender = function (container, product, index) {
  // console.log(product);

  let superMarket = container.getAttribute("id");
  let { price } = product;
  let { brand } = product;
  let { imgSrc } = product;
  let { description } = product;
  let { _id } = product;
  let { cart } = product;
  let { _quantity } = product;
  let pricesArr = giveActualPrice(product);
  let actualPrice;
  let oldPrice;
  let discountPercentage;

  if (pricesArr.length > 1) {
    actualPrice = pricesArr[0];
    oldPrice = pricesArr[1];
    discountPercentage = calculateDiscountPercentage(pricesArr);
  }
  actualPrice = pricesArr[0];

  let html = `      <div class="product__container" id="${_id}">
  <div class="product__img">
  <img src=${imgSrc} alt="" height="100px" >
  </div>
<div class="product__details">
  
  <p class="product__description">${description}</p>
  <p class="product__description">MARCA: ${brand}</p>
  <div class="product__buy">
 `;
  if (!oldPrice)
    html += `   
    <h4 class="product__price">$${actualPrice}</h4>
    </div>
  `;
  if (oldPrice)
    html += `<h4 class="product__price"><s>$${oldPrice}</s></h4>
    </div>
    <div class="product__discount">${discountPercentage}% OFF-$${actualPrice}</div>`;
  if (cart)
    html += ` <div class="quantity__container">
  <button class="quantity__button" id="decrement__${index + 1}">-</button>
  <span class="quantity__${index + 1}">${_quantity}</span>
  <button class="quantity__button" id="increment__${index + 1}">+</button>
</div>
</div>
</div>`;
  if (!cart)
    html += `
    <div class="quantity-wrapper">
    <div class="quantity__container">
    <button class="quantity__button" id="decrement">-</button>
    <span class="quantity">${_quantity}</span>
    <button class="quantity__button" id="increment">+</button>
    </div>
     <button class="product__addbtn btn" id="${superMarket}">	&plus; Agregar</button>
     </div>
     </div>
</div>`;

  html += `</div>`;

  container.insertAdjacentHTML("beforeend", html);

  const quantityWrapper = document.querySelectorAll(".quantity-wrapper");
};

export const productListRender = function (container, productsArr, cache) {
  console.log("EN RENDER LISTA", superMarketCharac);

  const currentFileName = window.location.pathname.split("/").pop();

  container.innerHTML = "";
  console.log(productsArr);

  let superMarket = container.getAttribute("id");
  initialPageValues(superMarket);
  console.log(superMarketCharac[superMarket].eventListener);

  // console.log(superMarketCharac[superMarket].counterL, "AY DIOS MIO");
  let pageDisp = document.querySelector(`#${superMarket}__disp`);
  let nextPageBtn = document.querySelector(`#${superMarket}__next`);
  let prevPageBtn = document.querySelector(`#${superMarket}__prev`);
  let tempCounterL = superMarketCharac[superMarket].counterL;
  let tempCounterP = superMarketCharac[superMarket].counterP;
  let brandsSet = new Set(
    productsArr.map((product) => {
      if (product.brand) {
        product.brand.toUpperCase();
      }
    })
  );
  console.log(brandsSet);

  if (!cache) {
    caches[superMarket].productsArr = productsArr;
    caches[superMarket].brandsSet = brandsSet;
  }

  if (currentFileName === "index.html") {
    const dropDownMenu = document.querySelector(`#${superMarket}__dropdown`);

    if (!cache) {
      while (dropDownMenu.firstChild) {
        dropDownMenu.removeChild(dropDownMenu.firstChild);
      }
      let option = document.createElement("option");
      option.value = "todas";
      option.textContent = "TODAS";
      dropDownMenu.appendChild(option);
      // dropDownMenu.innerHTML = `<option value="todas">TODAS</option>;`;
      brandsSet.forEach((brand) => {
        let option = document.createElement("option");
        option.value = brand.toLowerCase();
        option.textContent = brand;
        if (brand != "") dropDownMenu.appendChild(option);

        //`<option value="${brand.toLowerCase()}">${brand}</option>`
      });
    }
    dropDownMenu.addEventListener("change", function (event) {
      // Get the selected option's value
      const selectedValue = event.target.value;
      if (selectedValue === "todas") {
        console.log(productsArrCache);

        productListRender(container, caches[superMarket].productsArr, true);
        initialPageValues(superMarket);
        return;
      }
      const filteredArr = productsArr.filter(
        (product) => product.brand.toLowerCase() == selectedValue.toLowerCase()
      );
      initialPageValues(superMarket);
      console.log(filteredArr);
      productListRender(container, filteredArr, true);
      // Perform an action based on the selected value
    });
  }
  for (tempCounterL; tempCounterL < tempCounterP; tempCounterL++) {
    if (productsArr.length === tempCounterL) {
      console.log();

      superMarketCharac[superMarket].pageLimit = true;

      break;
    } else {
      superMarketCharac[superMarket].pageLimit = false;
    }

    productRender(container, productsArr[tempCounterL], tempCounterL);
    superMarketCharac[superMarket].counterL = tempCounterL;
  }
  container.addEventListener("click", (event) => {
    const target = event.target;

    if (
      target.classList.contains("quantity__container") ||
      target.parentElement.classList.contains("quantity__container")
    ) {
      const quantityContainer = target.closest(".quantity__container");
      const quantityElement = quantityContainer.querySelector(".quantity");

      let currentValue = parseInt(quantityElement.textContent);

      if (target.id === "increment") {
        //const quantityElement = target.closest(".quantity");

        let currentValue = parseInt(quantityElement.textContent);
        currentValue++;
        quantityElement.textContent = "";
        quantityElement.textContent = currentValue;

        // currentValue++;
      } else if (target.id === "decrement") {
        console.log("menos");
        if (currentValue > 1) {
          currentValue--;
          quantityElement.textContent = currentValue;
        }
      }
    }
  });
  // DROP DOWN EVENT LISTENER FOR THE SELECTION A BRAND

  // Functions to check whether we have reached the limit of the page and the content should dissapear
  pageDisp.classList.remove("invisible");
  if (superMarketCharac[superMarket].pageLimit) {
    nextPageBtn.classList.add("invisible");
  } else {
    nextPageBtn.classList.remove("invisible");
  }

  let btnArr = [prevPageBtn, pageDisp, nextPageBtn];

  // ADDING EVENT LISTENERS FOR THE NEXT AND PREV PAGE EVENTS
  if (!superMarketCharac[superMarket].eventListener) {
    superMarketCharac[superMarket].eventListener = true;
    nextPageBtn.addEventListener("click", function (e) {
      nextPage(container, productsArr, btnArr);
      e.preventDefault();
    });

    prevPageBtn.addEventListener("click", function (e) {
      previousPage(container, productsArr, btnArr);
      e.preventDefault();
    });
  }
  console.log("Caches", caches);
};

export const nextPage = function (container, productsArr, btnArr) {
  let superMarket = container.getAttribute("id");
  let prevPageBtn = btnArr[0];
  let pageDisp = btnArr[1];
  let nextPageBtn = btnArr[2];
  console.log(superMarketCharac[superMarket].counterL);
  container.innerHTML = "";
  superMarketCharac[superMarket].counterP += 10;
  superMarketCharac[superMarket].counterL += 1;

  productListRender(container, productsArr, false);
  superMarketCharac[superMarket].pageCount += 1;

  pageDisp.textContent = `Page ${superMarketCharac[superMarket].pageCount}`;

  prevPageBtn.classList.remove("invisible");
};

export const previousPage = function (container, productsArr, btnArr) {
  let prevPageBtn = btnArr[0];
  let pageDisp = btnArr[1];
  let nextPageBtn = btnArr[2];
  let superMarket = container.getAttribute("id");
  let tempCounterL = superMarketCharac[superMarket].counterL;
  let tempCounterP = superMarketCharac[superMarket].counterP;

  // container.innerHTML = "";
  superMarketCharac[superMarket].counterL =
    tempCounterL + (tempCounterP - tempCounterL) - 20;
  superMarketCharac[superMarket].counterP -= 10;

  productListRender(container, productsArr, false);
  superMarketCharac[superMarket].pageCount -= 1;

  pageDisp.textContent = `Page ${superMarketCharac[superMarket].pageCount}`;

  if (superMarketCharac[superMarket].pageCount == 1) {
    prevPageBtn.classList.add("invisible");
    nextPageBtn.classList.remove("invisible");
  }
};

export const gridCreator = function (array) {
  let welcomeContainer = document.querySelector(".welcome__container");
  let welcomeBtn = document.querySelector(".welcome__container__btn");
  let welcomeMessage = document.querySelector(".welcome__message");

  welcomeContainer.classList.add("hidden");
  welcomeBtn.classList.add("hidden");
  welcomeMessage.classList.add("hidden");

  let columnContainer = document.querySelector(".column-container");
  columnContainer.classList.remove("hidden");
  const frColumns = array.map(() => "1fr").join(" ");
  let html = "";
  console.log("length del array ", array.length);

  columnContainer.style.gridTemplateColumns = `repeat(${array.length},1fr)`;

  array.forEach((superMarket, index) => {
    console.log();

    html += `<div class="column column__${index + 1} " id="${superMarket}">
    <div class="logo__space">
    <img
    class="logo__img"
   src="./img/${superMarket}_logo.png"
    alt="${superMarket}"
  />
    </div>
   
  <div class="dropdown__container">
  <label for="brands" class="dropdown__marcas">Elige tu marca!:</label>
  
  <select name="brands" id="${superMarket}__dropdown">
  
 

 </select>
  </div>
    <div class="products__li__${index + 1} products__list"id="${superMarket}">

      <!-- <div class="product__container">
       <img src="https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750104000583L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" alt="" height="100px" class="product__image">
      <div class="product__details">
        
        <p class="product__description">Jamon de pavo FUD virginia 290 g</p>
        <p class="product__description">MARCA: FUD</p>
        <div class="product__buy">
          
          <h4 class="product__price">$42.00</h4>
          <button class="product__addbtn">	&plus;Agregar</button>
        </div>
      </div> 

    </div>  -->
    </div>
    <div class="btn__container">
      <button class="prev__btn btn invisible" id="${superMarket}__prev">Previous</button>
      <p class="page__display invisible" id="${superMarket}__disp">Page 1</p>
      <button class="next__btn btn invisible" id="${superMarket}__next">Next</button>
    </div>
  </div>`;
  });
  columnContainer.insertAdjacentHTML("afterbegin", html);
};
