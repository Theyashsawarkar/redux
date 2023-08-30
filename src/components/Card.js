import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/slices/Slice";

function Card() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="card">
      <button onClick={() => dispatch(increment())}>increment</button>
      <div className="count">{count}</div>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default Card;
