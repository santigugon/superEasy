import { productListRender } from "./renders.js";

const searchInput = document.querySelector(".search__field");
const searchForm = document.querySelector(".search");
const productListOne = document.querySelector(".products__li__1");

export let searchBar = function (array) {
  searchForm.addEventListener("submit", function (e) {
    window.location.href = "index.html";
    e.preventDefault();
    console.log("QUE PASA");
    let trimmedSearch = searchInput.value.replace(/^[+\s+]+/, "");
    trimmedSearch = trimmedSearch.replace(/[+\s+]$/, "");
    console.log(trimmedSearch);

    let searchValue = trimmedSearch.replaceAll(" ", "+");
    searchResults(searchValue, array);
    searchInput.value = "";
    console.log(searchValue);
  });
};

export let searchResults = async function (searchWord, array) {
  try {
    let response = await fetch(`http://127.0.0.1:3000/${searchWord}`);
    let json = await response.json();

    console.log("EL JSON AQUI");
    // console.log(json);
    array = json;
    console.log(array);

    productListRender(productListOne, array);
  } catch (err) {
    console.error(err);
  }
};
