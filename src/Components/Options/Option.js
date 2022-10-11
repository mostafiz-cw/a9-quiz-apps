import React from "react";

const Option = ({ option }) => {
  console.log(option);
  return (
    <div>
      <ul className="pb-6">
        <input type="radio" name="fav_language" id={option} />
        <label className="pl-4 text-xl" for={option}>{option}</label>
      </ul>
    </div>
  );
};

export default Option;
