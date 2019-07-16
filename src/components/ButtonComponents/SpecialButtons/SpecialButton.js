import React from "react";

const SpecialButton = ({special}) => {
  return (
    <button key={special}>{special}</button>
  );
};

export default SpecialButton;