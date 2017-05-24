import merge from 'lodash/merge';

const defaultState = {
  years: "",
  voterParties: [],
  voteType: "",
  currentState: ""
};

const FilterReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type){
    case "UPDATE_FILTER_STORE":
      newState = merge(newState, action.filters);
      return newState;
    case "TOGGLE_PARTIES":
      newState["voterParties"] = toggleParty(newState["voterParties"], action.party);
      if(newState["voterParties"].length === 0){
        newState["currentState"] = "";
      }
      return newState;
    default:
      return newState;
  }
}

const toggleParty = (initialArray, addParty) => {
  if(initialArray.includes(addParty)){
    let idx = initialArray.indexOf(addParty);
    initialArray.splice(idx, 1);
  } else {
    initialArray.push(addParty)
  }
  return initialArray;
}

export default FilterReducer;
