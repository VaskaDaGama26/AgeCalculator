import React from "react";

const FormInput = ({ label, htmlFor, placeholder, type, name, id, value, onChange, error }) => {
  return (
    <label className={`input-item poppins-bold ${error ? "error" : ""}`} htmlFor={htmlFor}>
      {label}
      <input
        className="poppins-bold"
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        required
      />
      <span className="error-message poppins-regular-italic">
        {error || "Error Message"}
      </span>
    </label>
  );
};

export default FormInput;
