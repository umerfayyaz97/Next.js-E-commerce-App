"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import cartSlice, { cartActions } from "@/store/slice/cartSlice";
import { Button } from "@/components/ui/button";

const AddToCart = () => {
  const dispatch = useDispatch();

  // const counterValue = useSelector(
  //   (state: RootState) => state.counterSlice.value
  // );
  // const increment = () => {
  //   dispatch(counterActions.increment());
  // };
  // const decrement = () => {
  //   dispatch(counterActions.decrement());
  // };
  return (
    <div>
      <Button>Add to Cart</Button>
    </div>
  );
};

export default AddToCart;
