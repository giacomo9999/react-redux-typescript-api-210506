import * as React from "react";
import { AddLocation } from "./components/AddLocation"
import { Location } from "./components/Location";

function App() {
  return (
    <div className="container-outer">
      <h1>APP</h1>
      <AddLocation saveLocation={() => console.log("Saving location")} />
      <Location location={{ id: -999, locationName: "Nowhere" }} />
    </div>
  );
}

export default App;
