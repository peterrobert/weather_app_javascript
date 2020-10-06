/* eslint-disable  max-len, no-restricted-syntax, guard-for-in, quotes, no-dupe-keys, camelcase, no-trailing-spaces, no-plusplus,  import/no-cycle */
import { View } from './view';

class Logic {
   
  constructor(_infor){

    this.infor = _infor

  }

  conversionTemperature(){

    const dataIn = this.infor;

    console.log(dataIn);

  }

  static logicInfo(data) {

    View.Information(data);

  }


}

export { Logic }; // eslint-disable-line import/prefer-default-export
