import { combineReducers } from 'redux';
import FilterReducer from './filter_reducer';
import DataReducer from './data_reducer';

const RootReducer = combineReducers({
  filters: FilterReducer,
  data: DataReducer
});

export default RootReducer;
