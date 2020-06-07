import { actionTypes } from "./actionTypes";

const initialState = {
  restaurants: [],
  filteredRestaurants: [],
  loading: false,
};

function restaurantsReducer(state = initialState, action) {

  switch (action.type) {
    case actionTypes.startLoading: {
      const newState = { ...state, loading: true };
      return newState;
    }
    case actionTypes.loadSuccess: {
      const newState = {
        ...state,
        restaurants: action.payload.restaurants,
        loading: false,
      };

      return newState;
    }
    case actionTypes.filterAction: {
      const newState = {
        ...state,
        filteredRestaurants: action.payload.filteredRestaurants,
      };

      return newState;
    }
    default:
      return state;
  }
}

export default restaurantsReducer;
