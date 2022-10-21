import React from "react";

export const AmountCard = () => {
  return (
    <div className="w-full p-5 border-2 mt-5 flex shadow-md">
      <div className="flex flex-col 3 w-1/2 items-center border-r-2 ">
        <h2 className="text-1xl font-semibold uppercase">Income</h2>
        <h2 className="text-2xl font-semibold uppercase text-green-500">
          $500.00
        </h2>
      </div>
      <div className="flex flex-col 3 w-1/2 items-center">
        <h2 className="text-1xl font-semibold uppercase">Expense</h2>
        <h2 className="text-2xl font-semibold uppercase text-red-500">
          $250.00
        </h2>
      </div>
    </div>
  );
};
