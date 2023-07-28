"use client";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "@/store/store";
// import { cartActions } from "@/store/slice/cartSlice";
// import { Button } from "@/components/ui/button";

// interface IProduct {
//   title: string;
//   image: typeof Image;
//   price: number;
//   _id: string;
// }

// const AddToCart = (item: IProduct[]) => {
//   const dispatch = useDispatch();

//   const addItem = () => {
//     dispatch(cartActions.addToCart(item));
//   };

//   return (
//     <div>
//       <Button onClick={addItem}>Add to Cart</Button>
//     </div>
//   );
// };

// export default AddToCart;

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
