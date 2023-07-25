"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { counterActions } from "@/store/slice/counterSlice";

const counterview = () => {
  const dispatch = useDispatch();

  const counterValue = useSelector(
    (state: RootState) => state.counterSlice.value
  );
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div className="flex justify-center gap-6">
      <button className="px-3 py-4 bg-green-500 ronded-md" onClick={increment}>
        +
      </button>
      <div>Counter Valuee {counterValue}</div>
      <button className="px-3 py-4 bg-red-400 ronded-md" onClick={decrement}>
        -
      </button>
    </div>
  );
};

export default counterview;
