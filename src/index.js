//  This is the entry point function
import { CurrentLocation } from "./current";
import { Search } from "./searched";


window.addEventListener("load", () => {
  CurrentLocation.getCo_ordinate();

});

let FormInfo = document.getElementById("submitCountry");
let cityName = document.getElementById("cityName");
let contentInfo = document.getElementById('content')
let footerInfo = document.getElementById('footer');



FormInfo.addEventListener("click", (e) => {
  e.preventDefault();
  contentInfo.innerHTML = '';
  footerInfo.innerHTML = ''

  let searchInfo = new Search();
  searchInfo.name = cityName.value;

  searchInfo.getSearchedLocation();

  cityName.value = '';
});




class Key {
  static theKey() {
    const Api_key = "cbda9d8d97a7e7bc3e963379b7d996ba";

    return Api_key;
  } 

}



export { Key };
