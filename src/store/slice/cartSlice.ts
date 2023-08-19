// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

// interface CartItem {
//   _id: null | undefined;
//   id: string;
//   title: string;
//   price: number;
//   quantity: number;
// }

// interface CartState {
//   items: CartItem[];
//   totalQuantity: number;
// }

// const initialState: CartState = {
//   items: [],
//   totalQuantity: 0,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action: PayloadAction<CartItem>) {
//       const { id } = action.payload;
//       const existingItem = state.items.find((item) => item.id === id);

//       if (existingItem) {
//         existingItem.quantity++;
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 });
//       }
//       state.totalQuantity = state.items.reduce(
//         (total, item) => total + item.quantity,
//         0
//       );
//     },
//     removeFromCart(state, action: PayloadAction<string>) {
//       const itemId = action.payload;
//       state.items = state.items.filter((item) => item.id !== itemId);
//       state.totalQuantity = state.items.reduce(
//         (total, item) => total + item.quantity,
//         0
//       );
//     },
//     emptyCart(state) {
//       state.items = [];
//       state.totalQuantity = 0;
//     },
//   },
// });

// export default cartSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  _id: null | undefined;
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },
    incrementQuantity(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.quantity++;
        state.totalQuantity = state.items.reduce(
          (total, item) => total + item.quantity,
          0
        );
      }
    },
    decrementQuantity(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity--;
        state.totalQuantity = state.items.reduce(
          (total, item) => total + item.quantity,
          0
        );
      }
    },
    emptyCart(state) {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  emptyCart,
} = cartSlice.actions;

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
