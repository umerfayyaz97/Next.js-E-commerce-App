"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { cartActions } from "@/store/slice/cartSlice";

interface IProduct {
  title: string;
  price: number;
  _id: string;
}

const AddToCart: React.FC<{ item: IProduct }> = ({ item }) => {
  const dispatch = useDispatch();

  const addItem = () => {
    const { title, price, _id } = item;
    dispatch(
      cartActions.addToCart({
        id: _id,
        title,
        price,
        quantity: 0,
        _id: undefined,
      })
    );
  };

  return (
    <div>
      <Button onClick={addItem}>Add to Cart</Button>
    </div>
  );
};

export default AddToCart;
