import React from "react";
// import HomeTable from "./HomeTable";

// export default class Contacts extends React.Component {
// 	state = {
// 		filtered: [...items],
// 		search: "",
// 		isMale: true,
// 		isFemale: true,
// 		isUnknown: true,
// 	}

// React.createClass = function (param) {
// 	return undefined;
// }
//  const HomeSelect = React.createClass=()=>({
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
// 					<p>{this.getInitialState}</p>
// 					<p>{this.state.value}</p>
// 				</div>
// 		);
// 	}
// });

// // React.render(<MySelect />, document.body);
// export default HomeSelect;

 class HomeSelect extends React.Component {

// const HomeSelect = ()=>{
	// handlePeriodChange(selVal) => {
	// 	this.props.handlePeriodChange(selVal);
	// 	if (selVal===Date.now()){return selVal.filter()}
	// }
	// let selVal = 0;
	state = {
		charges: [...this.props.charges],
		selectValue: 'TODAY',
	}
	handlePeriodChange(selectVal) {
		// this.props.handlePeriodChange(selectVal);
		const selectValue = {
			"TODAY": Date.now,
			"THIS_WEEK": " ",
			"THIS_MONTH": " ",
			"THIS_YEAR": " "
		}
		if (selectVal !== selectValue[0]) {
			console.log(selectVal.filter(this.props.date));
			return selectVal.filter(selectValue)
		}
	}


	handleSelect(e) {
		this.setState({ selectValue: e.target.value })
	}

	render () {
	return(

<select
		// onChange={(val) => this.handlePeriodChange(val.target.value)}
				value={this.state.selectValue}
				onChange={this.handleSelect.bind(this)}
className="btn btn-sm btn-outline-secondary dropdown-toggle">
<option value="TODAY">Today</option>
<option value="THIS_WEEK">This Week</option>
<option value="THIS_MONTH">This Month</option>
<option value="THIS_YEAR">This Year</option>
<option selected value="FULL_PERIOD">Full period</option>
</select>
)
}

};


export default HomeSelect;