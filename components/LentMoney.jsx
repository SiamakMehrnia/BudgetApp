import React, { useState } from 'react';

const LentMoney = () => {
  const [lending, setLending] = useState({ friendName: '', amount: '', date: '' });
  const [loans, setLoans] = useState([]);

  const handleInputChange = (e) => {
    setLending({
      ...lending,
      [e.target.name]: e.target.value
    });
  };

  const handleAddLoan = (e) => {
    e.preventDefault();
    if (lending.amount && lending.friendName && lending.date) {
      setLoans([...loans, lending]);
      setLending({ friendName: '', amount: '', date: '' });
    }
  };

  const handleDeleteLoan = (index) => {
    const newLoans = loans.filter((_, i) => i !== index);
    setLoans(newLoans);
  };

  return (
    <div className="bg-gray-800 text-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-6">
      <h3 className="text-2xl font-bold mb-4">Track Loans to Friends</h3>
      <form onSubmit={handleAddLoan}>
        <div className="mb-4">
          <label className="block text-gray-400 font-bold mb-2">Friend's Name:</label>
          <input
            type="text"
            name="friendName"
            value={lending.friendName}
            onChange={handleInputChange}
            placeholder="Enter friend's name"
            className="input input-bordered input-dark w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 font-bold mb-2">Amount Lent (€):</label>
          <input
            type="number"
            name="amount"
            value={lending.amount}
            onChange={handleInputChange}
            placeholder="Enter amount in Euros"
            className="input input-bordered input-dark w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 font-bold mb-2">Date:</label>
          <input
            type="date"
            name="date"
            value={lending.date}
            onChange={handleInputChange}
            className="input input-bordered input-dark w-full"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-dark w-full">Add Loan</button>
      </form>

      <div className="mt-6">
        <h4 className="text-xl font-semibold mb-4">Loans List</h4>
        <ul className="space-y-2">
          {loans.map((loan, index) => (
            <li key={index} className="flex justify-between items-center">
              {loan.date} - {loan.friendName} was lent {loan.amount} €
              <button onClick={() => handleDeleteLoan(index)} className="btn btn-error btn-dark btn-xs">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LentMoney;