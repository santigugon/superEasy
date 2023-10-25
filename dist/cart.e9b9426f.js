let e,t;function n(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var o=globalThis,r={},i={},c=o.parcelRequireb2eb;null==c&&((c=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},o.parcelRequireb2eb=c);var a=c.register;a("jHh5l",function(e,t){n(e.exports,"giveActualPrice",()=>o),n(e.exports,"calculateDiscountPercentage",()=>r),n(e.exports,"removeElementFromArray",()=>i),n(e.exports,"addOrUpdateProduct",()=>c);let o=function(e){let{price:t}=e,n=t.split("$");if((n=(n=n.filter(e=>""!==e)).map(e=>e.replace(/[^0-9.]/g,""))).length>1)for(let e=0;e<n.length;e++)parseFloat(n[e-1])>parseFloat(n[e])&&(n[e-1]=n[e],n[e]=n[e-1]);let o=[...new Set(n)];// console.log(parseFloat(prices));
return o},r=function(e){let[t,n]=e;// Calculate the discounted price
// Return the discounted price and discount percentage as an object
return Math.round((t-n)/t*100)};function i(e,t){let n=e.indexOf(t);-1!==n&&e.splice(n,1)}function c(e,t){// Find the index of the existing product in the array, if any
let n=e.findIndex(e=>e._id===t._id);-1!==n?(// If the product exists, increment the quantity property
e[n]._quantity=parseInt(e[n]._quantity)+parseInt(t._quantity),console.log(e[n]._quantity)):e.push(t)}document.getElementById("increment"),document.getElementById("decrement")}),a("jeuMJ",function(e,t){let o;n(e.exports,"initialPageValues",()=>l),n(e.exports,"productListRender",()=>d),n(e.exports,"gridCreator",()=>g);var r=c("jHh5l");let i=document.querySelectorAll(".page__display"),a={heb:{brandsSet:[],productsArr:[]},soriana:{brandsSet:[],productsArr:[]},laComer:{brandsSet:[],productsArr:[]},ley:{brandsSet:[],productsArr:[]},walmart:{brandsSet:[],productsArr:[]},sams:{brandsSet:[],productsArr:[]},costco:{brandsSet:[],productsArr:[]},chedraui:{brandsSet:[],productsArr:[]},bodegaAurrera:{brandsSet:[],productsArr:[]}},s={heb:{pageCount:1,counterP:10,counterL:0,pageLimit:!1,eventListener:!1},soriana:{pageCount:1,counterP:10,counterL:0,pageLimit:!1,eventListener:!1},walmart:{pageCount:1,counterP:10,counterL:0,pageLimit:!1,eventListener:!1},laComer:{pageCount:1,counterP:10,counterL:0,pageLimit:!1,eventListener:!1},costco:{pageCount:1,counterP:10,counterL:0,pageLimit:!1,eventListener:!1},ley:{pageCount:1,counterP:10,counterL:0,pageLimit:!1,eventListener:!1},bodegaAurrera:{pageCount:1,counterP:10,counterL:0,pageLimit:!1,eventListener:!1},chedraui:{pageCount:1,counterP:10,counterL:0,pageLimit:!1,eventListener:!1},sams:{pageCount:1,counterP:10,counterL:0,pageLimit:!1,eventListener:!1}},l=function(e){s[e].counterP=10,s[e].counterL=0,s[e].pageLimit=!1,s[e].pageCount=1,console.log("Valores reiniciados"),console.log(s),i.textContent=`Page ${s[e].pageLimit.pageCount}`},u=function(e,t,n){// console.log(product);
let o,i,c,a=e.getAttribute("id"),{price:s}=t,{brand:l}=t,{imgSrc:u}=t,{description:d}=t,{_id:p}=t,{cart:_}=t,{_quantity:g}=t,m=(0,r.giveActualPrice)(t);m.length>1&&(o=m[0],i=m[1],c=(0,r.calculateDiscountPercentage)(m)),o=m[0];let v=`      <div class="product__container" id="${p}">
  <div class="product__img">
  <img src=${u} alt="" height="100px" >
  </div>
<div class="product__details">
  
  <p class="product__description">${d}</p>
  <p class="product__description">MARCA: ${l}</p>
  <div class="product__buy">
 `;i||(v+=`   
    <h4 class="product__price">$${o}</h4>
    </div>
  `),i&&(v+=`<h4 class="product__price"><s>$${i}</s></h4>
    </div>
    <div class="product__discount">${c}% OFF-$${o}</div>`),_&&(v+=` <div class="quantity__container">
  <button class="quantity__button" id="decrement__${n+1}">-</button>
  <span class="quantity__${n+1}">${g}</span>
  <button class="quantity__button" id="increment__${n+1}">+</button>
</div>
</div>
</div>`),_||(v+=`
    <div class="quantity-wrapper">
    <div class="quantity__container">
    <button class="quantity__button" id="decrement">-</button>
    <span class="quantity">${g}</span>
    <button class="quantity__button" id="increment">+</button>
    </div>
     <button class="product__addbtn btn" id="${a}">	&plus; Agregar</button>
     </div>
     </div>
</div>`),v+="</div>",e.insertAdjacentHTML("beforeend",v),document.querySelectorAll(".quantity-wrapper")},d=function(e,t,n){console.log("EN RENDER LISTA",s);let r=window.location.pathname.split("/").pop();e.innerHTML="",console.log(t);let i=e.getAttribute("id");l(i),console.log(s[i].eventListener);// console.log(superMarketCharac[superMarket].counterL, "AY DIOS MIO");
let c=document.querySelector(`#${i}__disp`),g=document.querySelector(`#${i}__next`),m=document.querySelector(`#${i}__prev`),v=s[i].counterL,b=s[i].counterP,L=new Set(t.map(e=>{e.brand&&e.brand.toUpperCase()}));if(console.log(L),n||(a[i].productsArr=t,a[i].brandsSet=L),"index.html"===r){let r=document.querySelector(`#${i}__dropdown`);if(!n){for(;r.firstChild;)r.removeChild(r.firstChild);let e=document.createElement("option");e.value="todas",e.textContent="TODAS",r.appendChild(e),// dropDownMenu.innerHTML = `<option value="todas">TODAS</option>;`;
L.forEach(e=>{let t=document.createElement("option");t.value=e.toLowerCase(),t.textContent=e,""!=e&&r.appendChild(t);//`<option value="${brand.toLowerCase()}">${brand}</option>`
})}r.addEventListener("change",function(n){// Get the selected option's value
let r=n.target.value;if("todas"===r){console.log(o),d(e,a[i].productsArr,!0),l(i);return}let c=t.filter(e=>e.brand.toLowerCase()==r.toLowerCase());l(i),console.log(c),d(e,c,!0);// Perform an action based on the selected value
})}for(;v<b;v++){if(t.length===v){console.log(),s[i].pageLimit=!0;break}s[i].pageLimit=!1,u(e,t[v],v),s[i].counterL=v}e.addEventListener("click",e=>{let t=e.target;if(t.classList.contains("quantity__container")||t.parentElement.classList.contains("quantity__container")){let e=t.closest(".quantity__container"),n=e.querySelector(".quantity"),o=parseInt(n.textContent);if("increment"===t.id){//const quantityElement = target.closest(".quantity");
let e=parseInt(n.textContent);e++,n.textContent="",n.textContent=e;// currentValue++;
}else"decrement"===t.id&&(console.log("menos"),o>1&&(o--,n.textContent=o))}}),// DROP DOWN EVENT LISTENER FOR THE SELECTION A BRAND
// Functions to check whether we have reached the limit of the page and the content should dissapear
c.classList.remove("invisible"),s[i].pageLimit?g.classList.add("invisible"):g.classList.remove("invisible");let f=[m,c,g];s[i].eventListener||(s[i].eventListener=!0,g.addEventListener("click",function(n){p(e,t,f),n.preventDefault()}),m.addEventListener("click",function(n){_(e,t,f),n.preventDefault()})),console.log("Caches",a)},p=function(e,t,n){let o=e.getAttribute("id"),r=n[0],i=n[1];n[2],console.log(s[o].counterL),e.innerHTML="",s[o].counterP+=10,s[o].counterL+=1,d(e,t,!1),s[o].pageCount+=1,i.textContent=`Page ${s[o].pageCount}`,r.classList.remove("invisible")},_=function(e,t,n){let o=n[0],r=n[1],i=n[2],c=e.getAttribute("id"),a=s[c].counterL,l=s[c].counterP;// container.innerHTML = "";
s[c].counterL=a+(l-a)-20,s[c].counterP-=10,d(e,t,!1),s[c].pageCount-=1,r.textContent=`Page ${s[c].pageCount}`,1==s[c].pageCount&&(o.classList.add("invisible"),i.classList.remove("invisible"))},g=function(e){let t=document.querySelector(".welcome__container"),n=document.querySelector(".welcome__container__btn"),o=document.querySelector(".welcome__message");t.classList.add("hidden"),n.classList.add("hidden"),o.classList.add("hidden");let r=document.querySelector(".column-container");r.classList.remove("hidden"),e.map(()=>"1fr").join(" ");let i="";console.log("length del array ",e.length),r.style.gridTemplateColumns=`repeat(${e.length},1fr)`,e.forEach((e,t)=>{console.log(),i+=`<div class="column column__${t+1} " id="${e}">
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
  </div>`}),r.insertAdjacentHTML("afterbegin",i)}});var s=c("jHh5l"),l=c("jeuMJ");let u={heb:!1,walmart:!1,soriana:!1,laComer:!1,ley:!1,costco:!1,bodegaAurrera:!1,sams:!1,chedrau:!1};document.querySelector(".column__1"),document.querySelector(".products__li__1");const d=function(n,o,r){t[e[o]].cartProducts.forEach(e=>{e.cart=!0}),(0,l.initialPageValues)(e[o]),u[e[o]]=!0,console.log(t[e[o]].cartProducts),(0,l.productListRender)(r,t[e[o]].cartProducts,!1);let i=document.querySelector(`#${e[o]}__prev`);document.querySelector(`#${e[o]}__btn__container`).classList.remove("invisible"),i.classList.add("invisible"),// column.insertAdjacentHTML("afterbegin", html);
n.textContent="Haz click aqui para ocultar todos los productos"},p=function(t,n,o){let r=document.querySelector(`#${e[n]}__disp`);document.querySelector(`#${e[n]}__btn__container`).classList.add("invisible"),r.textContent="Page 1",console.log("HOLA"),document.querySelector(`.products__li__${n+1}`).innerHTML="",u[e[n]]=!1,t.textContent="Haz click aqui para mostrar todos los productos"},_=function(t,n){let o;document.querySelector(`.column__${n+1}`);let r=document.querySelector(`.products__li__${n+1}`),i=document.querySelector(`.logo__${n+1}`);if(t){o=`
    <div class="subtotal">
    <h4>
    Tu total sera de $${t};
    </h4>
    <button class="product__addbtn btn cartbtn__${n+1}">	&plus;Haz click aqui para ver todos los productos</button>
    </div>`,// const botonProductos = document.querySelector(".cartbtn__1");
i.insertAdjacentHTML("beforeend",o);let c=document.querySelector(`.cartbtn__${n+1}`);c.addEventListener("click",function(t){t.preventDefault(),console.log(u),u[e[n]]?p(c,n,r):(d(c,n,r),console.log("ESTE?>"))})}},g=function(){let n=0;for(let[o,r]of e.entries()){// console.log(superMarket);
// console.log(superMarkets);
let e=0;for(;e<t[r].cartProducts.length;e++)n+=parseFloat((0,s.giveActualPrice)(t[r].cartProducts[e]))*parseInt(t[r].cartProducts[e]._quantity);_(Math.trunc(1e3*n)/1e3,o),n=0}return n};!function(){let n;localStorage.getItem("superMarketProducts")&&(t=JSON.parse(localStorage.getItem("superMarketProducts"))),console.log(t),localStorage.getItem("superMarkets")&&(e=JSON.parse(localStorage.getItem("superMarkets")));let o=document.querySelector(".column__container"),r=document.querySelector(".column-container");r.classList.remove("hidden"),r.style.gridTemplateColumns=`repeat(${e.length}, 1fr)`;for(let t=0;t<e.length;t++)n=`<div class="column column__${t+1}" id="${e[t]}">
 
    <div class="logo__space logo__${t+1}">
        <img class=logo__img
          src="./img/${e[t]}_logo.png"
          alt="${e[t]}"
          height="80px"
        />
      </div>
      <div class="products__li__${t+1}" id="${e[t]}"></div>
      <div class="btn__container" id="${e[t]}__btn__container">
        <button class="prev__btn btn invisible" id="${e[t]}__prev">Previous</button>
        <p class="page__display invisible" id="${e[t]}__disp">Page 1</p>
        <button class="next__btn btn invisible" id="${e[t]}__next">Next</button>
      </div>
    </div>`,o.insertAdjacentHTML("beforeend",n);g()}();//CART BUTTON SYSTEM TO ADD OR DECREASE
//# sourceMappingURL=cart.e9b9426f.js.map

//# sourceMappingURL=cart.e9b9426f.js.map
