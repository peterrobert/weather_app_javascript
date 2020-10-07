/* eslint-disable  max-len, no-restricted-syntax, import/no-cycle, guard-for-in, quotes, no-dupe-keys, camelcase, no-trailing-spaces, no-plusplus */
import { Key } from "./index";

class View {
  static display(info) {
    function setAttributes(el, attrs) {
      for (const key in attrs) {
        // eslint-disable-line no-restricted-syntax
        el.setAttribute(key, attrs[key]);
      }
    }
    if (info.cod === 200) {
      const mainContainer = document.getElementById("content");

      //= ===== class container
      const divContainer = document.createElement("div");
      setAttributes(divContainer, {
        class: "container",
      });

      // ==== row continer

      const rowContainer = document.createElement("div");
      setAttributes(rowContainer, {
        class: "row",
      });

      const ColContainer = document.createElement("div");
      setAttributes(rowContainer, {
        class: "col-sm-12 location",
      });

      const PlaceName = document.createElement("span");
      setAttributes(PlaceName, {
        class: "place-name",
      });

      PlaceName.innerText = info.name;

      ColContainer.append(PlaceName);

      rowContainer.append(ColContainer);
      divContainer.append(rowContainer);

      //  ===== container two =====

      //= ===== class container
      const divContainer2 = document.createElement("div");
      setAttributes(divContainer2, {
        class: "container",
      });

      // ==== row continer

      const rowContainer2 = document.createElement("div");
      setAttributes(rowContainer2, {
        class: "row",
      });

      const ColContainer2 = document.createElement("div");
      setAttributes(ColContainer2, {
        class: "col-sm-12 location",
      });

      const tempContainer = document.createElement("span");
      setAttributes(tempContainer, {
        class: "Temp",
      });

      const temperature = info.main.temp;
      const convertToFar = temperature - 273.15;
      const tempFar = Math.round(convertToFar);
      tempContainer.innerText = tempFar;
      const inputToggle = Key.checkBoxValues().checkBox;
      let ans;

      inputToggle.addEventListener("change", () => {
        if (inputToggle.checked) {
          ans = temperature - 273.15;
          ans = Math.round(ans);

          const degIcon = document.querySelector(".degreesIcon");
          degIcon.innerText = "";

          degIcon.innerHTML = "&#176";

          tempContainer.innerText = ans;
        } else {
          const convertToFar = ((temperature - 273.15) * 9) / 5 + 32;
          const degIcon = document.querySelector(".degreesIcon");
          degIcon.innerText = "";

          degIcon.innerHTML = "&#8457";

          const tempFar = Math.round(convertToFar);
          tempContainer.innerText = tempFar;
        }
      });

      const degreesIcon = document.createElement("span");
      setAttributes(degreesIcon, {
        class: "degreesIcon",
      });

      degreesIcon.innerHTML = "&#176";

      ColContainer2.append(tempContainer);
      ColContainer2.append(degreesIcon);

      rowContainer2.append(ColContainer2);
      divContainer2.append(rowContainer2);

      // ==== Container 3 ===

      //= ===== class container
      const divContainer3 = document.createElement("div");
      setAttributes(divContainer3, {
        class: "container",
      });

      // ==== row continer

      const rowContainer3 = document.createElement("div");
      setAttributes(rowContainer3, {
        class: "row",
      });

      const ColContainer3 = document.createElement("div");
      setAttributes(ColContainer3, {
        class: "col-sm-12 location",
      });

      const iconContainer = document.createElement("img");
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
      const mainFooter = document.getElementById("footer");

      const mainFooterCont = document.createElement("div");
      setAttributes(mainFooterCont, {
        class: "container",
      });

      const mainFooterRow = document.createElement("div");
      setAttributes(mainFooterRow, {
        class: "row",
      });

      const mainFooterCol = document.createElement("div");
      setAttributes(mainFooterCol, {
        class: "col-sm-12 col-md-12 info",
      });

      const mainFooterH1 = document.createElement("h3");
      setAttributes(mainFooterH1, {
        id: "main",
      });
      mainFooterH1.innerText = info.weather[0].main;

      mainFooterCol.append(mainFooterH1);

      const mainFooterSpan1 = document.createElement("span");
      mainFooterSpan1.innerText = "description:";

      mainFooterCol.append(mainFooterSpan1);

      const mainFooterSpan2 = document.createElement("span");
      mainFooterSpan2.innerText = info.weather[0].description;

      mainFooterCol.append(mainFooterSpan2);

      const mainFooterBR = document.createElement("br");
      mainFooterCol.append(mainFooterBR);

      const mainFooterSpan3 = document.createElement("span");
      mainFooterSpan3.innerText = "Humidity:";

      mainFooterCol.append(mainFooterSpan3);

      const mainFooterSpan4 = document.createElement("span");
      mainFooterSpan4.innerText = info.main.humidity;

      mainFooterCol.append(mainFooterSpan4);

      mainFooterRow.append(mainFooterCol);

      mainFooterCont.append(mainFooterRow);

      mainFooter.append(mainFooterCont);
    } else {
      const mainContainerError = document.getElementById("content");
      const valInfo = info.message;

      const structure = `
      <div class = "container error">
      <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">404!</h4>
      <p>${valInfo}</p>
      <hr>
      <p class="mb-0">Kindly search for another city</p>
    </div>
    </div>
    `;

      mainContainerError.innerHTML = structure;
    }
  }

  static async Information(Information) {
    const promise = new Promise((resolve) => {
      resolve(Information);
    });

    const result = await promise;

    this.display(result);
  }
}

export { View }; // eslint-disable-line import/prefer-default-export

/* eslint-enable no-restricted-syntax, guard-for-in, no-dupe-keys, camelcase, no-trailing-spaces, no-plusplus */
