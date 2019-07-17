import React from "react";

function SpecialButton({special}) {
  return (
    <button key={special} onClick={() => console.log(special)}>{special}</button>
  );
};

export default SpecialButton;