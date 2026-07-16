import { RootState } from "../store";

export const selectCartItems = (s: RootState) => s.cart;
export const selectCartCount = (s: RootState) => s.cart.reduce((n, i) => n + i.qty, 0);
export const selectCartSubtotal = (s: RootState) =>
  s.cart.reduce((n, i) => n + i.qty * i.price, 0);