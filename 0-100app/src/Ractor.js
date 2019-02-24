import React from "react";

const Ractor = ({ ractors }) => {
  const ractorsList = ractors.map(ractor => {
    return (
      <div className="ractor" key={ractor.id}>
        <div>Name: {ractor.name}</div>
        <div>Age:{ractor.age}</div>
      </div>
    );
  });
  return <div className="ractorList">{ractorsList}</div>;
};
export default Ractor;
