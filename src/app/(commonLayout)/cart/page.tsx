import type { Metadata } from "next";
import Cart from "@/components/cart/Cart";

export const metadata: Metadata = {
  title: "Your Cart",
  description:
    "Review your selected luxury pieces and complete your order with ease.",
  alternates: {
    canonical: "/cart",
  },
};

const page = () => {
  return <Cart />;
};

export default page;
