import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BellNotification from "./BellNotification"; // Import the bell notification component

const RemainingBudget = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const remaining = budget - totalExpenses;

  return (
    <div>
      <span>Remaining: £{remaining}</span>
      <BellNotification remaining={remaining} />
    </div>
  );
};

export default RemainingBudget;
