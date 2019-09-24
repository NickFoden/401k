import React, { useState } from "react";
import "./pageStyles.scss";

const LandingPage = props => {
  const [state, updateState] = useState({
    goal: 0,
    percent: 4,
    salary: 60000,
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
  const renderMatch = () => {
    const { salary, percent } = state;
    return Math.floor((salary * percent) / 100);
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
          <h4>
            Check Contribution: <span className="total">${renderTotal()}</span>
          </h4>
          <h4>
            Match: <span>${renderMatch()}</span>
          </h4>
        </form>
      </section>
      <footer>
        To reach the % match at your company, how much do you need to put aside
        per check based on 26 checks in a year?
      </footer>
    </div>
  );
};

export default LandingPage;
