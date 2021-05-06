import * as React from "react";

type Props = { location: ILocation };

export const Location: React.FC<Props> = ({ location }) => {
  return <div className="container-inner">{location.locationName}</div>;
};
