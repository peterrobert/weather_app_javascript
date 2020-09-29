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


    let iconContainer = document.createElement('img');
    setAttributes(iconContainer, {
      src: `../assets/images/icons/${info.weather[0].icon}.png`,
    });

     mainContainer.append(iconContainer)
   

  }
}

export {
  View
}