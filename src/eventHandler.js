// eventHandler.js

import { input } from "./htmlElements.js";
import { fetchResults } from "./dataFetcher.js";

let targetLocation = "";

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    targetLocation = input.value;
    fetchResults(targetLocation);
  }
});
