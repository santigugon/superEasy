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
// let nextPageBtn = document.querySelector(".next__btn");
// let prevPageBtn = document.querySelector(".prev__btn");

export const initialPageValues = function (id) {
  superMarketCharac[id].counterP = 10;
  superMarketCharac[id].counterL = 0;
  superMarketCharac[id].pageLimit = false;
  superMarketCharac[id].pageCount = 1;
  pageDispAll.textContent = `Page ${superMarketCharac[id].pageLimit.pageCount}`;

  // if (pageLimit) {
  //   nextPageBtn.classList.add("invisible");
  // }
  // prevPageBtn.classList.add("invisible");
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
  const currentFileName = window.location.pathname.split("/").pop();
  console.log(currentFileName);
  console.log(productsArr);

  container.innerHTML = "";
  // console.log(productsArr);

  let superMarket = container.getAttribute("id");

  // console.log(superMarketCharac[superMarket].counterL, "AY DIOS MIO");
  let pageDisp = document.querySelector(`#${superMarket}__disp`);
  let nextPageBtn = document.querySelector(`#${superMarket}__next`);
  let prevPageBtn = document.querySelector(`#${superMarket}__prev`);
  let tempCounterL = superMarketCharac[superMarket].counterL;
  let tempCounterP = superMarketCharac[superMarket].counterP;
  let brandsSet = new Set(
    productsArr.map((product) => product.brand.toUpperCase())
  );
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
    console.log(target);

    if (
      target.classList.contains("quantity__container") ||
      target.parentElement.classList.contains("quantity__container")
    ) {
      console.log("mas?");
      const quantityContainer = target.closest(".quantity__container");
      const quantityElement = quantityContainer.querySelector(".quantity");
      console.log(quantityContainer);

      let currentValue = parseInt(quantityElement.textContent);
      console.log(currentValue);

      if (target.id === "increment") {
        //const quantityElement = target.closest(".quantity");
        console.log(quantityElement);

        let currentValue = parseInt(quantityElement.textContent);
        console.log(currentValue);

        console.log(typeof currentValue);
        console.log(currentValue);

        currentValue++;
        console.log(currentValue);
        console.log(typeof currentValue);
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
      console.log("S");

      previousPage(container, productsArr, btnArr);
      e.preventDefault();
    });
  }
  console.log(caches);
};

export const nextPage = function (container, productsArr, btnArr) {
  console.log(superMarketCharac);

  let superMarket = container.getAttribute("id");
  let prevPageBtn = btnArr[0];
  let pageDisp = btnArr[1];
  let nextPageBtn = btnArr[2];
  console.log(superMarketCharac[superMarket].counterL);
  container.innerHTML = "";
  //   console.log("boton");
  superMarketCharac[superMarket].counterP += 10;
  superMarketCharac[superMarket].counterL += 1;
  //   console.log("Mas", counterOneP);
  //   console.log("menos", counterOneL);

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
  // const src = {
  //   heb: "https://1000marcas.net/wp-content/uploads/2022/04/HEB-Logo.png",
  //   soriana:
  //     "https://upload.wikimedia.org/wikipedia/commons/6/61/LogoSorianaSVG.svg",
  //   bodegaAurrera:
  //     "data:image/png;base64,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",

  //   laComer:
  //     "http://bamf.com.mx/wp/wp-content/uploads/2016/05/nuevo-logotipo-la-comer-dos.jpg",

  //   walmart:
  //     "https://1000marcas.net/wp-content/uploads/2020/02/logo-Walmart.png",

  //   costco:
  //     "https://logodownload.org/wp-content/uploads/2021/04/costco-wholesale-logo.png",

  //   chedraui:
  //     "https://puntotrader.mx/blog/wp-content/uploads/2021/05/Portada-de-blog-2-16.jpg",
  //   sams: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Sam%27s_Club_Logo_2020.svg/2560px-Sam%27s_Club_Logo_2020.svg.png",
  //   ley: "https://seeklogo.com/images/C/Casa_Ley-logo-A556B3EF68-seeklogo.com.png",
  // };
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

  columnContainer.style.gridTemplateColumns = `repeat(${array.length}, 1fr)`;

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
    <div class="products__li__${index + 1} "id="${superMarket}">

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
