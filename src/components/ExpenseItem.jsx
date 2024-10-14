import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className="text-[1.4rem] text-[#100E1B] flex justify-between border-b-2 py-[1rem]">
      {props.name}
      <div className="flex items-center">
        <span className="badge text-[1.2rem] badge-outline mr-3 p-[7px]">
          £{props.cost}
        </span>
        <TiDelete size="1.5em" onClick={handleDeleteExpense} />
      </div>
    </li>
  );
};

export default ExpenseItem;
