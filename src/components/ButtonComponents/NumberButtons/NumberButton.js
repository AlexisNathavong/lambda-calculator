import React from "react";

const NumberButton = ({num}) => {
  return (
    <button key={num}>{num}</button>
  );
};

export default NumberButton;