import * as React from "react";

type Props = { saveLocation: (location: ILocation | any) => void };

export const AddLocation: React.FC<Props> = ({ saveLocation }) => {
  const handleLocationChange = () => {
    return "blah";
  };
  const addNewLocation = () => {
    return "blah";
  };

  return (
    <form className="Add-new-location" onSubmit={addNewLocation}>
      <input
        type="text"
        id="locationName"
        placeholder="Location Name"
        onChange={handleLocationChange}
      />
    </form>
  );
};
