import React, { useState, useEffect } from 'react';
import style from './Header.module.css';

const Header = (props) => {
  const [incomes, setIncomes] = useState(0);
  const [charges, setCharges] = useState(0);
  const [total, setTotal] = useState(0);
  const [toWarn, setToWarn] = useState(false);

  useEffect(() => {
    setIncomes(
      props.incomes.reduce((prev, curr) => {
        return prev + curr.money;
      }, 0),
    );
  }, [props.incomes]);

  useEffect(() => {
    setCharges(
      props.charges.reduce((prev, curr) => {
        return prev + curr.money;
      }, 0),
    );
  }, [props.charges]);

  useEffect(() => {
    setTotal(incomes - charges);
  }, [incomes, charges]);

  useEffect(() => {
    // prettier-ignore
    if (props.settings.showWarning && (total < props.settings.moneyLimit || (total / incomes) * 100 < props.settings.percentLimit)) {
      setToWarn(true);
    } else {
      setToWarn(false);
    }
  }, [total, incomes, props]);

  return (
    <div className={`${style.header} ${toWarn ? style.header__warning : ''}`}>
      <div className={style.header_category}>
        <h2>{props.title}</h2>
      </div>
      {toWarn && <p> BE aware of low budget</p>}
      <div className={style.header_balance}>
        <h2 className={style.header_balance__title}>Balance</h2>
        <h1 className={style.header_balance__amount}>
          {total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </h1>
      </div>
    </div>
  );
};

export default Header;
