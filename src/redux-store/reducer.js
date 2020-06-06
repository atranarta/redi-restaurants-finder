import { actionTypes } from "./actionTypes";

const initialState = {
  restaurants: [],
  loading: false,
};

function restaurantsReducer(state = initialState, action) {
  //   console.log(action);
  //   console.log(state);

  switch (action.type) {
    case actionTypes.startLoading: {
      const newState = { ...state, loading: true };
      // console.log("LOADING");
      // console.log(newState);
      return newState;
    }
    case actionTypes.loadSuccess: {
      const newState = {
        ...state,
        restaurants: action.payload.restaurants,
        loading: false,
      };
      // console.log("RESTAURANTS");
      // console.log(newState);
      return newState;
    }
    default:
      return state;
  }
}

export default restaurantsReducer;
