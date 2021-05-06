interface ILocation {
  id: number;
  locationName: string;
}

type LocationsState = {
  locations: ILocation[];
};

type LocationAction = {
  type: string;
  location: ILocation;
};

type DispatchType = (args: LocationAction) => LocationAction;
