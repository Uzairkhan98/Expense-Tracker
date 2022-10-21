let id = 0;

const Transaction = ({ text, amount }) => {
  id++;
  return {
    id,
    text,
    amount,
  };
};

export const transactionReducer = (transactions, action) => {
  switch (action.type) {
    case "added": {
      return [
        ...transactions,
        Transaction({ text: action.text, amount: Number(action.amount) }),
      ];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
