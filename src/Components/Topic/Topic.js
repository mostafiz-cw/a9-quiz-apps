import React from "react";

const Topic = ({ topic }) => {
  console.log(topic);
  const { name, logo } = topic;
  return (
    <div className="w-1/4 bg-yellow-200">
      <div className="w-11/12  bg-cyan-100">
        <img className="w-3/4 mx-auto" src={logo} alt="logo" />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Topic;
