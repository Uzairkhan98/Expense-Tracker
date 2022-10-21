import { BalanceHeader } from "./components/BalanceHeader";
import { AmountCard } from "./components/AmountCard";
import { TransactionList } from "./components/TransactionList";
import { AddTransactionForm } from "./components/AddTransactionForm";

function App() {
  return (
    <div className="App">
      <div className="h-full w-full bg-[#f7f7f7] flex justify-center mt-6 ">
        <div className="flex flex-col items-center  px-5">
          <h1 className="text-2xl font-semibold">Expense Tracker</h1>
          <BalanceHeader></BalanceHeader>
          <AmountCard></AmountCard>
          <TransactionList></TransactionList>
          <AddTransactionForm></AddTransactionForm>
        </div>
      </div>
    </div>
  );
}

export default App;
