import React from "react";
import ProgressBar from "../../components/ProgressBar";
import { useState } from "react";

const ProgressBarPage = () => {
  const [progress, setProgress] = useState(10);
  const handleProgress = (key, value) => {
    if (key === "in") {
      const currentProgress = progress + value;
      if (currentProgress >= 0 && currentProgress <= 100) {
        setProgress(currentProgress);
      }
    }
    if (key === "de") {
      const currentProgress = progress - value;
      if (currentProgress >= 0 && currentProgress <= 100) {
        setProgress(currentProgress);
      }
    }
  };

  return (
    <>
      <ProgressBar progress={progress} />
      <button onClick={() => handleProgress("in", 10)}>Increament</button>
      <button onClick={() => handleProgress("de", 10)}>Decreament</button>
    </>
  );
};

export default ProgressBarPage;
