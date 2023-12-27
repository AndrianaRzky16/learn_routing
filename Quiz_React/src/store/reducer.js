import { combineReducers } from "redux";

const initialState = {
import { useReducer } from 'react';
import { createStore } from 'redux';
    count: 0
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const useReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_USER' :
        return action.payload || {}
      default:
        return state;
    }
  }

  const store = createStore(
    combineReducers({
      counter: counterReducer,
      user: useReducer
    })
  )
  
  export default store;
  