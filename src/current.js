import { Key } from "./index";
import { View } from "./view";

class CurrentLocation {

  static getCo_ordinate() {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(this.myLocation);

    } else {

      alert('Geolocation is not supported by this browser! Press okey to continue')

     
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

      View.display(weatherData);
      
      console.log(weatherData.weather[0].icon)
    }

    getLocation();

 
  }

}

export { CurrentLocation };
