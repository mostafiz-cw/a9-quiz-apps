import React from "react";

const Option = ({ option }) => {
  console.log(option);
  return (
    <div>
      <ul>
        <li>{option}</li>
      </ul>
    </div>
  );
};

export default Option;
