import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
//   console.log(topic);
  const { name, logo,id } = topic;
  return (
    <div className="md:w-1/4 bg-slate-50">
      <div className="md:w-11/12  bg-cyan-100 mx-auto my-3">
        <img className="md:w-3/4 mx-auto" src={logo} alt="logo" />
      </div>
      <div className="flex py-3 justify-between mx-3 items-center">
        <p>{name}</p>
        <button className="p-2 bg-violet-600 text-white rounded"> <Link to={`/quiz/${id}`}>Start Practise</Link></button>
      </div>
    </div>
  );
};

export default Topic;
