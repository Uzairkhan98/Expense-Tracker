import React from "react";
import { useState } from "react";
import { useTransactionsDispatch } from "../context/context";

export const AddTransactionForm = () => {
  const [userInput, setUserInput] = useState({});
  const dispatch = useTransactionsDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "added",
      ...userInput,
    });
  };

  return (
    <div className="w-full flex flex-col mt-8">
      <h2 className="text-2xl font-semibold capitalize border-b-2 pb-3 border-gray-300">
        Add new transaction
      </h2>
      <form typeof="submit" className="mt-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="text" className="text-2xl font-semibold capitalize">
            Text
          </label>
          <input
            type="text"
            name="text"
            id="text"
            onChange={(e) =>
              setUserInput((uI) => ({ ...uI, text: e.target.value }))
            }
            placeholder="Enter Text..."
            className="bg-white border-2 p-2 text-lg"
          />
          <label htmlFor="amount" className="text-lg font-semibold capitalize">
            <p>Amount</p> (negative - expense, positive - income)<p></p>
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            onChange={(e) =>
              setUserInput((uI) => ({ ...uI, amount: e.target.value }))
            }
            placeholder="Enter amount..."
            className="bg-white border-2 p-2 text-lg appearance-none"
          />
          <button
            type="submit"
            className="bg-indigo-500 p-2 capitalize font-semibold mt-2 mb-6 text-white"
            onClick={handleSubmit}
          >
            add transaction
          </button>
        </div>
      </form>
    </div>
  );
};
