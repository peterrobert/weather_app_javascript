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
    })


    let locationIcon = document.createElement('i')
    setAttributes(locationIcon, {
      class:"fa fa-map-marker",
      'aria-hidden': "true"
    })

    mainContainer.append(locationIcon);


    // let iconContainer = document.createElement('img');
    // setAttributes(iconContainer, {
    //   src: `../assets/images/icons/${info.weather[0].icon}.png`,
    // });

    //  mainContainer.append(iconContainer)
   

  }
}

export {
  View
}