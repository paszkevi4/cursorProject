import React from "react";

// const MySelect = React.createClass({
// 	getInitialState: function() {
// 		return {
// 			value: 'select'
// 		}
// 	},
// 	change: function(event){
// 		this.setState({value: event.target.value});
// 	},
// 	render: function(){
// 		return(
// 				<div>
// 					<select id="lang" onChange={this.change} value={this.state.value}>
// 						<option value="select">Select</option>
// 						<option value="Java">Java</option>
// 						<option value="C++">C++</option>
// 					</select>
// 					<p></p>
// 					<p>{this.state.value}</p>
// 				</div>
// 		);
// 	}
// });
//
// React.render(<MySelect />, document.body);

// handlePeriodChange(selVal) {
// 	this.props.handlePeriodChange(selVal);
// 	if (selVal===Date.now()){return selVal.filter()}
// }


const HomeSelect = ()=>{
return (
	<select onChange={(val) => this.handlePeriodChange(val.target.value)}
				className="btn btn-sm btn-outline-secondary dropdown-toggle">
	<option value="TODAY">Today</option>
	<option value="THIS_WEEK">This Week</option>
	<option value="THIS_MONTH">This Month</option>
	<option value="THIS_YEAR">This Year</option>
	<option selected value="LAST_AVAILABLE_DAY">Last Availabe Day</option>
</select>
)
};

export default HomeSelect;