import React from "react";
import { Link } from 'react-router-dom';

const Experience = ({ place, desc }) => {
	return (
		<div className="border rounded-md">
			<h3 className="px-2 py-1">Kinh nghiệm du lịch ${place}</h3>
            <p>${desc}</p>
            <Link to={'/blog'}>Xem thêm</Link>
		</div>
	);
};

export default Experience;
