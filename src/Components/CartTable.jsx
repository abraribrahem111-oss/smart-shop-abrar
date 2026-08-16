import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartTable = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
    total,
  } = useContext(CartContext);

  return (
    <div dir="rtl" className="p-3 sm:p-5 lg:p-8 ml-0">

      {/* Header */}
      <div className="hidden sm:grid grid-cols-4 items-center border-b border-gray-200 pb-5 text-gray-900 font-bold">
        <div className="text-center">
          المنتج
        </div>

        <div className="text-center">
          السعر
        </div>

        <div className="text-center">
          الكمية
        </div>

        <div className="text-center">
          المجموع
        </div>

      </div>

      {/* Products */}
      {cart.length > 0 ? (

        <div>

          {cart.map((item) => (

            <div
              key={item.id}
              className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-0 items-center border-b border-gray-200 py-5"
            >

              {/* Product */}
              <div className="flex items-center justify-center gap-4">

                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md border border-gray-200"
                />

                <div className="text-right">

                  <h2 className="font-bold text-gray-900">
                    {item.name}
                  </h2>

                  <p className="text-sm text-gray-500 mt-2">
                    اللون: {item.color || "غير محدد"}
                  </p>

                  <p className="text-sm text-gray-500">
                    الوزن: {item.weight || "غير محدد"}
                  </p>

                </div>

                {/* Remove */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-[#7DCCDA] hover:text-red-500 text-xl transition"
                >
                  ×
                </button>

              </div>


              {/* Price */}
              <div className="text-center font-semibold">
                {item.price} ج.م
              </div>


              {/* Quantity */}
              <div className="flex justify-center">

                <div className="flex items-center gap-3">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-7 h-7 rounded bg-gray-100 hover:bg-gray-200 transition"
                  >
                    −
                  </button>

                  <span className="w-5 text-center">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="w-7 h-7 rounded bg-gray-100 hover:bg-gray-200 transition"
                  >
                    +
                  </button>

                </div>

              </div>


              {/* Item Total */}
              <div className="text-center font-semibold">
                {item.price * item.quantity} ج.م
              </div>

            </div>

          ))}


          {/* Footer */}
          <div className="flex items-center justify-between mt-5">

            <button
              onClick={clearCart}
              className="text-[#7DCCDA] font-bold hover:underline"
            >
              مسح السلة
            </button>

            <div className="font-bold">

              الإجمالي:

              <span className="mr-2">
                {total} ج.م
              </span>

            </div>

          </div>

        </div>

      ) : (

        /* Empty Cart */
        <div className="flex flex-col items-center justify-center py-24">

          <p className="text-xl font-bold text-gray-500">
            السلة فارغة 🛒
          </p>

        </div>

      )}

    </div>
  );
};

export default CartTable;