import React from "react";
import BarChart from "./components/BarChart";
import LOGO from './images/logo.svg'

const App=()=> {
  return (
    <div className="App">
        <div className="balance">

          <div className="details">
            <p>My balance</p>
            <span> <p>$921.48</p> </span>
          </div>
          <div className="logo">
            <img src={LOGO} alt="Logo" />
          </div>

        </div>

      <div className="chart-display">
        <div className="title">
          <p>Spending - Last 7 days</p>
        </div>

          <BarChart />

        <div className="barrier"></div>

        <div className="summary">
          <div className="total">
            <p className="br">Total this month</p>
            <span> <p>$478.33</p> </span>
          </div>

          <div className="previous">
            <p style={{color:'hsl(25, 47%, 15%)',fontWeight: '700'}}>+2.4%</p>
            <p className="br">from last month</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
