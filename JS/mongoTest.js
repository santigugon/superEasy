const mongoose = require("mongoose");

const db = "mongodb://localhost:27017/superEasy";

let hebProducts = [
  {
    price: "$238.00",
    brand: "BACARDI",
    description: "Ron Carta Blanca 750 ml",
    imgSrc:
      "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/7/5/7501008660195_1-1_small.jpg",
  },
  {
    price: "$263.00",
    brand: "BACARDI",
    description: "Ron Raspberry 750 ml",
    imgSrc:
      "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/7/5/7501008645246_1-1_small.jpg",
  },
  {
    price: "$292.00",
    brand: "BACARDI",
    description: "Ron Carta Blanca 980 ml",
    imgSrc:
      "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/7/5/7501008660201_1-1_small.jpg",
  },
  {
    price: "$263.00",
    brand: "BACARDI",
    description: "Ron Limón 750 ml",
    imgSrc:
      "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/7/5/7501008616130_1-1_small.jpg",
  },
  {
    price: "$204.00",
    brand: "BACARDI",
    description: "Ron Spiced 750 ml",
    imgSrc:
      "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/4/0/403904_small.jpg",
  },
  {
    price: "$293.00",
    brand: "BACARDI",
    description: "Ron Añejo 980 ml",
    imgSrc:
      "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/1/3/138237_small.jpg",
  },
  {
    price: "$477.00",
    brand: "BACARDI",
    description: "Ron Carta Blanca 1.75 lt",
    imgSrc:
      "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/7/5/7501008660218_1-1_small.jpg",
  },
  {
    price: "$263.00",
    brand: "BACARDI",
    description: "Ron Mango Chile 750 ml",
    imgSrc:
      "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/8/1/814184_small.png",
  },
];

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    // console.log(con.connections);
    console.log("CONNECTION SUCCESFUL");
  })
  .catch((err) => console.log(err));

const Product = mongoose.model("bacardi", {
  price: String,
  brand: String,
  description: String,
  imgSrc: String,
});

//INSERTING A LIST OF ITEMS
Product.insertMany(hebProducts)
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });

// Getting the items from the DB
Product.find({}, function (err, jamones) {
  if (err) {
    console.error(err);
  } else {
    // Assign the result to a variable
    const jamsArr = jamones;
    console.log(jamones);
    return jamsArr;
  }
});

//DELETE AN EXISTING COLLECTION
Product.deleteMany({}, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("Collection emptied");
  }
});

// const testProduct = new Product({
//   price: "$263.00",
//   brand: "BACARDI",
//   description: "Ron Mango Chile 750 ml",
//   imgSrc:
//     "https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/8/1/814184_small.png",
// });
// testProduct
//   .save()
//   .then((save) => console.log("DocSaved"))
//   .catch((err) => console.log("Errrorr"));
