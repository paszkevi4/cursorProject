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

 // class HomeSelect extends React.Component {
const HomeSelect = ({filtered}) => {
	 //---------------------
	 // const selectVal = {
	 //   "TODAY": Date.now,
	 //   "THIS_WEEK": 6,
	 //   "THIS_MONTH": 30,
	 // }
	 // const handlePeriodChange = (selectVal) => {
	 //   // handlePeriodChange(selectVal){
	 //   // this.handlePeriodChange(selectVal);
	 //   if (selectVal === "THIS_WEEK") {
	 //     console.log(props.charges.filter(`${Date.now()}`));
	 //     return selectVal.filter();
	 //   }
	 // };
	 //------------------------

// const HomeSelect = ()=>{
	// handlePeriodChange(selVal) => {
	// 	this.props.handlePeriodChange(selVal);
	// 	if (selVal===Date.now()){return selVal.filter()}
	// }
	// let selVal = 0;


	// handlePeriodChange(selectVal) {
	// 	// this.props.handlePeriodChange(selectVal);
	// 	const selectValue = {
	// 		"TODAY": Date.now,
	// 		"THIS_WEEK": " ",
	// 		"THIS_MONTH": " ",
	// 		"THIS_YEAR": " "
	// 	}
	// 	if (selectVal !== selectValue[0]) {
	// 		console.log(selectVal.filter(this.props.date));
	// 		return selectVal.filter(selectValue)
	// 	}
	// }

	// handleSelect(e) {
	// 	this.setState({ selectValue: e.target.value })
	// }

	 const [dateFilter, setFilterDate] = React.useState([...filtered]);
		// const	filterDate = filters(dateFilter);
		// function filters(anArray) {
		// 	let newArr = []
		// 	for(let i = 0; i< anArray.length; i++){
		// 		if(anArray[i]){
		// 			newArr.push(anArray[i].date.getTime());
		// 		}
		// 	}
		// 	return (newArr);
		// }


	 // const [filtered, setFiltered] = React.useState([...items]);
	 // state = {
		 // charges: [...this.props.charges],
		 // filterItems: [...this.props.filterItems],
		 // selectValue: 'TODAY',
	 // }
	 const handlePeriodChange = (selectVal) => {
		 // handlePeriodChange(selectVal){
		 // this.handlePeriodChange(selectVal);
		// console.log(setFilterDate((dateFilter)=>dateFilter));
		//  let dateValue = [];

		 if (+selectVal === 7 || +selectVal === 30) {
			 // console.log(setFiltered.filter((fil) => {
			 //   return (parseInt(fil) / 2) > 10
			 // }));
			 ///============================
			 let milliseconds = +selectVal*24*60*60*1000;
			 let currentDate = new Date();
			 let time = currentDate.setTime(currentDate.getTime() - milliseconds);
			 ///=================================
			 // const	filterDate = filters(dateFilter);
			 setFilterDate({
				 // dateFilter: [ ...filterItems.map((arr, i) =>{
				 // 		console.log(arr);
				 // 		return arr.filter((arr)=> {
				 // 			console.log(arr.date.getTime() > time);
					// 		return (arr.date.getTime() > time);
					// 	});
					 dateFilter: filtered.filter((arr) =>{
								 // console.log(arr);
								 console.log(arr.date.getTime() > time);
								 return arr.date.getTime() > time;



				 		// arr.map((arr,i) => {
						// 	return arr[i].date.getTime() > time

					// 	}
				 }
				 )


				 // const	filterDates = dateFilter.map((arr , i )=>
					// 	( arr[i].date.getTime() >= time))
				 // return filterDates;
			 })
			 // function filters(charges) {
				//  	// for(let i = 0; i< charges.length; i++){
				//  charges.map((charge, i)=> {
				// if ( charge[i].date.getTime()>= time){
			 //
				// }
				//  })

				 // 	return null;
				 // }
			 // const filterCharge = filtr(dateFilter);
			 // function filtr(arrCharge){
				//  let newArr = []
				//  for(let i = 0; i< arrCharge.length; i++){
				// 	 if(arrCharge[i]){
				// 		 newArr.push(arrCharge[i].date.getTime());
				// 	 }
				//  }
				//  return (newArr);
				 // arrCharge.map((arr,i)=>{
					// 		if (arr[i].date.getTime() < time){
					// 			console.log(arr[i].data.getTime());
					// 			newArr.push(arr);
					// 			console.log(newArr);
					// 			return newArr;
					// 		}
					// 	 }
				 // )
			 // }
			 // console.log(new Date(time));                ///
			 // console.log(filtr(dateFilter));
			 // console.log(filterCharge);
			 // filterCharge.filter(fil)
			 // filterDate.filter((fil) => {            ////////
			 //   return((fil) >=(time) ? new Date(fil) : null);         ///////
			 // });
			 // console.log(filterDate.filter((fil) => {  ///
				 // return((fil) >=(time))}));
			 // return((fil) >=(time) ? new Date(fil) : null)}));  ///
			 // console.log(
			 //    (new Date(setFiltered.filter((fil) => ((fil) >=( time)) )).toLocaleDateString()));
			 // console.log(new Date(fil).toLocaleDateString());
		 }else if (+selectVal === 30) {
			 // console.log(setFiltered.filter((fil) => {
			 //   return (parseInt(fil) / 2) > 10
			 // }));
			 // let dateFormat;
			 let mili = +selectVal*24*60*60*1000;
			 let currentDate = new Date();
			 let time = currentDate.setTime(currentDate.getTime() - mili);
			 // console.log(new Date(time).toLocaleDateString());
			 // new Date(time);
			 console.log(new Date(time));
			 // console.log(filterDate.map((fil, i) => {            ////
				//  return (fil >= time) ?  new Date(fil) : ""         ////
			 // }));                                            ////
			 // filterDate.filter((fil) => fil >=time);   ////
			 // filterDate.map((fil) => new Date(fil));   ///
			 // const arrDate = filterDate.map((fil) => {      ///
				//  return (fil >= time) ?  new Date(fil) : ""   ////
			 // });

				// console.log(filterDate.map((fil) => new Date(fil)));
			 // console.log(arrDate.filter((fil)=>( fil!=="")));    ///
//includes
					 // return((fil) >=(time))}));
			 // return me;
			 // return(dateFormat)
			 // ( dateFormat = new Date(fil))
			 // ));
			// dateValue = arrDate.filter((fil)=>( fil!==""));   ///
			// return(dateValue);
			//  setFilterDate({dateFilter, dateValue});             ///
			 // return setFilterDate((props)=> props.dateFilter.map((dateFilter)=>dateFilter.date.filter((dateValue, i)=> (props.dateValue[i]))));
		 // }else{                                   ///
			//  console.log(filterDate);            ///
			//  return (filterDate);              ////
		 }
		// return setFilterDate((dateFilter)=> dateFilter.map(dateFilter.date.includes((dateValue, i)=>
		 // (dateValue[i]))));    ///
		 // console.log(setFilterDate);
		 // return setFilterDate;
		 return {setFilterDate};
	 };
	 // const day = new Date();
	 // const me = new Date(day);
	 // me;
	 // me.toLocaleDateString()

	// render () {
	return(
			<select
		  id="datePeriod" name="datePeriod"
		  onChange={event => handlePeriodChange(event.target.value)}
		  className="btn btn-sm btn-outline-secondary dropdown-toggle"
		  // selected={"FULL_PERIOD"}
		  //   value={filter ? filter.value : "FULL_PERIOD"}
		  // value={this.props.charges.date}
					>
		  <option value="7">This Week</option>
		  <option value="30">This Month</option>
		  <option selected="FULL_PERIOD">Full period</option>
		</select>
// <select
// 		onChange={(val) => this.handlePeriodChange(val.target.value)}
// 		value={this.state.selectValue}
// 				// onChange={this.handleSelect.bind(this)}
// className="btn btn-sm btn-outline-secondary dropdown-toggle">
// <option value="THIS_WEEK">This Week</option>
// <option value="THIS_MONTH">This Month</option>
// <option selected value="FULL_PERIOD">Full period</option>
// </select>
		)
	// }
}


export default HomeSelect;