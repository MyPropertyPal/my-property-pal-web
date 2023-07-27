import React from "react";
import deleteProperty from "@/app/utils/deleteProperties";
import { useAuthContext } from "@/app/context/AuthContext";
function Property({ prop }) {
  const { user } = useAuthContext();
  const deleteProp = () => {
    deleteProperty(user, prop);
  };
  return (
    <>
      <div className="flex">
        <div className="flex flex-col">
          <div className="bg-slate-100 m-2">
            Street Address: {prop.streetAddress}
          </div>
          <div className="bg-slate-100 m-2">
            Property Price: {prop.propType}
          </div>
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
