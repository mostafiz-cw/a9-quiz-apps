import React from "react";
import Alert2 from "../Modal Alert/Alert2";

const Option = ({ option,correctAnswer }) => {
  // console.log(option);
  return (
    <div>
      <ul onClick={Alert2} className="pb-6">
        <input type="radio" name="fav_language" id={option} />
        <label onClick={(e)=> Alert2(correctAnswer,e)} className="pl-4 text-xl" for={option}>{option}</label>
      </ul>
    </div>
  );
};

export default Option;
