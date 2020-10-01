import {
  Search
} from "./searched";

class View {

  static display(info) {

    function setAttributes(el, attrs) {
      for (const key in attrs) {
        // eslint-disable-line no-restricted-syntax
        el.setAttribute(key, attrs[key]);
      }
    }

    console.log(info)
    let mainContainer = document.getElementById('content');

    //====== class container
    let divContainer = document.createElement('div');
    setAttributes(divContainer, {
      class: "container"
    })

    // ==== row continer

    let rowContainer = document.createElement('div');
    setAttributes(rowContainer, {
      class: "row"
    });

    let ColContainer = document.createElement('div');
    setAttributes(rowContainer, {
      class: "col-sm-12 location"
    });



    let PlaceName = document.createElement('span');
    setAttributes(PlaceName, {
      class: "place-name"
    });

    PlaceName.innerText = info.name;



    ColContainer.append(PlaceName);


    rowContainer.append(ColContainer);
    divContainer.append(rowContainer);

    //  ===== container two =====

    //====== class container
    let divContainer2 = document.createElement('div');
    setAttributes(divContainer2, {
      class: "container"
    });

    // ==== row continer

    let rowContainer2 = document.createElement('div');
    setAttributes(rowContainer2, {
      class: "row"
    });

    let ColContainer2 = document.createElement('div');
    setAttributes(ColContainer2, {
      class: "col-sm-12 location"
    });

    let tempContainer = document.createElement('span');
    setAttributes(tempContainer, {
      class: "Temp"
    });

    let temperature = info.main.temp

    let temperatureValue = (temp = temperature) => {
      let ans = temp - 273.15;

      ans = Math.round(ans)

      return ans
    }

    tempContainer.innerText = temperatureValue();

    let degreesIcon = document.createElement('span');
    setAttributes(degreesIcon, {
      class: "degreesIcon"
    });

    degreesIcon.innerHTML = '&#176';


    ColContainer2.append(tempContainer);
    ColContainer2.append(degreesIcon);

    rowContainer2.append(ColContainer2);
    divContainer2.append(rowContainer2);


    // ==== Container 3 ===

    //====== class container
    let divContainer3 = document.createElement('div');
    setAttributes(divContainer3, {
      class: "container"
    })

    // ==== row continer

    let rowContainer3 = document.createElement('div');
    setAttributes(rowContainer3, {
      class: "row"
    });

    let ColContainer3 = document.createElement('div');
    setAttributes(ColContainer3, {
      class: "col-sm-12 location"
    });


    let iconContainer = document.createElement('img');
    setAttributes(iconContainer, {
      src: `../assets/images/icons/${info.weather[0].icon}.png`,
    });

    ColContainer3.append(iconContainer);
    rowContainer3.append(ColContainer3);
    divContainer3.append(rowContainer3);
    mainContainer.append(divContainer);
    mainContainer.append(divContainer2);
    mainContainer.append(divContainer3);


    // === Footer display

    let footerMainCont = document.getElementById('footer');

    let divCont = document.createElement('div');
    setAttributes(divCont, {
      class: "container"
    });

    let rowCont = document.createElement('div');
    setAttributes(rowCont, {
      class: "row"
    });

    let colCont  = document.createElement('div');
    






  }





}

export {
  View
}