/* eslint-disable  max-len, no-restricted-syntax, guard-for-in, quotes, no-dupe-keys, camelcase, no-trailing-spaces, no-plusplus,  import/no-cycle */
import { View } from "./view";

class Logic {
  static logicInfo(data) {
    View.Information(data);
  }
}

export { Logic }; // eslint-disable-line import/prefer-default-export
