import merge from 'lodash/merge';

const defaultState = {
  years: [],
  voterParties: [],
  candidateParties: [],
  states: [],
  graphType: ""
};

const FilterReducer = (state = defaultState, action) => {

  let newState = merge({}, state);

  switch (action.type){
    case "UPDATE_FILTER_STORE":
      newState = merge(newState, action.filters);
      return newState;
    default:
      return newState;
  }
}


export default FilterReducer;
