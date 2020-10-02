import { Key } from "./index";
import { View } from "./view";
import { Logic } from "./logic";

class Search {

    constructor(_name){

        this.name = _name;

    }


    getSearchedLocation(){

        let cityName = this.name;

        async function getLocation() {
        
            
             const response = await fetch(
                

               `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${Key.theKey()}`,
              {
                mode: "cors",
              }
      
            );
      
            const weatherData = await response.json();
      
            
           Logic.logicInfo(weatherData)
          }
      
          getLocation();
    }

}


export{Search}