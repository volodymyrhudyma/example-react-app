import { combineReducers } from 'redux';
import layout from './layout';
import article from './article';

export default combineReducers({
  layout,
  article,
});
