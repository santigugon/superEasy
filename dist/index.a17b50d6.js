function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t=globalThis,n={},r={},o=t.parcelRequireb2eb;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequireb2eb=o);var a=o.register;a("jeuMJ",function(t,n){let r;e(t.exports,"initialPageValues",()=>l),e(t.exports,"productListRender",()=>u),e(t.exports,"gridCreator",()=>_);var a=o("jHh5l");let i=document.querySelectorAll(".page__display"),s={heb:{brandsSet:[],productsArr:[]},soriana:{brandsSet:[],productsArr:[]},laComer:{brandsSet:[],productsArr:[]},ley:{brandsSet:[],productsArr:[]},walmart:{brandsSet:[],productsArr:[]},sams:{brandsSet:[],productsArr:[]},costco:{brandsSet:[],productsArr:[]},chedraui:{brandsSet:[],productsArr:[]},bodegaAurrera:{brandsSet:[],productsArr:[]}},c={heb:{pageCount:1,counterP:10,counterL:0,pageLimit:!1,eventListener:!1},soriana:{pageCount:1,counterP:10,counterL:0,pageLimit:!1,eventListener:!1},walmart:{pageCount:1,counterP:10,counterL:0,pageLimit:!1,eventListener:!1},laComer:{pageCount:1,counterP:10,counterL:0,pageLimit:!1,eventListener:!1},costco:{pageCount:1,counterP:10,counterL:0,pageLimit:!1,eventListener:!1},ley:{pageCount:1,counterP:10,counterL:0,pageLimit:!1,eventListener:!1},bodegaAurrera:{pageCount:1,counterP:10,counterL:0,pageLimit:!1,eventListener:!1},chedraui:{pageCount:1,counterP:10,counterL:0,pageLimit:!1,eventListener:!1},sams:{pageCount:1,counterP:10,counterL:0,pageLimit:!1,eventListener:!1}},l=function(e){c[e].counterP=10,c[e].counterL=0,c[e].pageLimit=!1,c[e].pageCount=1,console.log("Valores reiniciados"),console.log(c),i.textContent=`Page ${c[e].pageLimit.pageCount}`},d=function(e,t,n){// console.log(product);
let r,o,i,s=e.getAttribute("id"),{price:c}=t,{brand:l}=t,{imgSrc:d}=t,{description:u}=t,{_id:p}=t,{cart:g}=t,{_quantity:_}=t,m=(0,a.giveActualPrice)(t);m.length>1&&(r=m[0],o=m[1],i=(0,a.calculateDiscountPercentage)(m)),r=m[0];let v=`      <div class="product__container" id="${p}">
  <div class="product__img">
  <img src=${d} alt="" height="100px" >
  </div>
<div class="product__details">
  
  <p class="product__description">${u}</p>
  <p class="product__description">MARCA: ${l}</p>
  <div class="product__buy">
 `;o||(v+=`   
    <h4 class="product__price">$${r}</h4>
    </div>
  `),o&&(v+=`<h4 class="product__price"><s>$${o}</s></h4>
    </div>
    <div class="product__discount">${i}% OFF-$${r}</div>`),g&&(v+=` <div class="quantity__container">
  <button class="quantity__button" id="decrement__${n+1}">-</button>
  <span class="quantity__${n+1}">${_}</span>
  <button class="quantity__button" id="increment__${n+1}">+</button>
</div>
</div>
</div>`),g||(v+=`
    <div class="quantity-wrapper">
    <div class="quantity__container">
    <button class="quantity__button" id="decrement">-</button>
    <span class="quantity">${_}</span>
    <button class="quantity__button" id="increment">+</button>
    </div>
     <button class="product__addbtn btn" id="${s}">	&plus; Agregar</button>
     </div>
     </div>
</div>`),v+="</div>",e.insertAdjacentHTML("beforeend",v),document.querySelectorAll(".quantity-wrapper")},u=function(e,t,n){console.log("EN RENDER LISTA",c);let o=window.location.pathname.split("/").pop();e.innerHTML="",console.log(t);let a=e.getAttribute("id");l(a),console.log(c[a].eventListener);// console.log(superMarketCharac[superMarket].counterL, "AY DIOS MIO");
let i=document.querySelector(`#${a}__disp`),_=document.querySelector(`#${a}__next`),m=document.querySelector(`#${a}__prev`),v=c[a].counterL,f=c[a].counterP,b=new Set(t.map(e=>{e.brand&&e.brand.toUpperCase()}));if(console.log(b),n||(s[a].productsArr=t,s[a].brandsSet=b),"index.html"===o){let o=document.querySelector(`#${a}__dropdown`);if(!n){for(;o.firstChild;)o.removeChild(o.firstChild);let e=document.createElement("option");e.value="todas",e.textContent="TODAS",o.appendChild(e),// dropDownMenu.innerHTML = `<option value="todas">TODAS</option>;`;
b.forEach(e=>{let t=document.createElement("option");t.value=e.toLowerCase(),t.textContent=e,""!=e&&o.appendChild(t);//`<option value="${brand.toLowerCase()}">${brand}</option>`
})}o.addEventListener("change",function(n){// Get the selected option's value
let o=n.target.value;if("todas"===o){console.log(r),u(e,s[a].productsArr,!0),l(a);return}let i=t.filter(e=>e.brand.toLowerCase()==o.toLowerCase());l(a),console.log(i),u(e,i,!0);// Perform an action based on the selected value
})}for(;v<f;v++){if(t.length===v){console.log(),c[a].pageLimit=!0;break}c[a].pageLimit=!1,d(e,t[v],v),c[a].counterL=v}e.addEventListener("click",e=>{let t=e.target;if(t.classList.contains("quantity__container")||t.parentElement.classList.contains("quantity__container")){let e=t.closest(".quantity__container"),n=e.querySelector(".quantity"),r=parseInt(n.textContent);if("increment"===t.id){//const quantityElement = target.closest(".quantity");
let e=parseInt(n.textContent);e++,n.textContent="",n.textContent=e;// currentValue++;
}else"decrement"===t.id&&(console.log("menos"),r>1&&(r--,n.textContent=r))}}),// DROP DOWN EVENT LISTENER FOR THE SELECTION A BRAND
// Functions to check whether we have reached the limit of the page and the content should dissapear
i.classList.remove("invisible"),c[a].pageLimit?_.classList.add("invisible"):_.classList.remove("invisible");let L=[m,i,_];c[a].eventListener||(c[a].eventListener=!0,_.addEventListener("click",function(n){p(e,t,L),n.preventDefault()}),m.addEventListener("click",function(n){g(e,t,L),n.preventDefault()})),console.log("Caches",s)},p=function(e,t,n){let r=e.getAttribute("id"),o=n[0],a=n[1];n[2],console.log(c[r].counterL),e.innerHTML="",c[r].counterP+=10,c[r].counterL+=1,u(e,t,!1),c[r].pageCount+=1,a.textContent=`Page ${c[r].pageCount}`,o.classList.remove("invisible")},g=function(e,t,n){let r=n[0],o=n[1],a=n[2],i=e.getAttribute("id"),s=c[i].counterL,l=c[i].counterP;// container.innerHTML = "";
c[i].counterL=s+(l-s)-20,c[i].counterP-=10,u(e,t,!1),c[i].pageCount-=1,o.textContent=`Page ${c[i].pageCount}`,1==c[i].pageCount&&(r.classList.add("invisible"),a.classList.remove("invisible"))},_=function(e){let t=document.querySelector(".welcome__container"),n=document.querySelector(".welcome__container__btn"),r=document.querySelector(".welcome__message");t.classList.add("hidden"),n.classList.add("hidden"),r.classList.add("hidden");let o=document.querySelector(".column-container");o.classList.remove("hidden"),e.map(()=>"1fr").join(" ");let a="";console.log("length del array ",e.length),o.style.gridTemplateColumns=`repeat(${e.length},1fr)`,e.forEach((e,t)=>{console.log(),a+=`<div class="column column__${t+1} " id="${e}">
    <div class="logo__space">
    <img
    class="logo__img"
   src="./img/${e}_logo.png"
    alt="${e}"
  />
    </div>
   
  <div class="dropdown__container">
  <label for="brands" class="dropdown__marcas">Elige tu marca!:</label>
  
  <select name="brands" id="${e}__dropdown">
  
 

 </select>
  </div>
    <div class="products__li__${t+1} products__list"id="${e}">

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
      <button class="prev__btn btn invisible" id="${e}__prev">Previous</button>
      <p class="page__display invisible" id="${e}__disp">Page 1</p>
      <button class="next__btn btn invisible" id="${e}__next">Next</button>
    </div>
  </div>`}),o.insertAdjacentHTML("afterbegin",a)}}),a("jHh5l",function(t,n){e(t.exports,"giveActualPrice",()=>r),e(t.exports,"calculateDiscountPercentage",()=>o),e(t.exports,"removeElementFromArray",()=>a),e(t.exports,"addOrUpdateProduct",()=>i);let r=function(e){let{price:t}=e,n=t.split("$");if((n=(n=n.filter(e=>""!==e)).map(e=>e.replace(/[^0-9.]/g,""))).length>1)for(let e=0;e<n.length;e++)parseFloat(n[e-1])>parseFloat(n[e])&&(n[e-1]=n[e],n[e]=n[e-1]);let r=[...new Set(n)];// console.log(parseFloat(prices));
return r},o=function(e){let[t,n]=e;// Calculate the discounted price
// Return the discounted price and discount percentage as an object
return Math.round((t-n)/t*100)};function a(e,t){let n=e.indexOf(t);-1!==n&&e.splice(n,1)}function i(e,t){// Find the index of the existing product in the array, if any
let n=e.findIndex(e=>e._id===t._id);-1!==n?(// If the product exists, increment the quantity property
e[n]._quantity=parseInt(e[n]._quantity)+parseInt(t._quantity),console.log(e[n]._quantity)):e.push(t)}document.getElementById("increment"),document.getElementById("decrement")});var i=o("jeuMJ"),s=o("jHh5l");document.querySelector(".prueba"),document.querySelector(".next__btn"),document.querySelector(".prev__btn");const c=document.querySelector(".search__field"),l=document.querySelector(".search"),d=document.querySelector(".cartbtn"),u=document.querySelector(".welcome__supermarket__container"),p=document.querySelector(".welcome__container__btn");// VARIABLES
let g=[],_=[],m={heb:{products:[],cartProducts:[]},soriana:{products:[],cartProducts:[]},walmart:{products:[],cartProducts:[]},laComer:{products:[],cartProducts:[]},costco:{products:[],cartProducts:[]},ley:{products:[],cartProducts:[]},bodegaAurrera:{products:[],cartProducts:[]},chedraui:{products:[],cartProducts:[]},sams:{products:[],cartProducts:[]}};(0,i.initialPageValues)("walmart"),_.forEach(e=>(0,i.initialPageValues)(e)),// Event Listeners
p.addEventListener("click",function(e){e.preventDefault();let t=document.querySelector(".search__field"),n=document.querySelector(".cartbtn");t.classList.toggle("hidden"),n.classList.toggle("hidden"),(0,i.gridCreator)(_)}),function(){let e=document.querySelector(".welcome__carrousel"),t=document.getElementById("image-track");window.onmousedown=e=>{t.dataset.mouseDownAt=e.clientX},window.onmouseup=n=>{t.dataset.mouseDownAt="0",(n.target==e||e.contains(n.target))&&(t.dataset.prevPercentage=t.dataset.percentage)},window.onmousemove=n=>{if("0"!==t.dataset.mouseDownAt&&(n.target==e||e.contains(n.target))){let e=parseFloat(t.dataset.mouseDownAt)-n.clientX,r=window.innerWidth/2,o=parseFloat(t.dataset.prevPercentage)+-(e/r*100);for(let e of(o=Math.max(o=Math.min(o,0),-100),t.dataset.percentage=o,t.animate({transform:`translate(${o}%,-50%)`},{duration:1200,fill:"forwards"}),t.getElementsByClassName("img")))e.animate({objectPosition:`${-1*o}% center`},{duration:1200,fill:"forwards"})}}}(),// import { searchBar, searchResults } from "./searchFunctions.js";
// import { scrapeProduct } from "./scrapeTest.js";
function(){// HEADER SIDES VARIABLES
let e=document.getElementById("left-side"),t=e.getBoundingClientRect().top,n=document.querySelector(".track__message"),r=document.querySelector(".webname__img"),o=document.querySelector(".relative__container"),a=document.querySelector(".icon"),i=o.getBoundingClientRect().top;window.onscroll=s=>{//SIDES SLIDER
let c=e.getBoundingClientRect().top,l=c/t*100;l=Math.max(l,10),e.style.width=`${l<15?l-10:l}%`,l-10==0&&(n.classList.remove("hidden"),n.classList.add("fade__down"),r.classList.remove("hidden"),r.classList.add("fade__down"));let d=o.getBoundingClientRect().top,u=d/i*100;(u=Math.min(u=Math.max(u,10),100))<95?a.firstElementChild.classList.contains("fa-arrow-pointer")&&(a.firstElementChild.classList.toggle("fa-arrow-pointer"),a.firstElementChild.classList.toggle("fa-hand-pointer")):a.firstElementChild.classList.contains("fa-hand-pointer")&&(a.firstElementChild.classList.toggle("fa-arrow-pointer"),a.firstElementChild.classList.toggle("fa-hand-pointer")),// Animacion del mouse hacia la izquierda
a.animate({transform:`translateX(${u}%)`},{duration:1200,fill:"forwards"})}}(),new class{constructor(e,t,n,r){this.price=e,this.brand=t,this.description=n,this.imgSrc=r}}(42,"FUD","Jamon de pavo FUD virginia 290 g","https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750104000583L.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"),u.addEventListener("click",function(e){// console.log(e.target.parentElement.classList.value);
if(e.preventDefault(),e.target.parentElement.classList.value.includes("supermarket__logo__container")&&document.querySelector(`.${e.target.classList.value}`)){let t=e.target.getAttribute("alt"),n=document.querySelector(`#${t}`),r=document.querySelector(`#${t}__div`);n.classList.toggle("notselected"),r.classList.toggle("supermarket__selected"),!_.includes(t)&&_.length<4?_.push(t):(0,s.removeElementFromArray)(_,t)}}),//We start by adding the event listener for the search bar
// SEARCHBARFUNCTIONS
// EVENTLISTENERS
// cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
l.addEventListener("submit",function(e){g=[],// window.location.href = "index.html";
e.preventDefault(),e.stopPropagation();let t=c.value.replace(/^[+\s+]+/,"");console.log(t=t.replace(/[+\s+]$/,""));let n=t.replaceAll(" ","+");v(n),c.value="",console.log(n)}),// Event listener for adding products to the cart
window.addEventListener("click",function(e){// console.log(e.target);
if(e.preventDefault(),"product__addbtn btn"===e.target.classList.value){let t=e.target.parentElement.parentElement.parentElement.getAttribute("id"),n=e.target.getAttribute("id");console.log(t,n);let r=m[n].products.find(e=>e._id==t);console.log(e.target);let o=e.target.closest(".quantity-wrapper"),a=o.querySelector(".quantity__container"),i=a.querySelector(".quantity");r._quantity=i.textContent,// superMarketProducts[superMarket].cartProducts.forEach(product=>{
//   product._id==
// })
(0,s.addOrUpdateProduct)(m[n].cartProducts,r),// superMarketProducts[superMarket].cartProducts.push(product);
console.log(m)}});//THE AJAX CALL TO RETRIEVE THE PRODUCTS FROM MY API
let v=async function(e){try{for(let t=0;t<_.length;t++){let n=await fetch(`http://127.0.0.1:3000/${_[t]}/${e}`),r=await n.json();r.forEach(e=>e._quantity="1"),g.push(r),m[_[t]].products=r,// productListOne.innerHTML = "";
console.log(g),(0,i.initialPageValues)(_[t]),console.log("Debemos reiniciar ",_[t]);let o=document.querySelector(`.products__li__${t+1}`);(0,i.productListRender)(o,g[t],!1),console.log(g),console.log(m)}}catch(e){console.error(e)}};d.addEventListener("click",function(){window.location.href="cart.html",localStorage.setItem("superMarketProducts",JSON.stringify(m)),localStorage.setItem("superMarkets",JSON.stringify(_))});// products = [
//   {
//     price: "$238.00",
//     brand: "BACARDI",
//     description: "Ron Carta Blanca 750 ml",
//     imgSrc:
//       "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/7/5/7501008660195_1-1_small.jpg",
//   },
//   {
//     price: "$263.00",
//     brand: "BACARDI",
//     description: "Ron Raspberry 750 ml",
//     imgSrc:
//       "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/7/5/7501008645246_1-1_small.jpg",
//   },
//   {
//     price: "$292.00",
//     brand: "BACARDI",
//     description: "Ron Carta Blanca 980 ml",
//     imgSrc:
//       "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/7/5/7501008660201_1-1_small.jpg",
//   },
//   {
//     price: "$263.00",
//     brand: "BACARDI",
//     description: "Ron Limón 750 ml",
//     imgSrc:
//       "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/7/5/7501008616130_1-1_small.jpg",
//   },
//   {
//     price: "$204.00",
//     brand: "BACARDI",
//     description: "Ron Spiced 750 ml",
//     imgSrc:
//       "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/4/0/403904_small.jpg",
//   },
//   {
//     price: "$293.00",
//     brand: "BACARDI",
//     description: "Ron Añejo 980 ml",
//     imgSrc:
//       "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/1/3/138237_small.jpg",
//   },
//   {
//     price: "$477.00",
//     brand: "BACARDI",
//     description: "Ron Carta Blanca 1.75 lt",
//     imgSrc:
//       "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/7/5/7501008660218_1-1_small.jpg",
//   },
//   {
//     price: "$263.00",
//     brand: "BACARDI",
//     description: "Ron Mango Chile 750 ml",
//     imgSrc:
//       "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/8/1/814184_small.png",
//   },
// ];
//# sourceMappingURL=index.a17b50d6.js.map

//# sourceMappingURL=index.a17b50d6.js.map
