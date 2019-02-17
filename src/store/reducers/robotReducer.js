import { CHANGE_SEARCHFIELD, GET_ROBOTS } from "../actions/constants";
const initialState = {
  searchField: "",
  robots: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return {
        ...state,
        searchField: action.payload
      };
    case GET_ROBOTS:
      return {
        ...state,
        robots: action.payload
      };
    default:
      return state;
  }
}
