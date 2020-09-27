import React, { useState } from 'react';

import { Bar, Doughnut, Line } from 'react-chartjs-2';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import './Charts.css';
import { ChartsStyles } from '../Styles';

const useStyles = makeStyles(ChartsStyles);

const Charts = ({ incomes, charges, incomeCategories, chargeCategories }) => {
  const [activePeriod, setActivePeriod] = useState(8);
  const [isShowIncomes, setIsShowIncomes] = useState(true);
  const [isShowCharges, setIsShowCharges] = useState(true);

  const getWeekDay = (day) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return days[new Date(day).getDay()];
  };

  const getWeek = () => {
    setActivePeriod(8);
  };

  const getMonth = () => {
    setActivePeriod(31);
  };

  const allDates = [];
  const allDatesForDay = [];
  const allDays = [];
  const categoriesBar = [];
  const categoriesDoughnut = [];
  const trueDataCharges = [];
  const trueDataIncomes = [];
  const trueMoneyChargesDoughnut = [];
  const trueMoneyIncomesBar = [];
  const trueMoneyIncomes = [];
  const moneyIn = [];
  const moneyOut = [];
  const trueMoneyCharges = [];
  const allMoney = [];
  let lastWeekIn = 0;
  let penultimateWeekIn = 0;
  let lastWeekOut = 0;
  let penultimateWeekOut = 0;

  for (let i = 0; i < activePeriod - 1; i++) {
    allDates.push(new Date(Date.now() - i * 1000 * 3600 * 24).toLocaleDateString().slice(0, 5));
    allDatesForDay.push(Date.now() - i * 1000 * 3600 * 24);
  }

  allDates.reverse();
  allDatesForDay.reverse();

  allDatesForDay.map((el) => {
    allDays.push(getWeekDay(el));
    return allDays;
  });

  const fullIncomes = incomeCategories.slice();
  const fullCharges = chargeCategories.slice();

  fullIncomes.forEach((el, i) => {
    el.id = i;
    el.sum = 0;
  });

  incomes.forEach((el) => {
    if (
      Math.ceil(Math.abs(el.date.getTime() - new Date().getTime()) / (1000 * 3600 * 24)) <
      activePeriod
    ) {
      fullIncomes[el.category].sum += el.money;
    }
  });

  fullCharges.forEach((el, i) => {
    el.id = i;
    el.sum = 0;
  });

  charges.forEach((el) => {
    if (
      Math.ceil(Math.abs(el.date.getTime() - new Date().getTime()) / (1000 * 3600 * 24)) <
      activePeriod
    ) {
      fullCharges[el.category].sum += el.money;
    }
  });

  incomes.map((el) => {
    if (
      Math.ceil(Math.abs(el.date.getTime() - new Date().getTime()) / (1000 * 3600 * 24)) <
      activePeriod
    ) {
      trueMoneyIncomes.push(el.money);
    }
    return trueMoneyIncomes;
  });

  charges.map((el) => {
    if (
      Math.ceil(Math.abs(el.date.getTime() - new Date().getTime()) / (1000 * 3600 * 24)) <
      activePeriod
    ) {
      trueMoneyCharges.push(el.money);
    }
    return trueMoneyCharges;
  });

  charges.map((item) => {
    if (
      Math.ceil(Math.abs(item.date.getTime() - new Date().getTime()) / (1000 * 3600 * 24)) <
      activePeriod
    ) {
      trueDataCharges.push(item);
    }
    return trueDataCharges;
  });

  incomes.map((item) => {
    if (
      Math.ceil(Math.abs(item.date.getTime() - new Date().getTime()) / (1000 * 3600 * 24)) <
      activePeriod
    ) {
      trueDataIncomes.push(item);
    }
    return trueDataIncomes;
  });

  allDates.forEach((d) => {
    let elIn = trueDataIncomes.find((el) => el.date.toLocaleDateString().slice(0, 5) === d);
    let elOut = trueDataCharges.find((el) => el.date.toLocaleDateString().slice(0, 5) === d);
    if (elIn) {
      moneyIn.push(elIn.money);
    } else {
      moneyIn.push(0);
    }
    if (elOut) {
      moneyOut.push(elOut.money);
    } else {
      moneyOut.push(0);
    }
  });

  fullIncomes.map((el) => {
    if (el.sum !== 0) {
      categoriesBar.push(el.name);
    }
    return categoriesBar;
  });

  fullCharges.map((el) => {
    if (el.sum !== 0) {
      categoriesDoughnut.push(el.name);
    }
    return categoriesDoughnut;
  });

  fullCharges.map((el) => {
    if (el.sum > 0) {
      trueMoneyChargesDoughnut.push(el.sum);
    }
    return trueMoneyChargesDoughnut
  });

  fullIncomes.map((el) => {
    if (el.sum > 0) {
      trueMoneyIncomesBar.push(el.sum);
    }
    return trueMoneyIncomesBar
  });

  const showIncomes = () => setIsShowIncomes(!isShowIncomes);
  const showCharges = () => setIsShowCharges(!isShowCharges);

  incomes.map((el) => {
    allMoney.push(+el.money);
    return allMoney;
  });

  charges.map((el) => {
    allMoney.push(+el.money);
    return allMoney;
  });

  const maxSum = Math.max(...allMoney);
  const minSum = Math.min(...allMoney);

  incomes.map(el => {
    if(Math.ceil(Math.abs(el.date.getTime() - new Date().getTime()) / (1000 * 3600 * 24)) < 8) {
      lastWeekIn += el.money
    }
    if(Math.ceil(Math.abs(el.date.getTime() - new Date().getTime()) / (1000 * 3600 * 24)) >= 8 && Math.ceil(Math.abs(el.date.getTime() - new Date().getTime()) / (1000 * 3600 * 24)) < 15) {
      penultimateWeekIn += el.money
    }
  });

  charges.map(el => {
    if(Math.ceil(Math.abs(el.date.getTime() - new Date().getTime()) / (1000 * 3600 * 24)) < 8) {
      lastWeekOut += el.money
    }
    if(Math.ceil(Math.abs(el.date.getTime() - new Date().getTime()) / (1000 * 3600 * 24)) >= 8 && Math.ceil(Math.abs(el.date.getTime() - new Date().getTime()) / (1000 * 3600 * 24)) < 15) {
      penultimateWeekOut += el.money
    }
  });

  const futureWeekIn = ((lastWeekIn - penultimateWeekIn) / penultimateWeekIn) * lastWeekIn + lastWeekIn;
  const futureWeekOut = ((lastWeekOut - penultimateWeekOut) / penultimateWeekOut) * lastWeekOut + lastWeekOut;

  const startDataLine = (canvas) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#F2DB51');
    gradient.addColorStop(1, '#ECC32F');

    return {
      labels: activePeriod === 8 ? allDays : allDates,
      datasets: [
        {
          label: 'Incomes',
          lineTension: 0.5,
          backgroundColor: gradient,
          borderColor: 'rgb(93,143,238)',
          hoverBorderColor: 'rgba(0,0,0,0)',
          borderWidth: 4,
          pointBackgroundColor: 'rgba(0,0,0,0)',
          pointBorderColor: 'rgba(0,0,0,0)',
          data: isShowIncomes ? moneyIn : null,
        },
        {
          label: 'Charges',
          lineTension: 0.5,
          backgroundColor: 'rgb(254,132,2)',
          borderColor: 'rgb(254,132,2)',
          hoverBorderColor: 'rgba(0,0,0,0)',
          borderWidth: 4,
          borderDash: [15, 5],
          pointBackgroundColor: 'rgba(0,0,0,0)',
          pointBorderColor: 'rgba(0,0,0,0)',
          data: isShowCharges ? moneyOut : null,
          fill: false,
        },
      ],
    };
  };

  const startDataBar = {
    labels: categoriesBar,
    datasets: [
      {
        backgroundColor: 'white',
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 0,
        barPercentage: 0.4,
        data: trueMoneyIncomesBar,
      },
    ],
  };

  const startDataDoughnut = {
    labels: categoriesDoughnut,
    datasets: [
      {
        backgroundColor: ['#f6ea67', '#ef878d', '#38ef7d', '#94ecde', '#ffc7bb'],
        hoverBackgroundColor: ['#ecc22e', '#fa9dbe', '#35bb61', '#06c0da', '#ef8270'],
        borderWidth: 0,
        data: trueMoneyChargesDoughnut,
      },
    ],
  };

  const startForecast = {
    labels: ['Penultimate week', 'Last week', 'Future week'],
    datasets: [
      {
        label: 'Incomes',
        fill: false,
        borderColor: 'rgb(93,143,238)',
        hoverBorderColor: 'rgba(0,0,0,0)',
        borderWidth: 4,
        pointBackgroundColor: 'rgba(0,0,0,0)',
        pointBorderColor: 'rgba(0,0,0,0)',
        data: [Math.round(penultimateWeekIn), Math.round(lastWeekIn), Math.round(futureWeekIn)]
      },
      {
        label: 'Charges',
        fill: false,
        backgroundColor: 'rgb(254,132,2)',
        borderColor: 'rgb(254,132,2)',
        hoverBorderColor: 'rgba(0,0,0,0)',
        borderWidth: 4,
        pointBackgroundColor: 'rgba(0,0,0,0)',
        pointBorderColor: 'rgba(0,0,0,0)',
        data: [Math.round(penultimateWeekOut), Math.round(lastWeekOut), Math.round(futureWeekOut)]
      }
    ]
  }

  const classes = useStyles();

  return (
    <>
      <div className="charts">
        <div className="line-chart__container">
          <div className="line-chart">
            <Line
              data={startDataLine}
              options={{
                title: {
                  display: true,
                  text: 'Summary',
                  position: 'top',
                  fontSize: 20
                },
                legend: {
                  display: false,
                },
                scales: {
                  yAxes: [
                    {
                      display: false,
                      ticks: {
                        suggestedMin: minSum,
                        suggestedMax: maxSum,
                      },
                      gridLines: {
                        display: false,
                      },
                    },
                  ],
                  xAxes: [
                    {
                      gridLines: {
                        display: false,
                      },
                    },
                  ],
                },
                maintainAspectRatio: false,
              }}
            />
          </div>
          <div className="chart-buttons">
            <div className="chart-buttons__btn">
              <Button
                variant="outlined"
                className={activePeriod === 31 ? 'btn-active' : null}
                classes={{ root: classes.root, label: classes.label }}
                onClick={getMonth}>
                Month
              </Button>
              <Button
                variant="outlined"
                className={activePeriod === 8 ? 'btn-active' : null}
                classes={{ root: classes.root, label: classes.label }}
                onClick={getWeek}>
                Week
              </Button>
            </div>
            <div className="chart-buttons__checkbox">
              <span>
                <input type="checkbox" id="show-in" onChange={showIncomes} defaultChecked />
                <label className={!isShowIncomes ? 'non-active' : ''} htmlFor="show-in">
                  Incomes
                </label>
              </span>
              <span>
                <input type="checkbox" id="show-out" onChange={showCharges} defaultChecked />
                <label className={!isShowCharges ? 'non-active' : ''} htmlFor="show-out">
                  Charges
                </label>
              </span>
            </div>
          </div>
        </div>

        <div className="buttons_separated">
          <div className="buttons_btn__separated">
            <Button
              variant="outlined"
              className={activePeriod === 31 ? 'btn-active' : null}
              classes={{ root: classes.root, label: classes.label }}
              onClick={getMonth}>
              Month
            </Button>
            <Button
              variant="outlined"
              className={activePeriod === 8 ? 'btn-active' : null}
              classes={{ root: classes.root, label: classes.label }}
              onClick={getWeek}>
              Week
            </Button>
          </div>
          <div className="buttons_checkbox__separated">
            <span>
              <input type="checkbox" id="show-in" onChange={showIncomes} defaultChecked />
              <label className={!isShowIncomes ? 'non-active' : ''} htmlFor="show-in">
                Incomes
              </label>
            </span>
            <span>
              <input type="checkbox" id="show-out" onChange={showCharges} defaultChecked />
              <label className={!isShowCharges ? 'non-active' : ''} htmlFor="show-out">
                Charges
              </label>
            </span>
          </div>
        </div>

        <div className="bar-chart">
          <Bar
            data={startDataBar}
            options={{
              title: {
                display: true,
                text: 'Income categories',
                fontSize: 20,
                fontColor: 'white',
              },
              legend: {
                display: false,
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      suggestedMin: 0,
                      suggestedMax: 500,
                      fontColor: 'white',
                    },
                    gridLines: {
                      display: false,
                    },
                  },
                ],
                xAxes: [
                  {
                    ticks: {
                      fontColor: 'white',
                    },
                    gridLines: {
                      display: false,
                    },
                  },
                ],
              },
              maintainAspectRatio: false,
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
                fontSize: 20,
                fontColor: 'white',
              },
              legend: {
                display: true,
                position: 'right',
                labels: {
                  fontColor: 'white',
                },
              },
              maintainAspectRatio: false,
            }}
          />
        </div>
        <div className="forecast__container">
          <div className="forecast-chart">
            <Line
              data={startForecast}
              options={{
                title:{
                  display:true,
                  text:'Forecast for incomes and charges',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'right'
                },
                scales: {
                  yAxes: [
                    {
                      display: false,
                      gridLines: {
                        display: true,
                      },
                    },
                  ],
                  xAxes: [
                    {
                      gridLines: {
                        display: false,
                      },
                    },
                  ],
                },
                maintainAspectRatio: false,
              }}
            />
          </div>
          <div className="forecast_descr">
              <h3>Your budget has changed in the last week</h3>
              <p>If this continues, your incomes will <span>{lastWeekIn < penultimateWeekIn ? 'decrease' : 'increase'}</span> and your charges will <span>{lastWeekOut < penultimateWeekOut ? 'decrease' : 'increase'}</span>.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Charts;