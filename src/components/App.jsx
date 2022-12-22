import React from "react";
// Хуки находятся в react-redux
import { useSelector, useDispatch } from "react-redux";
// Импортируем нужные действия
import { increment, decrement, incrementByAmount } from '../slices/counterSlice.js';

/* eslint-disable import/no-anonymous-default-export */
export default () => {
  // Вытаскиваем данные из хранилища. state – все состояние
  const count = useSelector((state) => state.counter.value);
  // Возвращает метод store.dispatch() текущего хранилища
  const dispatch = useDispatch();

  return (
    <div>
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Прибавить
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Отнять
      </button>
      <br />
      <button onClick={() => dispatch(incrementByAmount(42))}>Прибавить 42</button>
    </div>
  </div>
  );
};
