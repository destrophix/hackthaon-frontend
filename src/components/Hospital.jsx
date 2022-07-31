import React from "react";

const Hospital = () => {
  return (
    <div className="hospital text-warning  bg-secondary bg-gradient mh-100">
      <h1>Hospital Dashboard</h1>
      <p>
        <a href="/create/patient">
          <p className="text-light">create patient</p>
        </a>
      </p>
      <p>
        <a href="/create/doctor">
          <p className="text-light">create doctor</p>
        </a>
      </p>
    </div>
  );
};

export default Hospital;
