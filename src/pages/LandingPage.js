import React, { useState } from "react";
import "./pageStyles.scss";

const LandingPage = props => {
  const [state, updateState] = useState({
    goal: 0,
    percent: 3,
    salary: 75000,
    today: Date.now(),
    year: new Date().getFullYear()
  });
  const handleChange = e => {
    const { name, value } = e.target;

    updateState({
      ...state,
      [name]: value
    });
  };
  const renderTotal = () => {
    const { salary, percent } = state;
    return Math.floor((salary * percent) / 100 / 26);
  };
  return (
    <div className="page_container">
      <header className="header_landing">
        <h1>401k Calculator</h1>
      </header>
      <section>
        <form className="landing_page_form">
          <label>
            Salary:
            <input
              type="number"
              value={state.salary}
              name="salary"
              onChange={handleChange}
            />
          </label>
          <label>
            Percentage:
            <input
              type="number"
              value={state.percent}
              name="percent"
              onChange={handleChange}
            ></input>
          </label>
          <h4>Check Contribution: ${renderTotal()}</h4>
        </form>
      </section>
    </div>
  );
};

export default LandingPage;
