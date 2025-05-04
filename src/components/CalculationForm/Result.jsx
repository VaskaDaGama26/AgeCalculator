import React from "react";

const Result = ({ result }) => {
  return (
    <div className="response">
      <p className="response-year poppins-extrabold-italic">
        <span className="accent">{result.years}</span>&nbsp;years
      </p>
      <p className="response-month poppins-extrabold-italic">
        <span className="accent">{result.months}</span>&nbsp;months
      </p>
      <p className="response-day poppins-extrabold-italic">
        <span className="accent">{result.days}</span>&nbsp;days
      </p>
    </div>
  );
};

export default Result;
