import { AppProvider } from "../context/AppContext.jsx";
import Budget from "../components/Budget.jsx";
import ExpenseTotal from "../components/ExpenseTotal.jsx";
import ExpenseList from "../components/ExpenseList.jsx";
import AddExpenseForm from "../components/AddExpenseForm";
import RemainingBudget from "../components/Remaining.jsx";

const App = () => {
  return (
    <AppProvider>
      <div className="container p-[5rem]">
        <header>
          <h1 className="text-[3.2rem] font-bold">My Budget Planner</h1>
        </header>
        <div className="flex mt-[3rem] gap-[2rem]">
          <div className="w-[20%] card bg-[#BBC7A4] text-[1.6rem] text-[#100E1B] p-[2rem]">
            <Budget />
          </div>
          <div className="card bg-[#D6DBD2] text-[1.6rem]  text-[#100E1B] p-[2rem]">
            <RemainingBudget />
          </div>
          <div className="card bg-[#F2F5EA] text-[1.6rem]  text-[#100E1B] p-[2rem]">
            <ExpenseTotal />
          </div>
        </div>
        <div className="my-[3rem]">
          <h3 className="text-[1.8rem]">Expenses</h3>
          <div>
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
