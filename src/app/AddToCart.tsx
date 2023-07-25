"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { cartActions } from "@/store/slice/cartSlice";
import { Button } from "@/components/ui/button";

const AddToCart = () => {
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(cartActions.addToCart({ quantity: 1 }));
  };
  // const decrement = () => {
  //   dispatch(counterActions.decrement());
  // };
  return (
    <div>
      <Button onClick={addItem}>Add to Cart</Button>
    </div>
  );
};

export default AddToCart;
