import { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

  useEffect(() => {
    setfilteredExpenses(expenses);
  }, [expenses]);

  const handleChange = (event) => {
    const searchResults = expenses.filter((filteredExpense) =>
      filteredExpense.name.toLowerCase().includes(event.target.value)
    );
    setfilteredExpenses(searchResults);
  };

  return (
    <>
      <input
        type="text"
        className="w-[70%] text-[1.4rem] rounded-lg p-[1rem] my-[1rem] bg-[#171528] border-2 border-white text-white"
        placeholder="Type to search..."
        onChange={handleChange}
      />
      <ul className="bg-[#D6DBD2] p-10 my-[3rem] rounded-xl w-[70%]">
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;
