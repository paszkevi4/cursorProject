import React from 'react';

import {Line} from 'react-chartjs-2';

import './Charts.css';

// in props you have four arrays of objects:

// props.incomes = [{category, description, date, icon}, {-||-} ... {-||-}]
// props.charges = [{category, description, date, icon}, {-||-} ... {-||-}]
// props.incomeCategories = [{name, description, date, icon}, {-||-} ... {-||-}]
// props.chargeCategories = [{name, description, date, icon}, {-||-} ... {-||-}]

const divStyle = {
    width: '99%',
    height: '400px'
};

const startData = (canvas) => {
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

class Charts extends React.Component {
    render() {
        return (
            <div className="line-chart" style={divStyle}>
                <Line
                    data={startData}
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
