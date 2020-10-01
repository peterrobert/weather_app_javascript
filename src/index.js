//  This is the entry point function
import { CurrentLocation } from "./current";
import { Search  } from "./searched";

class Key {
  static theKey() {
    const Api_key = "cbda9d8d97a7e7bc3e963379b7d996ba";

    return Api_key;
  }
}

window.addEventListener("load", () => {
  CurrentLocation.getCo_ordinate();
});


let FormInfo = document.getElementById("submitCountry");
let cityName = document.getElementById("cityName");

FormInfo.addEventListener("click", (e) => {
  e.preventDefault();

  let searchInfo = new Search();
  searchInfo.name = cityName.value;

 searchInfo.getSearchedLocation();
 
});

export { Key };
