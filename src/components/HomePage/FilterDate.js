import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';
// import HomeTable from "./HomeTable";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export default class FilterDate extends React.Component {
// constructor(props) {
// 	super(props);
state = {
		filtered: [...this.props.filtered],
		7: 7,
		30: 30,
		"all": "all",
	}
// }
	// const classes = useStyles();

	filterDate(name){
		const milliseconds = name*24*60*60*1000;
		const currentDate = new Date();
		const time = currentDate.setTime(currentDate.getTime() - milliseconds);
		this.setState((prevState) => {
			return ({
				filtered: prevState.filtered.filter((arr) => {
					// console.log(arr);

					if (typeof (name) === 'number') {
						// console.log( (arr.date.getTime() > time){ return arr} );
						console.log((arr.date.getTime() > time) ? arr : null);
						return(arr.date.getTime() > time);
						// if (arr.date.getTime() > time) {
						// 	return arr;
						// }
					// } else {
					// 	console.log(arr);
					// 	return arr;
					}else {
						console.log(arr);
						return arr;
					}
				})
			})
	})
}

		handleChange = (event) => {
			const name = event.target.value;
			this.setState({
				[name]: event.target.value,
				// ...this.state,
				// filtered: [ ...this.props.filterItems.filter((arr) =>{
				// 	// console.log(arr);
				// 	if(typeof(name) === 'number' ) {
				// 		// console.log( (arr.date.getTime() > time){ return arr} );
				// 		console.log((arr.date.getTime() > time) ? arr : null);
				// 		 if (arr.date.getTime() > time) {
				// 			 return arr;
				// 		 }
				// 	} else {
				// 		console.log(arr);
				// 		return arr;
				// 	}
				// })]
		});
			this.filterDate(name);
	};

	render () {

		return (
		<div>
			<FormControl className={"formControl"}>
				<InputLabel htmlFor="period">Period</InputLabel>
				<Select
						// native
						// value={this.state.age}
						defaultValue={"All"}
						onChange={this.handleChange}
						inputProps={{
							name: 'Period',
							id: 'period',
						}}
				>
				{/*<NativeSelect*/}
				{/*		defaultValue={"All"}*/}
				{/*		inputProps={{*/}
				{/*			name: 'Period',*/}
				{/*			id: 'period',*/}
				{/*		}}*/}
				{/*>*/}
					<option value={7}>Week</option>
					<option value={30}>Month</option>
					<option value={'All'}>All</option>
				</Select>
			</FormControl>
		</div>
		)
	}
}



