import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [coupon, setCoupon] = useState(null);

  // إضافة منتج
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity,
        },
      ];
    });
  };

  // زيادة الكمية
  const increaseQuantity = (id) => {
    setCart((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // تقليل الكمية
  const decreaseQuantity = (id) => {
    setCart((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );
  };

  // حذف منتج
  const removeItem = (id) => {
    setCart((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  // مسح السلة
  const clearCart = () => {
    setCart([]);
    setCoupon(null);
  };

  // المجموع قبل الخصم
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // تطبيق الكوبون
  const applyCoupon = (code) => {
    const coupons = {
      SAVE10: 10,
      SAVE20: 20,
    };

    const discountPercentage = coupons[code];

    if (!discountPercentage) {
      return {
        success: false,
        message: "كود الخصم غير صحيح",
      };
    }

    setCoupon({
      code,
      percentage: discountPercentage,
    });

    return {
      success: true,
      message: `تم تطبيق خصم ${discountPercentage}% 🎉`,
    };
  };

  // قيمة الخصم
  const discount = coupon
    ? (subtotal * coupon.percentage) / 100
    : 0;

  // الإجمالي النهائي
  const total = subtotal - discount;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart,

        subtotal,
        coupon,
        discount,
        total,
        applyCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;