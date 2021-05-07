import * as React from "react";

type Props = { saveLocation: (location: ILocation | any) => void };

export const AddLocation: React.FC<Props> = ({ saveLocation }) => {
  const [location, setLocation] = React.useState<ILocation | {}>();
  const formRef = React.useRef<HTMLInputElement | null>(null);

  const handleLocationChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLocation({ [e.currentTarget.id]: e.currentTarget.value });
  };

  const addNewLocation = (e: React.FormEvent) => {
    console.log("addlocation addNewLocation...", location);
    e.preventDefault();
    saveLocation({ ...location, id: Date.now() });
    if (formRef && formRef.current) {
      formRef.current.value = "";
    }
  };

  return (
    <form className="Add-new-location" onSubmit={addNewLocation}>
      <input
        ref={formRef}
        type="text"
        id="locationName"
        placeholder="Location Name"
        onChange={handleLocationChange}
      />
    </form>
  );
};
