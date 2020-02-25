import React from "react";

function Transaction(props) {
  return (
    <tr className={props.transaction.type}>
      <td>{props.transaction.category}</td>
      <td>
        {new Intl.NumberFormat("en-ZW", {
          style: "currency",
          currency: "ZWL"
        }).format(props.transaction.amount)}
      </td>
    </tr>
  );
}

export default Transaction;
