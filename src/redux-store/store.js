import { createStore } from "redux";
import restaurantsReducer from "./reducer";

const store = createStore(restaurantsReducer);

export default store;
