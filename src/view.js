class View {

  static display(info) {
    function setAttributes(el, attrs) {
      for (const key in attrs) {
        // eslint-disable-line no-restricted-syntax
        el.setAttribute(key, attrs[key]);
      }
    }

    console.log(info);
    let mainContainer = document.getElementById("content");
  

    //====== class container
    let divContainer = document.createElement("div");
    setAttributes(divContainer, {
      class: "container",
    });

    // ==== row continer

    let rowContainer = document.createElement("div");
    setAttributes(rowContainer, {
      class: "row",
    });

    let ColContainer = document.createElement("div");
    setAttributes(rowContainer, {
      class: "col-sm-12 location",
    });

    let PlaceName = document.createElement("span");
    setAttributes(PlaceName, {
      class: "place-name",
    });

    PlaceName.innerText = info.name;

    ColContainer.append(PlaceName);

    rowContainer.append(ColContainer);
    divContainer.append(rowContainer);

    //  ===== container two =====

    //====== class container
    let divContainer2 = document.createElement("div");
    setAttributes(divContainer2, {
      class: "container",
    });

    // ==== row continer

    let rowContainer2 = document.createElement("div");
    setAttributes(rowContainer2, {
      class: "row",
    });

    let ColContainer2 = document.createElement("div");
    setAttributes(ColContainer2, {
      class: "col-sm-12 location",
    });

    let tempContainer = document.createElement("span");
    setAttributes(tempContainer, {
      class: "Temp",
    });

    let temperature = info.main.temp;

    let temperatureValue = (temp = temperature) => {
      let ans = temp - 273.15;

      ans = Math.round(ans);

      return ans;
    };

    tempContainer.innerText = temperatureValue();

    let degreesIcon = document.createElement("span");
    setAttributes(degreesIcon, {
      class: "degreesIcon",
    });

    degreesIcon.innerHTML = "&#176";

    ColContainer2.append(tempContainer);
    ColContainer2.append(degreesIcon);

    rowContainer2.append(ColContainer2);
    divContainer2.append(rowContainer2);

    // ==== Container 3 ===

    //====== class container
    let divContainer3 = document.createElement("div");
    setAttributes(divContainer3, {
      class: "container",
    });

    // ==== row continer

    let rowContainer3 = document.createElement("div");
    setAttributes(rowContainer3, {
      class: "row",
    });

    let ColContainer3 = document.createElement("div");
    setAttributes(ColContainer3, {
      class: "col-sm-12 location",
    });

    let iconContainer = document.createElement("img");
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
     let mainFooter = document.getElementById('footer');

    let mainFooterCont = document.createElement('div');
     setAttributes(mainFooterCont, {
      class: "container",
    });

    let mainFooterRow = document.createElement('div');
     setAttributes(mainFooterRow, {
      class: "row",
    });

    let mainFooterCol = document.createElement('div');
     setAttributes(mainFooterCol, {
      class: "col-sm-12 col-md-12 info",
    });

    let mainFooterH1 = document.createElement('h3');
    setAttributes(mainFooterH1, {
      id: "main",
    });
    mainFooterH1.innerText = info.weather[0].main;
    
    mainFooterCol.append(mainFooterH1);

    let mainFooterSpan1 = document.createElement('span');
    mainFooterSpan1.innerText = 'description:';

    mainFooterCol.append(mainFooterSpan1);

    let mainFooterSpan2 = document.createElement('span');
    mainFooterSpan2.innerText = info.weather[0].description;

    mainFooterCol.append(mainFooterSpan2);

    let mainFooterBR = document.createElement('br');
    mainFooterCol.append(mainFooterBR);


    let mainFooterSpan3 = document.createElement('span');
    mainFooterSpan3.innerText = 'Humidity:';

    mainFooterCol.append(mainFooterSpan3);

    let mainFooterSpan4 = document.createElement('span');
    mainFooterSpan4.innerText = info.main.humidity;

    mainFooterCol.append(mainFooterSpan4);


    mainFooterRow.append(mainFooterCol);

    mainFooterCont.append(mainFooterRow);

    mainFooter.append(mainFooterCont);

  }

  static async Information(Information) {

    let promise = new Promise((resolve) => {
      resolve(Information);
    });

    let result = await promise;

    this.display(result);
  };


}

export {
  View
};