import React from "react";
import { useTransactions } from "../context/context";

const BalanceHeader = () => {
  const amount = useTransactions().reduce((acc, val) => acc + val.amount, 0);
  return (
    <>
      <h1 className="text-2xl font-semibold">Expense Tracker</h1>
      <div className="w-full mt-10">
        <h2 className="text-1xl font-semibold uppercase">your balance</h2>
        <h1 className="text-3xl font-semibold uppercase" key={amount}>
          ${amount}
        </h1>
      </div>
    </>
  );
};

export { BalanceHeader };
