const axios = require("axios");
const cheerio = require("cheerio");

const phantom = require("phantom");
const cors = require("cors");

const mongoose = require("mongoose");
const db = "mongodb://localhost:27017/superEasy";

let hebProducts = [];
const puppeteer = require("puppeteer");
class Product {
  constructor(price, brand, description, imgSrc) {
    this.price = price;
    this.brand = brand;
    this.description = description;
    this.imgSrc = imgSrc;
  }
}

const connectionCache = {};

// MONGOOSE CONNECTION
const mongooseConnection = function (db) {
  if (!connectionCache[db]) {
    // Check if the cache already contains a connection for this database
    const connection = mongoose.createConnection(
      `mongodb://localhost:27017/${db}`,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    );
    connection.on("error", (error) => {
      console.error(`Error connecting to ${db}:`, error);
    });
    connection.once("open", () => {
      console.log(`Connected to ${db}`);
    });
    connectionCache[db] = connection; // Store the connection in the cache
  }
};

const storingNewProduct = function (arr) {
  Product.insertMany(arr)
    .then((data) => console.log("stored in db correctly"))
    .catch((err) => {
      console.log(err);
    });
};

const searchItem = async function (searchWord, db) {
  mongooseConnection(db);

  let dbStored = false;
  let productList;
  let lowerSearchWord = searchWord.toLowerCase();

  if (!connectionCache[db][lowerSearchWord]) {
    const productSchema = new mongoose.Schema({
      price: String,
      brand: String,
      description: String,
      imgSrc: String,
    });

    try {
      connectionCache[db][lowerSearchWord] =
        connectionCache[db].model(lowerSearchWord); // Store the model in the cache
    } catch (err) {
      connectionCache[db][lowerSearchWord] = connectionCache[db].model(
        lowerSearchWord,
        productSchema
      ); // Store the model in the cache
    }
  }

  await connectionCache[db][lowerSearchWord].find(
    {},
    function (err, searchWord) {
      if (err) {
        console.error(err);
      } else {
        productList = searchWord;
        return productList;
      }
    }
  );

  if (productList && productList[0]) {
    console.log("\nProduct succesfuly found in the database \n");

    dbStored = true;
    return productList; //WE end the execution because we already got the products from the DATABASE
  }

  switch (db) {
    case "superEasy":
      productList = await fetchhebProducts(lowerSearchWord);
      break;
    case "superEasySoriana":
      productList = await fetchsorianaProducts(lowerSearchWord);
      break;
    case "superEasylaComer":
      productList = await fetchlaComerProducts(lowerSearchWord);

      break;
    case "superEasyWalmart":
      productList = await fetchwalmartProducts(lowerSearchWord);

      break;
  }
  console.log(db);

  console.log("SEARCH DONE CORRECTLY");
  // console.log(productList);
  await connectionCache[db][lowerSearchWord].insertMany(productList);
  console.log("stored in db correctly");

  return await connectionCache[db][lowerSearchWord].find(
    {},
    function (err, searchWord) {
      //WE LOOK FOR THE PRODUCT TO SEE IF IT IS INSIDE OUR DATABASE
      if (err) {
        console.error(err);
      } else {
        // Assign the result to a variable
        productList = searchWord;
        //console.log(searchWord);
        return productList;
      }
    }
  );
};

const fetchhebProducts = async (word) => {
  //Function to scrape products from the webpage of HEB
  try {
    const { data } = await axios.get(
      `https://www.heb.com.mx/${word}?_q=${word}&map=ft`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36",
        },
      }
    );

    const $ = cheerio.load(data);

    let searchObjects = [];

    $(
      "article.vtex-product-summary-2-x-element.vtex-product-summary-2-x-element--shelf-product"
    ).each((index, el) => {
      const products = $(el);
      // console.log(products);

      const title = products
        .find("span.vtex-product-summary-2-x-productBrand")
        .text();
      // descriptions.push(title);
      const price = products.find("div.price-shelf").text();
      // prices.push(price);
      const imgSrc = products
        .find("img.vtex-product-summary-2-x-image--img-shelf")
        .attr("src");
      // photos.push(photo);
      const brand = products
        .find("div.vtex-product-summary-2-x-productBrandLogoSpacer")
        .text();

      let searchResult = new Product(price, brand, title, imgSrc);

      searchObjects.push({
        price: price,
        brand: brand,
        description: title,
        imgSrc: imgSrc,
      });
    });
    console.log(searchObjects);

    return searchObjects;
  } catch (err) {
    console.log(err);
  }
};

const fetchsorianaProducts = async (word) => {
  //Function to scrape products from the webpage of HEB
  try {
    const { data } = await axios.get(
      `http://www.soriana.com/buscar?q=${word}`,
      {
        // headers: {
        //   "User-Agent":
        //     "Mozilla/5.3 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36",
        // },
        timeout: 10000,
      }
    );

    const $ = cheerio.load(data);
    // console.log(data);

    let searchObjects = [];

    $("div.product").each((index, el) => {
      const products = $(el);
      // console.log(products);

      let title = products.find("a.product-tile--link").text();
      // descriptions.push(title);
      title = title.replace(/\n/g, "");
      let price = products.find("span.price-plp").text();
      price = price.replace(/\n/g, "");

      // prices.push(price);
      const imgSrc = products
        .find("img.tile-image.content-visibility-auto.is-new-plp-enabled")
        .attr("data-src");

      // photos.push(photo);
      let brand = products.find("a.product-tile--brand-link").text();
      brand = brand.replace(/\n/g, "");

      let searchResult = new Product(price, brand, title, imgSrc);

      searchObjects.push({
        price: price,
        brand: brand,
        description: title,
        imgSrc: imgSrc,
      });
    });
    console.log("Objeto", searchObjects);
    return searchObjects;
  } catch (err) {
    console.log(err);
  }
};

const fetchlaComerProducts = async (word) => {
  try {
    let searchObjects = [];
    const puppeteer = require("puppeteer-extra");

    // add stealth plugin and use defaults (all evasion techniques)
    const StealthPlugin = require("puppeteer-extra-plugin-stealth");
    puppeteer.use(StealthPlugin());

    // puppeteer usage as normal
    const browser = await puppeteer.launch({ headless: true });

    console.log("Running tests..");
    const page = await browser.newPage();
    await page.goto(
      `https://www.lacomer.com.mx/lacomer/#!/item-search/287/${word}/false?p=1&t=0&succId=287&succFmt=100`
    );
    console.log("timer");

    await page.waitForTimeout(5000);
    // await page.screenshot({ path: "laComerresult.png", fullPage: true });
    const htmlContent = await page.content();
    // console.log(htmlContent);
    await browser.close();

    console.log(`All done, check the screenshot. ✨`);
    const $ = cheerio.load(htmlContent);
    $("div.li_prod_picture.ng-scope").each((index, el) => {
      const products = $(el);
      // console.log(el);

      // console.log(products);

      const title = products.find("strong.ng-binding").text();
      // descriptions.push(title);
      const price = products.find("span.precio_normal.ng-binding").text();
      // prices.push(price);

      const priceArray = price.match(/\$\d+\.\d{2}\sM\.N\./g);

      // Remove any duplicates from the array
      const formattedPriceString = priceArray
        .map((price) => price.replace(/\sM\.N\./, "").replace(/\s/g, ""))
        .join("");

      const imgSrc = products.find("img.li_prod_mosaic").attr("src");
      // photos.push(photo);
      const brand = products.find("p.ng-binding").text();
      const trimmedBrand = brand.trim();

      // Split the string by the newline character
      const splitBrand = trimmedBrand.split("\n");

      // Remove any leading/trailing whitespace from each part of the split string
      const cleanedBrand = splitBrand.map((part) => part.trim());

      // Extract the brand and size values
      const [brandName, size] = cleanedBrand;
      const titleAndPortion = title + " " + size;

      let searchResult = new Product(price, brand, title, imgSrc);

      searchObjects.push({
        price: formattedPriceString,
        brand: brandName,
        description: titleAndPortion,
        imgSrc: imgSrc,
      });
    });

    console.log("Objeto", searchObjects, "MODIFICACIONES LISTAS");
    return searchObjects;
  } catch (err) {
    console.log(err);
  }
};

const fetchwalmartProducts = async (word) => {
  let searchObjects = [];
  try {
    const puppeteer = require("puppeteer-extra");

    // add stealth plugin and use defaults (all evasion techniques)
    const StealthPlugin = require("puppeteer-extra-plugin-stealth");
    puppeteer.use(StealthPlugin());

    // puppeteer usage as normal
    const browser = await puppeteer.launch({ headless: true });
    console.log("Running tests..");
    const page = await browser.newPage();
    await page.goto(`https://super.walmart.com.mx/search?q=${word}`);
    await page.waitForTimeout(5000);
    // await page.screenshot({ path: "walmartresult.png", fullPage: true });
    const htmlContent = await page.content();
    // console.log(htmlContent);
    await browser.close();

    console.log(`All done, check the screenshot. ✨`);

    const $ = cheerio.load(htmlContent);
    $("div.h-100.pb1-xl.pr4-xl.pv1.ph1").each((index, el) => {
      const products = $(el);
      // console.log(products);

      let title = products.find("span.w_q67L").text();

      // Extract the title and current price using a regular expression
      const currentPriceMatches = title.match(/precio actual\s*\$([\d\.]+)/i);
      const titleWithoutPrice = title
        .replace(/precio actual\s*\$[\d\.]+/i, "")
        .trim();

      // Extract the original price if it exists
      const originalPriceMatches = title.match(/Costaba\s*\$([\d\.]+)/i);
      const originalPrice = originalPriceMatches
        ? originalPriceMatches[1]
        : null;

      let price = products
        .find(" div.mr1.mr2-xl.b.black.lh-copy.f5.f4-l")
        .text();
      if (originalPrice) {
        price = `$${originalPrice}`; // 'Original price: $87.50'
      }

      // prices.push(price);
      const imgSrc = products.find("img.absolute.top-0.left-0").attr("src");

      // photos.push(photo);
      let brand = products.find("div.b.f6.black.mr1.mt2.mb1").text();
      // brand = brand.replace(/\n/g, "");

      let searchResult = new Product(price, brand, title, imgSrc);

      searchObjects.push({
        price: price,
        brand: brand,
        description: titleWithoutPrice,
        imgSrc: imgSrc,
      });
    });
    let prices = [];
    $("div.relative").each((index, el) => {
      const products = $(el);
      const imgSrc = products.find("img.absolute.top-0.left-0").attr("src");

      prices.push(imgSrc);
    });

    console.log("Objeto", searchObjects);
    return searchObjects;
  } catch (err) {
    console.log(err);
  }
};

// MONGO DB
// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/superEasy"; // Replace with your own MongoDB URL

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;

//   const myCollection = db.collection("hebProduct");
//   myCollection.insertMany(hebProducts, function (err, result) {
//     if (err) throw err;
//     console.log("Array inserted into database!");
//     db.close();
//   });
// });
// let product = searchItem("sandia");

// EXPRESS CONNECTION
// SERVER INITIALIZATION
const express = require("express");
const app = express();

const port = 3000;

// const cors = require("cors");

app.use(cors());

// SEARCHING FOR OBJECTS
//HEB SEARCH
app.get(`/heb/:word`, async (req, res) => {
  const word = req.params.word;

  try {
    let result = await searchItem(word.toLowerCase(), "superEasy");
    console.log(result + "Resultado");

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
});

//SORIANA SEARCH
app.get(`/soriana/:word`, async (req, res) => {
  const word = req.params.word;

  try {
    let result = await searchItem(word.toLowerCase(), "superEasySoriana");
    console.log(result + "Resultado");

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
});

// LA COMER SEARCH
app.get(`/laComer/:word`, async (req, res) => {
  const word = req.params.word;

  try {
    let result = await searchItem(word.toLowerCase(), "superEasylaComer");
    console.log(result + "Resultado");

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
});

// Walmart SEARCH
app.get(`/walmart/:word`, async (req, res) => {
  const word = req.params.word;

  try {
    let result = await searchItem(word.toLowerCase(), "superEasyWalmart");
    console.log(result + "Resultado");

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

//127.0.0.1:3000
// searchItem("sabritas");
//fetchwalmartProducts("queso");
// fetchlaComerProducts("cerveza");
// fetchhebProducts("sabritas");

// const UNABLEDfetchlaComerProducts = async (word) => {
//   //Function to scrape products from the webpage of HEB
//   try {
//     const { data } = await axios.get(
//       `https://www.lacomer.com.mx/lacomer/#!/item-search/287/${word}/false?p=1&t=0&succId=287&succFmt=100`,
//       {
//         headers: {
//           "User-Agent":
//             "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36",
//         },
//       }
//     );
//     (async () => {
//       const $ = cheerio.load(data);
//       console.log($.html());

//       const content = $.html();
//       const browser = await puppeteer.launch();
//       const page = await browser.newPage();

//       await page.setContent(content);

//       // Take a screenshot of the loaded content
//       await page.screenshot({ path: "screenshotLaComer.png" });

//       await browser.close();
//     })();
//     let searchObjects = [];

//     $("div.li_prod_picture.ng-scope").each((index, el) => {
//       const products = $(el);
//       // console.log(el);

//       // console.log(products);

//       const title = products.find("strong.ng-binding").text();
//       // descriptions.push(title);
//       const price = products.find("span.precio_normal.ng-binding").text();
//       // prices.push(price);
//       const imgSrc = products.find("img.li_prod_mosaic").attr("src");
//       // photos.push(photo);
//       const brand = products.find("p.ng-binding").text();

//       let searchResult = new Product(price, brand, title, imgSrc);

//       searchObjects.push({
//         price: price,
//         brand: brand,
//         description: title,
//         imgSrc: imgSrc,
//       });
//     });
//     console.log(searchObjects);

//     return searchObjects;
//   } catch (err) {
//     console.log(err);
//   }
// };
