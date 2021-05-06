import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

type Props = {
  location: ILocation;
  removeLocation: (location: ILocation) => void;
};

export const Location: React.FC<Props> = ({ location, removeLocation }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteLocation = React.useCallback(
    (location: ILocation) => dispatch(removeLocation(location)),
    [dispatch, removeLocation]
  );
  return (
    <div className="container-inner">
      <h2>{location.locationName}</h2>
      <button onClick={() => deleteLocation(location)}>Remove</button>
    </div>
  );
};
