import React from "react";
import Period from "./Period";

function Transactions(props) {
  const periods = Object.keys(props.transactions);
  return periods.map(period => {
    return (
      <Period key={period} period={period} transactions={props.transactions} />
    );
  });
}

export default Transactions;
