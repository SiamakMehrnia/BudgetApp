import { AppProvider } from "./context/AppContext.jsx";
import Budget from "./components/Budget.jsx";
import ExpenseTotal from "./components/ExpenseTotal.jsx";
import ExpenseList from "./components/ExpenseList.jsx";
import AddExpenseForm from "./components/AddExpenseForm.jsx";
import RemainingBudget from "./components/Remaining.jsx";

const App = () => {
  return (
    <AppProvider>
      <div className="container p-[5rem]">
        <header>
          <h1 className="text-[3.2rem] font-bold">My Budget Planner</h1>
        </header>
        <div className="w-full flex items-start flex-col gap-[2rem] mx-auto lg:flex-row mt-[3rem] lg:items-center lg:gap-[5.5rem]">
          <div className="w-[70%] lg:w-[20%] card bg-[#171528] text-[1.6rem] text-white border-2 border-white p-[2rem]">
            <Budget />
          </div>
          <div className="w-[70%] lg:w-[20%] text-center card bg-[#272343] text-[1.6rem]  text-white border-2 border-white p-[2rem]">
            <RemainingBudget />
          </div>
          <div className="w-[70%] lg:w-[20%] text-center card bg-[#37315E] text-[1.6rem]  text-white border-2 border-white p-[2rem]">
            <ExpenseTotal />
          </div>
        </div>
        <div className="my-[3rem]">
          <h3 className="text-[1.8rem]">Expenses</h3>
          <div>
            <ExpenseList />
          </div>
        </div>
        <div className="my-[3rem]">
          <h3 className="text-[1.8rem]">Add Expense</h3>
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
