import React from "react";

const CheckBox = ({ label, state, setState }) => {
  return (
    <>
      <label>{label}</label>
      <input type="checkbox" value={state} onChange={() => setState(!state)} />
    </>
  );
};

export default CheckBox;
