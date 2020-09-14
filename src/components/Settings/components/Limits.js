import React from 'react';
import style from '../Settings.module.css';
import { ButtonGroup, Button } from '@material-ui/core/';

const Limits = ({ title, limit, setLimit, step, disabled }) => {
  const handleDecreaseLimit = () => {
    if (title === 'amount') {
      setLimit(limit > 100 ? limit - step : 100);
    } else {
      setLimit(limit > 10 ? limit - step : 10);
    }
  };
  const handleIncreaseLimit = () => {
    if (title === 'percent') {
      setLimit(limit < 90 ? limit + step : 90);
    } else {
      setLimit(limit + step);
    }
  };
  return (
    <div>
      <h3>Remain {title}</h3>
      <span className={style.limit}>{limit}</span>
      <ButtonGroup disabled={disabled} color="primary" aria-label="outlined primary button group">
        <Button onClick={handleDecreaseLimit}>-</Button>
        <Button onClick={handleIncreaseLimit}>+</Button>
      </ButtonGroup>
    </div>
  );
};

export default Limits;
