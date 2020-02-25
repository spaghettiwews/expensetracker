import React from "react";
import Transaction from "./Transaction";
import { getTextDate } from "./helpers";

function Period(props) {
  return (
    <table>
      <thead>
        <tr>
          <td colSpan="2">{getTextDate(props.period)}</td>
        </tr>
      </thead>
      <tbody>
        {props.transactions[props.period].map(transaction => {
          return <Transaction key={transaction.id} transaction={transaction} />;
        })}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            {new Intl.NumberFormat("en-ZW", {
              style: "currency",
              currency: "ZWL"
            }).format(
              props.transactions[props.period].reduce((total, current) => {
                if (current.type === "income") {
                  total = total + current.amount;
                } else if (current.type === "expense") {
                  total = total - current.amount;
                }
                return total;
              }, 0)
            )}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Period;
