import React from 'react';

import {Bar, Doughnut, Line} from 'react-chartjs-2';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import './Charts.css';

// in props you have four arrays of objects:

// props.incomes = [{category, description, date, icon}, {-||-} ... {-||-}]
// props.charges = [{category, description, date, icon}, {-||-} ... {-||-}]
// props.incomeCategories = [{name, description, date, icon}, {-||-} ... {-||-}]
// props.chargeCategories = [{name, description, date, icon}, {-||-} ... {-||-}]

const useStyles = makeStyles({
    root: {
      marginLeft: '3%',
      width: '150px'
    },
    label: {
        textTransform: 'capitalize',
    },
  });

const Charts = (props) => { 
   
    const getWeekDay = day => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        return days[day];
    }

    let categoriesBar = [];
    let categoriesDoughnut = [];
    let incomeDates = [];
    let incomeDays = [];


    let trueDataCharges = [];
    let trueDataIncomes = [];
    let trueMoneyChargesDoughnut = [];
    let trueMoneyIncomesBar = [];

    let period = 31

    props.charges.map(item => {
        if(Math.ceil(Math.abs(item.date.getTime() - new Date().getTime()) / (1000 * 3600 * 24)) < period) {
            trueDataCharges.push(item)
        }
        return trueDataCharges;
    });

    props.incomes.map(item => {
        if(Math.ceil(Math.abs(item.date.getTime() - new Date().getTime()) / (1000 * 3600 * 24)) < period) {
            trueDataIncomes.push(item)
        }
        return trueDataIncomes;
    });

    props.incomeCategories.map( item => categoriesBar.push(item.name) );
    props.chargeCategories.map( item =>  categoriesDoughnut.push(item.name) ); /// maybe only for 30
    trueDataIncomes.map( item =>  incomeDates.push((item.date).toLocaleDateString()) );
    incomeDates.map( item => incomeDays.push(getWeekDay(item)) );

    trueDataCharges.map( item => trueMoneyChargesDoughnut.push(item.money) );
    trueDataIncomes.map( item => trueMoneyIncomesBar.push(item.money) );

    console.log(categoriesBar)
    console.log(trueMoneyIncomesBar)
    console.log(categoriesDoughnut)
    console.log(trueMoneyChargesDoughnut)

    const startDataLine = (canvas) => {
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0,0,0,400);
        gradient.addColorStop(0, 'rgb(205,221,249)');
        gradient.addColorStop(1, 'rgb(255,255,255)');
    
        return {
            labels: incomeDates,
            datasets: [
                {
                    lineTension: 0.5,
                    backgroundColor: gradient,
                    borderColor: 'rgb(93,143,238)',
                    hoverBorderColor: 'rgba(93,143,238,0.6)',
                    borderWidth: 4,
                    pointBackgroundColor: 'rgb(93,143,238)',
                    pointBorderColor: 'rgb(93,143,238)',
                    data: trueMoneyIncomesBar
                },
                {
                    lineTension: 0.5,
                    backgroundColor: 'rgb(254,132,2)',
                    borderColor: 'rgb(254,132,2)',
                    hoverBorderColor: 'rgba(254,132,2,0.6)',
                    borderWidth: 4,
                    borderDash: [15, 5],
                    pointBackgroundColor: 'rgb(254,132,2)',
                    pointBorderColor: 'rgb(254,132,2)',
                    data: trueMoneyChargesDoughnut,
                    fill: false
                }
            ]
        }
    }

    const startDataBar = {
        labels: categoriesBar,
        datasets: [
            {
                backgroundColor: 'rgba(75,192,192,1)',
                hoverBackgroundColor:'rgba(75,192,192,0.6)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 0,
                barPercentage: 0.4,
                data: trueMoneyIncomesBar
            }
        ]
    };

    const startDataDoughnut = {
        labels: categoriesDoughnut,
        datasets: [
            {
                backgroundColor: [
                    'rgb(197,218,3)',
                    'rgb(6,120,207)',
                    'rgb(253,40,36)',
                    'rgb(254,132,2)'
                ],
                hoverBackgroundColor: [
                    'rgba(197,218,3,0.6)',
                    'rgba(6,120,207,0.6)',
                    'rgba(253,40,36,0.6)',
                    'rgba(254,132,2,0.6)'
                ],
                borderWidth: 0,
                data: trueMoneyChargesDoughnut
            }
        ]
    };

    const classes = useStyles();
    
    return (
        <>
            <div className="btn-wrapper">
                <Button variant="outlined" classes={{ root: classes.root,label: classes.label }}>
                    Month
                </Button>
                <Button variant="contained" color="primary" classes={{ root: classes.root, label: classes.label }}>
                    Week
                </Button>
            </div>
            <div className="charts">
                <div className="line-chart">
                    <Line
                        data={startDataLine}
                        options = {{
                            title: {
                                display: true,
                                text: 'Summary',
                                position: 'top',
                                fontSize: 20
                            },
                            legend: {
                                display: false
                            },
                            scales: {
                                yAxes: [{
                                    display: false,
                                    ticks: {
                                        suggestedMin: 5,
                                        suggestedMax: 15
                                    },
                                    gridLines: {
                                        display: false,
                                    }
                                }],
                                xAxes: [{
                                    gridLines: {
                                        display: false
                                    }
                                }]
                            },
                            maintainAspectRatio: false
                        }}
                    />
                </div>
                <div className="bar-chart">
                    <Bar
                        data={startDataBar}
                        options={{
                            title: {
                                display: true,
                                text: 'Income categories',
                                fontSize: 20
                            },
                            legend: {
                                display: false
                            },
                            scales: {
                                yAxes: [{

                                    ticks: {
                                        suggestedMin: 0,
                                        suggestedMax: 500
                                    },
                                    gridLines: {
                                        display: false,
                                    }
                                }],
                                xAxes: [{
                                    gridLines: {
                                        display: false
                                    }
                                }]
                            },
                            maintainAspectRatio: false
                        }}
                    />
                </div>
                <div className="doughnut-chart">
                    <Doughnut
                        data={startDataDoughnut}
                        options={{
                            title: {
                                display: true,
                                text: 'Charges categories',
                                fontSize: 20
                            },
                            legend:{
                                display:true,
                                position:'right'
                            },
                            maintainAspectRatio: false
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default Charts;
