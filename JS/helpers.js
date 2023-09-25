export const giveActualPrice = function (obj) {
  let { price } = obj;
  // console.log(price);

  let prices = price.split("$");

  prices = prices.filter((price) => price !== "");

  prices = prices.map((price) => {
    return price.replace(/[^0-9.]/g, "");
  });

  if (prices.length > 1) {
    for (let i = 0; i < prices.length; i++) {
      // console.log(prices[i]);
      if (parseFloat(prices[i - 1]) > parseFloat(prices[i])) {
        prices[i - 1] = prices[i];
        prices[i] = prices[i - 1];
        console.log("PRECIOS AQUI", prices);
      }
    }
  }
  const uniquePrices = [...new Set(prices)];
  // console.log(parseFloat(prices));

  return uniquePrices;
};

export const calculateDiscountPercentage = function (pricesArr) {
  const [price1, price2] = pricesArr;

  // Calculate the percentage discount
  const discountPercentage = Math.round(((price1 - price2) / price1) * 100);

  // Calculate the discounted price

  // Return the discounted price and discount percentage as an object
  return discountPercentage;
};

export function removeElementByClassNameAndId(className, id) {
  const element = document.querySelector(`.${className}#${id}`);

  if (element) {
    element.parentNode.removeChild(element);
  }
}

export function removeElementFromArray(array, elementToRemove) {
  const index = array.indexOf(elementToRemove);

  if (index !== -1) {
    array.splice(index, 1);
  }
}

const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

// incrementButton.addEventListener("click", increment);
// decrementButton.addEventListener("click", decrement);

export function increment() {
  const quantityElement = document.querySelector(".quantity");
  let currentValue = parseInt(quantityElement.textContent, 10);
  currentValue++;
  quantityElement.textContent = currentValue;
}

export function decrement() {
  const quantityElement = document.querySelector(".quantity");

  let currentValue = parseInt(quantityElement.textContent, 10);
  if (currentValue > 1) {
    currentValue--;
    quantityElement.textContent = currentValue;
  }
}
export function addOrUpdateProduct(products, newProduct) {
  // Find the index of the existing product in the array, if any
  const productIndex = products.findIndex(
    (product) => product._id === newProduct._id
  );

  if (productIndex !== -1) {
    // If the product exists, increment the quantity property
    products[productIndex]._quantity =
      parseInt(products[productIndex]._quantity) +
      parseInt(newProduct._quantity);
    console.log(products[productIndex]._quantity);
  } else {
    // If the product does not exist, add it to the array
    products.push(newProduct);
  }
}
