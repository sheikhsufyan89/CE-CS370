import { useState } from "react";

function BMICalculator() {
  const [unit, setUnit] = useState("metric");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [error, setError] = useState("");

  function calculateBMI() {
    if (weight === "" || height === "") {
      setError("Please enter both weight and height.");
      setBmi(null);
      return;
    }

    const w = Number(weight);
    const h = Number(height);

    if (!Number.isFinite(w) || !Number.isFinite(h) || w <= 0 || h <= 0) {
      setError("Weight and height must be positive numbers.");
      setBmi(null);
      return;
    }

    let result;

    if (unit === "metric") {
      result = w / ((h / 100) * (h / 100));
    } else {
      result = (w * 703) / (h * h);
    }

    setBmi(result);
    setError("");
  }

  function resetForm() {
    setWeight("");
    setHeight("");
    setBmi(null);
    setError("");
  }

  function changeUnit(newUnit) {
    setUnit(newUnit);
    resetForm();
  }

  function getCategory() {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi < 25) {
      return "Normal weight";
    } else if (bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }

  return (
    <div className="calculator">
      <h2>BMI Calculator</h2>
      <p>Enter your height and weight to calculate BMI.</p>

      <div className="unit-buttons">
        <button
          className={unit === "metric" ? "selected" : ""}
          onClick={() => changeUnit("metric")}
        >
          Metric
        </button>

        <button
          className={unit === "imperial" ? "selected" : ""}
          onClick={() => changeUnit("imperial")}
        >
          Imperial
        </button>
      </div>

      <div className="input-group">
        <label>Weight ({unit === "metric" ? "kg" : "lbs"})</label>

        <input
          type="number"
          placeholder="Enter weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Height ({unit === "metric" ? "cm" : "inches"})</label>

        <input
          type="number"
          placeholder="Enter height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      {error && <p className="error">{error}</p>}

      <div className="action-buttons">
        <button onClick={calculateBMI}>Calculate</button>
        <button onClick={resetForm}>Reset</button>
      </div>

      {bmi !== null && (
        <div className="result">
          <h3>Your BMI: {bmi.toFixed(1)}</h3>
          <p>Category: {getCategory()}</p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
