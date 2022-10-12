import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-16 bg-white flex justify-between">
     <div className="flex md:ml-24 ml-5">
        <div className="mt-4">
            <p className="text-violet-900 text-xl font-bold">QUIZ MANIA</p>
        </div>
     </div>    
      <div className="flex justify-end md:mr-24 mr-4">
        <div className="mt-4 text-lg font-semibold">
          <Link className="pr-7 text-violet-900" to="/quiz">Quiz</Link>
          <Link className="pr-7 text-violet-900" to="/statistics">Statistics</Link>
          <Link className="pr-7 text-violet-900" to="/blog">Blog</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
