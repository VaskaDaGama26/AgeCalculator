import { useState } from "react";

const useAgeCalculator = () => {
  const [inputs, setInputs] = useState({ day: "", month: "", year: "" });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState({ years: "--", months: "--", days: "--" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const isValidDate = (day, month, year) => {
    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === Number(year) &&
      date.getMonth() === Number(month) - 1 &&
      date.getDate() === Number(day)
    );
  };

  const validate = () => {
    const newErrors = {};
    const { day, month, year } = inputs;

    if (!day) newErrors.day = "This field is required";
    if (!month) newErrors.month = "This field is required";
    if (!year) newErrors.year = "This field is required";

    if (!day || !month || !year) {
      setErrors(newErrors);
      return false;
    }

    const numDay = Number(day);
    const numMonth = Number(month);
    const numYear = Number(year);
    const now = new Date();

    if (numMonth < 1 || numMonth > 12) {
      newErrors.month = "Must be a valid month";
    }

    if (numDay < 1 || numDay > 31) {
      newErrors.day = "Must be a valid day";
    }

    if (numYear > now.getFullYear()) {
      newErrors.year = "Must be in the past";
    }

    if (!isValidDate(numDay, numMonth, numYear)) {
      newErrors.day = "Must be a valid date";
    }

    const inputDate = new Date(numYear, numMonth - 1, numDay);
    if (inputDate > now) {
      newErrors.year = "Date must be in the past";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculate = () => {
    if (!validate()) return;

    const { day, month, year } = inputs;
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setResult({ years, months, days });
  };

  return {
    inputs,
    errors,
    result,
    handleChange,
    calculate,
  };
};

export default useAgeCalculator;
