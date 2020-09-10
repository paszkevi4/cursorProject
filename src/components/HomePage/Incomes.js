import React from "react";
import HomeTable from "./HomeTable"

const Incomes = ({ props }) => {
	return (
			<div>
				<table>
					<thead>
					<tr>
						<td>Category</td>
						<td>Description</td>
						<td>Date</td>
						<td>Money</td>
						<td>Action</td>
					</tr>
					</thead>
					<tbody>
					{[
						...props.map((el, i) => (
								<HomeTable
										name={el.category}
										description={el.description}
										date={el.date}
										money={el.money}
										key={i}
								/>
						)),
					]}
					</tbody>
				</table>
			</div>
	);
};

export default Incomes;