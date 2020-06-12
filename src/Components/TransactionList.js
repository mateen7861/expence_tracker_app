import React, { useContext, Fragment } from "react";
import { Transaction } from "./Transaction";

import { GlobalContext } from "../Context/GlobalState";

export function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <Fragment>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </Fragment>
  );
}
