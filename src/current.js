import { Key } from "./index";

class CurrentLocation {

  static getCo_ordinate() {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(this.myLocation);
      
    } else {

      console.log("Geolocation is not supported by this browser.");
    }
  }

  static myLocation(position) {

    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    async function getLocation() {
      const response = await fetch(

        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${Key.theKey()}`,
        {
          mode: "cors",
        }

      );

      const weatherData = await response.json();

      console.log(weatherData);
    }

    getLocation();
  }
}

export { CurrentLocation };
