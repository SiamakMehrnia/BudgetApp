import { useContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../context/AppContext";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    setName("");
    setCost("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col mt-[3rem]">
        <label htmlFor="name" className="text-[1.2rem]">
          Name
        </label>
        <input
          required="required"
          type="text"
          className="w-[70%] text-[1.4rem] rounded-lg p-[1rem] my-[1rem] bg-[#171528] border-2 border-white text-white"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="cost" className="text-[1.2rem]">
          Cost
        </label>
        <input
          required="required"
          type="number"
          className="w-[70%] text-[1.4rem] rounded-lg p-[1rem] my-[1rem] bg-[#171528] border-2 border-white text-white"
          id="cost"
          value={cost}
          onChange={(event) => setCost(event.target.value)}
        />
      </div>

      <button
        type="submit"
        className="btn btn-warning text-[1.2rem] mt-[3rem] px-[5rem] uppercase"
      >
        Save
      </button>
    </form>
  );
};

export default AddExpenseForm;
