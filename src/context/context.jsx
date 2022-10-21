import { createContext, useContext, useReducer } from "react";
import { transactionReducer } from "./reducer";

const TransactionsContext = createContext(0);
const DispatchContext = createContext(null);

export const useTransactions = () => useContext(TransactionsContext);
export const useTransactionsDispatch = () => useContext(DispatchContext);

export const TransactionsProvider = ({ children }) => {
  const [transactions, dispatch] = useReducer(transactionReducer, []);
  return (
    <TransactionsContext.Provider value={transactions}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TransactionsContext.Provider>
  );
};
