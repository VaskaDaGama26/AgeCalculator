import React from "react";
import arrow from "../../assets/icon-arrow.svg";
import FormInput from "../UI/FormInput";
import useAgeCalculator from "../../hooks/useAgeCalculator";

const CalculationForm = () => {
  const { inputs, errors, result, handleChange, calculate } =
    useAgeCalculator();

  const inputsConfig = [
    { label: "Day", placeholder: "DD", type: "number", name: "day", id: "day" },
    {
      label: "Month",
      placeholder: "MM",
      type: "number",
      name: "month",
      id: "month",
    },
    {
      label: "Year",
      placeholder: "YYYY",
      type: "number",
      name: "year",
      id: "year",
    },
  ];

  return (
    <div className="container">
      <form onSubmit={(e) => e.preventDefault()} className="form">
        <div className="inputs-wrapper">
          <div className="inputs">
            {inputsConfig.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={inputs[input.name]}
                onChange={handleChange}
                error={errors[input.name]}
              />
            ))}
          </div>
        </div>

        <div className="divider-button-wrapper">
          <hr className="divider divider-left" />
          <button type="button" className="button" onClick={calculate}>
            <img src={arrow} alt="Calculate" />
          </button>
          <hr className="divider divider-right" />
        </div>
      </form>

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
    </div>
  );
};

export default CalculationForm;
