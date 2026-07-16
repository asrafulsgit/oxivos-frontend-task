import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string | StaticImageData;
  size: string;
  color: string;
  qty: number;
}

const initialState: CartItem[] = [];

const getUniqueId = (id: string, size: string, color: string) =>
  `${id}::${size}::${color}`;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const incoming = action.payload;
      const existing = state.find(
        (i) =>
          getUniqueId(i.id, i.size, i.color) ===
          getUniqueId(incoming.id, incoming.size, incoming.color),
      );
      if (existing) {
        existing.qty += incoming.qty;
      } else {
        state.push(incoming);
      }
    },
    updateQty(
      state,
      action: PayloadAction<{
        id: string;
        size: string;
        color: string;
        qty: number;
      }>,
    ) {
      const { id, size, color, qty } = action.payload;
      const item = state.find(
        (i) =>
          getUniqueId(i.id, i.size, i.color) === getUniqueId(id, size, color),
      );
      if (item) {
        item.qty = Math.max(1, qty);
      }
    },
    removeItem(
      state,
      action: PayloadAction<{ id: string; size: string; color: string }>,
    ) {
      const { id, size, color } = action.payload;

      const newState = state.filter(
        (i) =>
          getUniqueId(i.id, i.size, i.color) !== getUniqueId(id, size, color),
      );
      return newState;
    },

    clear() {
      return [];
    },
  },
});

export const { addItem, updateQty, removeItem, clear } = cartSlice.actions;

export default cartSlice.reducer;
