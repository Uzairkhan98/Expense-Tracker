import { BalanceHeader } from "./components/BalanceHeader";
import { AmountCard } from "./components/AmountCard";
import { TransactionList } from "./components/TransactionList";
import { AddTransactionForm } from "./components/AddTransactionForm";

function App() {
  return (
    <div className="App">
      <div className="h-screen w-screen bg-[#f7f7f7] flex justify-center items-center">
        <div className="w-2/5 flex flex-col items-center">
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
