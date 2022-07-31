import React from "react";

const PatientInfo = ({ patient, doctorInfo }) => {
  return (
    <div>
      <h3>{patient.name}</h3>
      <h3>{patient.age}</h3>
      {doctorInfo.map((doctor, idx) => {
        return (
          <div key={idx}>
            <p>{doctor.name}</p>
            <p>{doctor.specialization}</p>
            <p>meidicine</p>
            <ul>
              <li>{doctor.medicine.recommended} </li>
              <li>{doctor.medicine.alternative} </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default PatientInfo;
