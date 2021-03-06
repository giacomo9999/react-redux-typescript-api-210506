import * as actionTypes from "./actionTypes";

export const addLocation = (location: ILocation) => {
  console.log("addLocation...", location);
  const action: LocationAction = { type: actionTypes.ADD_LOCATION, location };
  console.log(action);
  return simulateHttpRequest(action);
};

export const removeLocation = (location: ILocation) => {
  const action: LocationAction = {
    type: actionTypes.DELETE_LOCATION,
    location,
  };
  return simulateHttpRequest(action);
};

export const simulateHttpRequest = (action: LocationAction) => {
  return (dispatch: DispatchType) => {
    setTimeout(() => dispatch(action), 500);
  };
};
