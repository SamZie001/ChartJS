import React from "react";
import BarChart from "./components/BarChart";
import LOGO from './images/logo.svg'

const App=()=> {
  return (
    <div className="App">
      <div className="balance">

        <div className="details">
          <p>My balance</p>
          <p><span>$921.48</span></p>
        </div>
        
        <div className="logo">
          <img src={LOGO} alt="Logo" />
        </div>

      </div>

      <div className="chart-display">
        <div className="title">
          <p style={{fontSize: '1.8rem', fontWeight: 'bold', color: 'hsl(25, 47%, 15%)'}}>Spending - Last 7 days</p>
        </div>

          <BarChart />

        <div className="barrier"></div>

        <div className="last">
          <div className="last-1">
            <p>Total this month</p>
            <h1>$478.33</h1>
          </div>

          <div className="last-2">
            <h3>+2.4%</h3>
            <p>from last month</p>
          </div>
        </div>
        
      </div>

    </div>
  );
}

export default App;
