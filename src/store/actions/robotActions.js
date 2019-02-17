import { CHANGE_SEARCHFIELD, GET_ROBOTS } from "./constants";

export const searchFieldChange = text => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
});

export const getAllRobots = () => {
  return async function(dispatch) {
    const request = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then(res => res.json());

    dispatch({
      type: GET_ROBOTS,
      payload: request
    });
  };
};
