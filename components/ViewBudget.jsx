const ViewBudget = (props) => {
  return (
    <>
      <span>Budget: £{props.budget}</span>
      <button type="button" className="btn" onClick={props.handleEditClick}>
        Edit
      </button>
    </>
  );
};

export default ViewBudget;
