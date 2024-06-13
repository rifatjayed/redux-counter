import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/state/counter/counterSlicer";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="card">
      <div className="card-header bg-secondary">
        <h2> My counter App</h2>
      </div>
      <div className="card-body">
        <h1>{count}</h1>

        <div className="my-4">
          <button
            onClick={() => {
              dispatch(increment());
            }}
            className="btn btn-success"
          >
            Incress
          </button>
          <button
            onClick={() => {
              dispatch(decrement());
            }}
            className="btn btn-danger"
          >
            Decress
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
