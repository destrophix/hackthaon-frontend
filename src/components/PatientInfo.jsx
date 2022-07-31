import React from "react";

const PatientInfo = ({ patient, doctorInfo }) => {
  return (
    <div className="">
      <p>name: {patient.name}</p>
      <p>age: {patient.age}</p>
      {doctorInfo.map((doctor, idx) => {
        return (
          <div key={idx} className="border border-3">
            <p>name: {doctor.name}</p>
            <p>specialization: {doctor.specialization}</p>
            <p>medicine:</p>
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
