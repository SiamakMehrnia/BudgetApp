const ViewBudget = (props) => {
  return (
    <>
      <span>Budget: £{props.budget}</span>
      <button
        type="button"
        className="text-[#E75A7C]"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </>
  );
};

export default ViewBudget;
