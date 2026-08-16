import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Product from "../Components/Product";
import Shoping from "../Components/Shoping";
import CartTable from "../Components/CartTable";
import Coupon from "../Components/Coupon";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const {
    subtotal,
    total: cartTotal,
  } = useContext(CartContext);

  const [total, setTotal] = useState(cartTotal);

  const handleApplyCoupon = (newTotal) => {
    setTotal(newTotal);
  };

  return (
    <>
      <Navbar />

      <Shoping />

      <div className="container mx-auto px-4 sm:px-6 py-6 md:py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

        {/* Coupon */}
        <div className="flex justify-end">
          <Coupon
            subtotal={subtotal}
            total={total}
            onApply={handleApplyCoupon}
          />
        </div>

        {/* Cart */}
        <div>
          <CartTable />
        </div>

      </div>

      <div>
        <h2 className="text-center text-gray-800 font-bold text-lg mb-2">
         منتجات مشابهه
        </h2>

        <div className="w-16 h-1 bg-[#7DCCDA] rounded mx-auto mb-8"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4">
        <Product />
        </div> 

      </div>

      <Footer />
    </>
  );
};

export default Cart;