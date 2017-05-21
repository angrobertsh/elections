import merge from 'lodash/merge';

const defaultState = {};

const DataReducer = (state = defaultState, action) => {

  let newState = merge({}, state);

  switch (action.type){
    default:
      return newState;
  }
}


export default DataReducer;
