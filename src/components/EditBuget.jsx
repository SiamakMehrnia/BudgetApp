import { useState } from "react";

const EditBudget = (props) => {
  const [value, setValue] = useState(props.budget);
  return (
    <>
      <input
        required="required"
        type="number"
        className="w-[65%] rounded-lg bg-inherit border-2 border-white px-[5px] text-[1rem]"
        id="name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        type="button"
        className="btn btn-error px-[10px]"
        onClick={() => props.handleSaveClick(value)}
      >
        Save
      </button>
    </>
  );
};

export default EditBudget;
