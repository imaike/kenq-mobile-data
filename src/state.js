import cloneDeep from 'lodash/cloneDeep';
import { store } from 'react-easy-state';

export default store({
  setState(update) {
    const updateKeys = Object.keys(update);
    for (let i = 0; i < updateKeys.length; i += 1) {
      this[updateKeys[i]] = update[updateKeys[i]];
    }
  },

  getState(value) {
    const returnValue = this[value];
    const newReturnValue = cloneDeep(returnValue);
    return newReturnValue;
  },
  /* App */
  displayAdmin: true,
  displayStatements: false,
  displayDemonstration: false,
  displayData: false,
  displayDelete: false,
  displayPresort: false,
  displaySort: false,
  displayPostsort: false,
  displaySurvey: false,

  /* Admin */
});
