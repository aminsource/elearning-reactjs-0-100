import React from "react";

const Ractor = ({ ractors }) => {
  // const ractorsList = ractors.map(ractor => {
  //   if (ractor.age > 30) {
  //     return (
  //       <div className="ractor" key={ractor.id}>
  //         <div>Name: {ractor.name}</div>
  //         <div>Age:{ractor.age}</div>
  //       </div>
  //     );
  //   } else {
  //     return null;
  //   }
  // });
  const ractorsList = ractors.map(ractor => {
    return ractor.age > 25 ? (
      <div className="ractor" key={ractor.id}>
        <div>Name: {ractor.name}</div>
        <div>Age:{ractor.age}</div>
      </div>
    ) : null;
  });
  return <div className="ractorList">{ractorsList}</div>;
};
export default Ractor;
