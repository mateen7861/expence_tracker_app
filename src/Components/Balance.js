import React, { useContext, Fragment } from "react";
import { GlobalContext } from "../Context/GlobalState";

export function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <Fragment>
      <h4>Your Balance</h4>
      <h1>PKR {total}</h1>
    </Fragment>
  );
}
