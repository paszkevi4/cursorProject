import React, { useState, useEffect } from 'react';
import style from './Header.module.css';

import { totalCounter, totalIncomes } from '../Functions';

const Header = (props) => {
  const [incomes, setIncomes] = useState(0);
  const [total, setTotal] = useState(0);
  const [toWarn, setToWarn] = useState(false);

  useEffect(() => {
    setIncomes(totalIncomes(props.incomes));
  }, [props.incomes]);

  useEffect(() => {
    setTotal(totalCounter(props.incomes, props.charges));
  }, [props]);

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
