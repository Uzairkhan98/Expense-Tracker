import React from "react";
import { useTransactions } from "../context/context";

export const AmountCard = () => {
  const { income, expense } = useTransactions().reduce(
    (acc, val) =>
      val.amount > 0
        ? { ...acc, income: acc.income + val.amount }
        : { ...acc, expense: acc.expense + val.amount },
    { expense: 0, income: 0 }
  );
  return (
    <div className="w-full p-5 border-2 mt-5 flex shadow-md">
      <div className="flex flex-col 3 w-1/2 items-center border-r-2 ">
        <h2 className="text-1xl font-semibold uppercase">Income</h2>
        <h2 className="text-2xl font-semibold uppercase text-green-500">
          ${income}
        </h2>
      </div>
      <div className="flex flex-col 3 w-1/2 items-center">
        <h2 className="text-1xl font-semibold uppercase">Expense</h2>
        <h2 className="text-2xl font-semibold uppercase text-red-500">
          ${expense}
        </h2>
      </div>
    </div>
  );
};
