import * as actionTypes from "./actionTypes";

const initialState: LocationsState = {
  locations: [{ id: 1, locationName: "New York City" }],
};

const appReducer = (
  state: LocationsState = initialState,
  action: LocationAction
): LocationsState => {
  switch (action.type) {
    case actionTypes.ADD_LOCATION:
      return { ...state, locations: [...state.locations, action.location] };
    default:
      return state;
  }
};

export default appReducer;
