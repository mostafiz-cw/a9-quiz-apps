import React from "react";

const Option = ({ option }) => {
  console.log(option);
  return (
    <div>
      <ul>
        <input type="radio" name="fav_language" id={option} />
        <label for={option}>{option}</label>
      </ul>
    </div>
  );
};

export default Option;
