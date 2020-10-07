/* eslint-disable  max-len, no-restricted-syntax, guard-for-in, quotes, no-dupe-keys, camelcase, no-trailing-spaces, no-plusplus,  import/no-cycle */
import { CurrentLocation } from "./current";
import { Search } from "./searched";

window.addEventListener("load", () => {
  CurrentLocation.getCo_ordinate();
});

const FormInfo = document.getElementById("submitCountry");
const cityName = document.getElementById("cityName");
const contentInfo = document.getElementById("content");
const footerInfo = document.getElementById("footer");

FormInfo.addEventListener("click", (e) => {
  e.preventDefault();
  contentInfo.innerHTML = "";
  footerInfo.innerHTML = "";

  const searchInfo = new Search();
  searchInfo.name = cityName.value;

  searchInfo.getSearchedLocation();

  cityName.value = "";
});

// === Check Box

class Key {
  static theKey() {
    const ApiKey = "cbda9d8d97a7e7bc3e963379b7d996ba";

    return ApiKey;
  }

  static checkBoxValues() {
    const checkBox = document.getElementById("toggleBtn");

    return {
      checkBox,
      contentInfo,
    };
  }
}

export { Key }; // eslint-disable-line import/prefer-default-export
