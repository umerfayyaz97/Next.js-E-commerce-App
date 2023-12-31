"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
// import { Image as IImage } from "sanity";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
// import { client } from "../../../sanity/lib/client";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  emptyCart,
} from "@/store/slice/cartSlice";
import StripeCheckOutButton from "../siteComponents/StripeButton";
// import { Button } from "@/components/ui/button";
import { IProduct, getProducts } from "../Types/CartFetch";

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cartSlice.items);
  const totalQuantity = useSelector(
    (state: RootState) => state.cartSlice.totalQuantity
  );

  const [data, setData] = React.useState<IProduct[]>([]);
  console.log("cart data", data);

  React.useEffect(() => {
    const fetchData = async () => {
      const products: IProduct[] = await getProducts();
      setData(products);
    };
    fetchData();
  }, []);

  // Calculate the total price using Redux data
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrement = (id: string) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id: string) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  return (
    <div className="container mx-auto mt-8">
      {cartItems.length === 0 ? (
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-semibold">Your Cart is Empty</h2>
          <p className="text-gray-500">
            Add some items to your cart to see them here.
          </p>
        </div>
      ) : (
        <>
          <h2 className="mb-4 text-2xl font-semibold">Your Cart</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {cartItems?.map((item) => {
              const product = data.find((p) => p._id === item.id);
              console.log("prod", product);
              return (
                product && (
                  <div
                    key={item.id}
                    className="p-4 bg-white rounded-md shadow-md"
                  >
                    <div className="mb-4">
                      <Image
                        src={urlForImage(product.image[0]).url()}
                        alt={item.title}
                        height={150}
                        width={150}
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p>Price: ${item.price}</p>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleDecrement(item.id)}
                        className="px-2 py-1 bg-gray-300 rounded-md"
                      >
                        -
                      </button>
                      <p>Quantity: {item.quantity}</p>
                      <button
                        onClick={() => handleIncrement(item.id)}
                        className="px-2 py-1 bg-gray-300 rounded-md"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="px-2 py-1 mt-2 text-white bg-red-500 rounded-md"
                    >
                      Remove
                    </button>
                  </div>
                )
              );
            })}
          </div>
          {/* Total Quantity and Total price  */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Receipt</h2>
            <div className="p-4 bg-white rounded-md shadow-md">
              <p>Total Quantity: {totalQuantity}</p>
              <p>Total Price: ${totalPrice.toFixed(2)}</p>
              <button
                onClick={handleEmptyCart}
                className="px-2 py-1 mt-2 bg-gray-300 rounded-md"
              >
                Empty Cart
              </button>
              <StripeCheckOutButton />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
