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
    case actionTypes.DELETE_LOCATION:
      const filteredLocs = state.locations.filter(
        (loc) => loc.id !== action.location.id
      );
      return { ...state, locations: filteredLocs };
    default:
      return state;
  }
};

export default appReducer;
