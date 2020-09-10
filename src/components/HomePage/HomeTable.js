import React from "react";

const HomeTable = ({ category, description, date, money }) => {
	return (
			<tr>
				<td>
					{category}
				</td>
				<td>{description}</td>
				<td>{date}</td>
				<td>{money}</td>
				<td>
					<button>:</button>
				</td>
			</tr>
	);
};

export default HomeTable;
