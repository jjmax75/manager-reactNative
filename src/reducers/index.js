/* eslint filenames/no-index: 0 */
import { combineReducers } from 'redux';

import Auth from './auth';

export default combineReducers({
  auth: Auth,
});
