import React, { useEffect, useState } from 'react';
import { FaBell } from 'react-icons/fa'; // Using react-icons for the bell icon

const BellNotification = ({ remaining }) => {
	const [showAlert, setShowAlert] = useState(false);

	// Effect to trigger the notification when the remaining budget is less than or equal to 50
	useEffect(() => {
		if (remaining <= 50) {
			setShowAlert(true);
		} else {
			setShowAlert(false);
		}
	}, [remaining]);

	return (
		<div className="fixed top-4 right-4"> {/* Positioning the bell at the top-right */}
			<div className="relative">
				<FaBell
					className={`text-3xl ${
						showAlert ? 'text-red-600 animate-bounce' : 'text-gray-500'
					}`} 
				/>
				{showAlert && (
					<div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
						Alert: Low Budget
					</div>
				)}
			</div>
		</div>
	);
};

export default BellNotification;