/* eslint-disable  max-len, no-restricted-syntax, guard-for-in, quotes, no-dupe-keys, camelcase, no-trailing-spaces, no-plusplus,  import/no-cycle */
import { Key } from './index';
import { Logic } from './logic';

class Search {
  constructor(_name) {
    this.name = _name;
  }


  getSearchedLocation() {
    const cityName = this.name;

    async function getLocation() {
      const response = await fetch(


        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${Key.theKey()}`,
        {
          mode: 'cors',
        },

      );

      const weatherData = await response.json();


      Logic.logicInfo(weatherData);
        
   
    }

    getLocation();
  }
}


export { Search }; // eslint-disable-line import/prefer-default-export