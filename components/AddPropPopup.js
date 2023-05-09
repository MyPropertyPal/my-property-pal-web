import React from "react";

function AddPropPopup({ showPopup }) {
  return (
    <div className="h-[400px] w-[400px] bg-slate-300">
      <div>This is the add prop popup</div>
      <button className="h-10 w-10 bg-blue-500" onClick={() => showPopup()}>
        hide
      </button>
    </div>
  );
}

export default AddPropPopup;
