import React from "react";

function Property({ prop }) {
  const deleteProp = () => {
    alert("Property deleted");
  };
  return (
    <>
    <div className="flex">
<div className="flex flex-col">

      <div className="bg-slate-100 m-2">
        Street Address: {prop.streetAddress}
      </div>
      <div className="bg-slate-100 m-2">Property Price: {prop.propType}</div>
      <div className="bg-slate-100 m-2">
        Purchase Price: {prop.purchasePrice ? prop.purchasePrice : "N/A"}
      </div>
</div>
      <button className="bg-slate-100 m-2" onClick={deleteProp}>
        Delete
      </button>
    </div>
    </>
  );
}

export default Property;
