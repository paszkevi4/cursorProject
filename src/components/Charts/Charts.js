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

  const getWeek = () => setActivePeriod(8);
  const getMonth = () => setActivePeriod(31);

  const showIncomes = () => setIsShowIncomes(!isShowIncomes);
  const showCharges = () => setIsShowCharges(!isShowCharges);

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

  fullCharges.forEach((el, i) => {
    el.id = i;
    el.sum = 0;
  });

  incomes.map((el) => {
    allMoney.push(+el.money);
    if (Math.ceil(Math.abs(el.date - new Date().getTime()) / (1000 * 3600 * 24)) < activePeriod) {
      trueDataIncomes.push(el);
      trueMoneyIncomes.push(el.money);
      allMoney.push(+el.money);

      if (fullIncomes[el.category]) {
        fullIncomes[el.category].sum += el.money;
      }
    }

    if (Math.ceil(Math.abs(el.date - new Date().getTime()) / (1000 * 3600 * 24)) < 8) {
      lastWeekIn += el.money;
    }
    if (
      Math.ceil(Math.abs(el.date - new Date().getTime()) / (1000 * 3600 * 24)) >= 8 &&
      Math.ceil(Math.abs(el.date - new Date().getTime()) / (1000 * 3600 * 24)) < 15
    ) {
      penultimateWeekIn += el.money;
    }
  });

  charges.map((el) => {
    if (Math.ceil(Math.abs(el.date - new Date().getTime()) / (1000 * 3600 * 24)) < activePeriod) {
      trueDataCharges.push(el);
      trueMoneyCharges.push(el.money);
      allMoney.push(+el.money);

      if (fullCharges[el.category]) {
        fullCharges[el.category].sum += el.money;
      }
    }

    if (Math.ceil(Math.abs(el.date - new Date().getTime()) / (1000 * 3600 * 24)) < 8) {
      lastWeekOut += el.money;
    }
    if (
      Math.ceil(Math.abs(el.date - new Date().getTime()) / (1000 * 3600 * 24)) >= 8 &&
      Math.ceil(Math.abs(el.date - new Date().getTime()) / (1000 * 3600 * 24)) < 15
    ) {
      penultimateWeekOut += el.money;
    }
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
    if (el.sum > 0) {
      categoriesBar.push(el.name);
      trueMoneyIncomesBar.push(el.sum);
    }
  });

  fullCharges.map((el) => {
    if (el.sum > 0) {
      categoriesDoughnut.push(el.name);
      trueMoneyChargesDoughnut.push(el.sum);
    }
  });

  const maxSum = Math.max(...allMoney);
  const minSum = Math.min(...allMoney);

  const futureWeekIn =
    ((lastWeekIn - penultimateWeekIn) / penultimateWeekIn) * lastWeekIn + lastWeekIn;
  const futureWeekOut =
    ((lastWeekOut - penultimateWeekOut) / penultimateWeekOut) * lastWeekOut + lastWeekOut;

  const startDataLine = {
    labels: activePeriod === 8 ? allDays : allDates,
    datasets: [
      {
        label: 'Incomes',
        lineTension: 0.5,
        backgroundColor: 'rgb(0,0,0,0)',
        borderColor: 'rgb(93,143,238)',
        hoverBorderColor: 'rgba(0,0,0,0)',
        borderWidth: 4,
        pointBackgroundColor: 'rgb(93,143,238)',
        pointBorderColor: 'rgb(93,143,238)',
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
        pointBackgroundColor: 'rgb(254,132,2)',
        pointBorderColor: 'rgb(254,132,2)',
        data: isShowCharges ? moneyOut : null,
        fill: false,
      },
    ],
  };

  const summary = {
    title: {
      display: true,
      text: 'Summary',
      position: 'top',
      fontSize: 20,
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
  };

  const incomes_cat = {
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

  const charges_cat = {
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

  const forecast_money = {
    title: {
      display: true,
      text: 'Forecast for incomes and charges',
      fontSize: 20,
    },
    legend: {
      display: true,
      position: 'right',
    },
    scales: {
      yAxes: [
        {
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
        pointBackgroundColor: 'rgb(93,143,238)',
        pointBorderColor: 'rgb(93,143,238)',
        data: [Math.round(penultimateWeekIn), Math.round(lastWeekIn), Math.round(futureWeekIn)],
      },
      {
        label: 'Charges',
        fill: false,
        backgroundColor: 'rgb(254,132,2)',
        borderColor: 'rgb(254,132,2)',
        hoverBorderColor: 'rgba(0,0,0,0)',
        borderWidth: 4,
        pointBackgroundColor: 'rgb(254,132,2)',
        pointBorderColor: 'rgb(254,132,2)',
        data: [Math.round(penultimateWeekOut), Math.round(lastWeekOut), Math.round(futureWeekOut)],
      },
    ],
  };

  const classes = useStyles();

  return (
    <>
      <div className="charts">
        <div className="line-chart__container">
          <div className="line-chart">
            <Line data={startDataLine} options={summary} />
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
          <Bar data={startDataBar} options={incomes_cat} />
        </div>
        <div className="doughnut-chart">
          <Doughnut data={startDataDoughnut} options={charges_cat} />
        </div>
        <div className="forecast__container">
          <div className="forecast-chart">
            <Line data={startForecast} options={forecast_money} />
          </div>
          <div className="forecast_descr">
            <h3>Your budget has changed in the last week</h3>
            <p>
              If this continues, your incomes will{' '}
              <span>
                {lastWeekIn < penultimateWeekIn ? 'decrease or remain unchanged' : 'increase'}
              </span>{' '}
              and your charges will{' '}
              <span>
                {lastWeekOut < penultimateWeekOut ? 'decrease or remain unchanged' : 'increase'}
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Charts;
