import * as React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { AddLocation } from "./components/AddLocation";
import { Location } from "./components/Location";
import { addLocation, removeLocation } from "./store/actionCreators";
import { Dispatch } from "redux";

const App: React.FC = () => {
  const locations: readonly ILocation[] = useSelector(
    (state: LocationsState) => state.locations,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveLocation = React.useCallback(
    (location: ILocation) => dispatch(addLocation(location)),
    [dispatch]
  );

  return (
    <div className="container-outer">
      <h1>APP</h1>
      {locations.map((location: ILocation, index: number) => (
        <Location
          key={index}
          location={location}
          removeLocation={removeLocation}
        />
      ))}
      <AddLocation saveLocation={saveLocation} />
    </div>
  );
};

export default App;
