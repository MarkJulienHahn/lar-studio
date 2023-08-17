import React from "react";

const StudioInfoTeamEntry = ({ person, i, setImageIndex }) => {
  return (
    <p
      className="teamEntry"
      onMouseEnter={() => setImageIndex(i)}
      onMouseLeave={() => setImageIndex(null)}
      key={i}
    >
      {person.name}
    </p>
  );
};

export default StudioInfoTeamEntry;