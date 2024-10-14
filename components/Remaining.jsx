import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import BellNotification from './BellNotification'; // Import the bell notification component

const RemainingBudget = () => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	const remaining = budget - totalExpenses;
	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
		<div className={`alert p-4 ${alertType} flex justify-between items-center`}>
			<span>Remaining: £{remaining}</span>
			<BellNotification remaining={remaining} />
		</div>
	);
};

export default RemainingBudget;