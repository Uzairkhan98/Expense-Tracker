import React from "react";

export const TransactionList = () => {
  return (
    <div className="mt-10 w-full">
      <h2 className="text-2xl font-semibold capitalize border-b-2 pb-3 border-gray-300">
        History
      </h2>
      {transactions.map((t) => (
        <TransactionCard
          key={t.id}
          id={t.id}
          text={t.text}
          amount={t.amount}
        ></TransactionCard>
      ))}
    </div>
  );
};

const TransactionCard = ({ id, text, amount }) => {
  let color = amount > 0 ? "border-green-500" : "border-red-500";
  return (
    <div
      className={`bg-white w-full flex justify-between p-2 my-4 shadow-md border-r-4 ${color}`}
    >
      <p className="font-semibold capitalize">{text}</p>
      <p className="font-semibold">
        {amount > 0 && "+"}
        {amount}
      </p>
    </div>
  );
};

const transactions = [
  {
    id: 0,
    text: "Party",
    amount: 100,
  },
  {
    id: 1,
    text: "Test",
    amount: -200,
  },
  {
    id: 0,
    text: "Party",
    amount: 100,
  },
  {
    id: 1,
    text: "Test",
    amount: -200,
  },
];
