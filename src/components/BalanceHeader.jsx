import React from "react";

const BalanceHeader = () => {
  const amount = 160.0;
  return (
    <div className="w-full mt-10">
      <h2 className="text-1xl font-semibold uppercase">your balance</h2>
      <h1 className="text-3xl font-semibold uppercase">${amount}</h1>
    </div>
  );
};

export { BalanceHeader };
