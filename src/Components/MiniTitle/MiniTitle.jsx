import React from "react";
import "./MiniTitle.css";

const MiniTitle = (props) => {
  return (
    <div className="mini-title mt-20 ml-20 text-[#ff6f61] font-semibold capitalize">
      <h2>{props.minititle}</h2>
    </div>
  );
};

export default MiniTitle;
