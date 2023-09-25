import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div className="progress-done" style={{ width: progress + "%" }}></div>
    </div>
  );
};

export default ProgressBar;
