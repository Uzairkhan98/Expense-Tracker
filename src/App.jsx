import { BalanceHeader } from "./components/BalanceHeader";
import { AmountCard } from "./components/AmountCard";
import { TransactionList } from "./components/TransactionList";
import { AddTransactionForm } from "./components/AddTransactionForm";
import { TransactionsProvider } from "./context/context";

function App() {
  return (
    <div className="App relative">
      <div className="absolute h-full w-full bg-[#f7f7f7] flex justify-center mt-6 ">
        <div className=" sm:w-4/5 md:w-3/5 lg:w-2/5 xl:1/5 flex flex-col items-center  px-5">
          <TransactionsProvider>
            <BalanceHeader></BalanceHeader>
            <AmountCard></AmountCard>
            <TransactionList></TransactionList>
            <AddTransactionForm></AddTransactionForm>
          </TransactionsProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
