/* eslint-disable  max-len, no-restricted-syntax, guard-for-in, quotes, no-dupe-keys, camelcase, no-alert, no-trailing-spaces, no-plusplus,  import/no-cycle */
import {
  Key
} from './index';
import {
  Logic
} from './logic';

class CurrentLocation {


  static getCo_ordinate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.myLocation);
    } else {
      alert('Geolocation is not supported by this browser! Press okey to continue');
    }
  }

  static myLocation(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    async function getLocation() {

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${Key.theKey()}`, {
          mode: 'cors',
        },

      );

      const weatherData = await response.json();
      Logic.logicInfo(weatherData);



    }

    getLocation();

 
  }


}

export {
  CurrentLocation
}; // eslint-disable-line import/prefer-default-export