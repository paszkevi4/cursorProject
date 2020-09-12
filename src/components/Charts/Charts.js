import React from 'react';

import {Bar, Doughnut, Line} from 'react-chartjs-2';

import './Charts.css';

// in props you have four arrays of objects:

// props.incomes = [{category, description, date, icon}, {-||-} ... {-||-}]
// props.charges = [{category, description, date, icon}, {-||-} ... {-||-}]
// props.incomeCategories = [{name, description, date, icon}, {-||-} ... {-||-}]
// props.chargeCategories = [{name, description, date, icon}, {-||-} ... {-||-}]

const divLineStyle = {
    width: '99%',
    height: '400px'
};

const divBarStyle = {
    width: '100%',
    height: '400px'
}

const divDoughnutStyle = {
    width: '100%',
    height: '400px'
}


const startDataLine = (canvas) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0,0,0,400);
    gradient.addColorStop(0, 'rgb(205,221,249)');
    gradient.addColorStop(1, 'rgb(255,255,255)');

    return {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [
            {
                lineTension: 0.5,
                backgroundColor: gradient,
                borderColor: 'rgb(93,143,238)',
                borderWidth: 4,
                pointBackgroundColor: 'rgba(0,0,0,0)',
                pointBorderColor: 'rgba(0,0,0,0)',
                data: [12, 11, 13, 9, 11, 12, 9]
            },
            {
                lineTension: 0.5,
                backgroundColor: 'rgb(222,232,251)',
                borderColor: 'rgb(222,232,251)',
                borderWidth: 4,
                borderDash: [15, 5],
                pointBackgroundColor: 'rgba(0,0,0,0)',
                pointBorderColor: 'rgba(0,0,0,0)',
                data: [12, 14, 11, 9, 13, 12, 10],
                fill: false
            }
        ]
    }
}

const startDataBar = {
    labels: ['My mom', 'Sale book', 'Donations', 'Work'],
    datasets: [
        {
            backgroundColor: 'rgba(75,192,192,1)',
            hoverBackgroundColor:'rgba(75,192,192,0.6)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 0,
            barPercentage: 0.4,
            data: [500,450,410,400]
        }
    ]
}

const startDataDoughnut = {
    labels: ['Pets', 'Food', 'Restoraunts', 'Clothes'],
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
            data: [100,100, 100, 100]
        }
    ]
}

class Charts extends React.Component {
    render() {
        return (
            <div className="charts">
                <div className="line-chart" style={divLineStyle}>
                    <Line
                        data={startDataLine}
                        options = {{
                            title: {
                                display: true,
                                text: 'Summary',
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
                <div className="bar-chart" style={divBarStyle}>
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
                <div className="doughnut-chart" style={divDoughnutStyle}>
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
        )
    }
}

// const Charts = (props) => {
//   return (
//     <>
//         <div>CHARTS</div>
//         <div className="summary-line">
//
//         </div>
//     </>
//   );
// };

export default Charts;
