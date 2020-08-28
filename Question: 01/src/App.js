import React from "react";
import "./styles.css";

export default function App() {
  const [num, setNum] = React.useState(0);
  const [res, setRes] = React.useState(0);

  const calculate_Fact = (num) => {
    if (num === 0) {
      return 1;
    } else {
      return num * calculate_Fact(num - 1);
    }
  };

  const onSumnit = (e) => {
    e.preventDefault();
    setRes(calculate_Fact(num));
  };

  return (
    <div className="App">
      <div>
        <h1>Factorial Calculator</h1>
        <form onSubmit={onSumnit}>
          <input
            type="number"
            placeholder="Enter a number..."
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
          <br />
          <br />
          <button>Calculate Factorial</button>
        </form>
        <h2>Factorial: {res}</h2>
      </div>
    </div>
  );
}
