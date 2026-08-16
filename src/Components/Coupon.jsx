import { useState } from "react";

const coupons = [
  {
    code: "SAVE10",
    discount: 10,
  },
  {
    code: "SAVE20",
    discount: 20,
  },
  {
    code: "WELCOME",
    discount: 15,
  },
];

const Coupon = ({ subtotal, total, onApply }) => {
  const [coupon, setCoupon] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [note, setNote] = useState("");

  const handleApply = () => {
    if (!coupon.trim()) {
      setMessage("من فضلك أدخل كود الخصم");
      setSuccess(false);
      return;
    }

    const foundCoupon = coupons.find(
      (item) =>
        item.code.toLowerCase() === coupon.trim().toLowerCase()
    );

    if (!foundCoupon) {
      setMessage("كود الكوبون غير صحيح");
      setSuccess(false);
      return;
    }

    const discountAmount =
      (subtotal * foundCoupon.discount) / 100;

    const newTotal = subtotal - discountAmount;

    // إرسال السعر الجديد إلى Cart
    onApply(newTotal);

    setMessage(
      `تم تطبيق خصم ${foundCoupon.discount}% بنجاح`
    );

    setSuccess(true);
  };

  return (
    <div
      dir="rtl"
      className="w-full max-w-[500px] bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] p-8"
    >
      {/* Coupon */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          الكوبون
        </h2>

        <p className="text-xs text-gray-400 mb-5">
          أدخل رمز الكوبون الخاص بك إذا كان لديك واحد
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-stretch sm:items-center">
          <input
            type="text"
            value={coupon}
            onChange={(e) => {
              setCoupon(e.target.value);
              setMessage("");
            }}
            placeholder="رمز الكوبون"
            className="
              flex-1
              h-10
              border
              border-gray-300
              rounded-md
              px-3
              text-sm
              text-gray-700
              outline-none
              placeholder:text-gray-400
              focus:border-[#7DCCDA]
              transition
            "
          />

          <button
            onClick={handleApply}
            className="
              h-10
              px-7
              bg-[#7DCCDA]
              text-white
              text-sm
              rounded-md
              hover:opacity-90
              transition
              whitespace-nowrap
            "
          >
            تأكيد الكوبون
          </button>
        </div>

        {message && (
          <p
            className={`text-xs mt-2 ${
              success ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </section>

      {/* Note */}
      <section className="mt-7">
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          ملحوظة
        </h2>

        <p className="text-xs text-gray-400 mb-5">
          إضافة ملاحظة للبائع ...
        </p>

        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="اكتب ملاحظتك هنا ..."
          className="
            w-full
            h-[92px]
            resize-none
            border
            border-gray-300
            rounded-md
            p-4
            text-sm
            text-gray-700
            outline-none
            placeholder:text-gray-400
            focus:border-[#7DCCDA]
            transition
          "
        />
      </section>

      {/* Summary */}
      <section className="mt-5 space-y-4">
        <div className="flex items-center justify-between text-sm text-gray-800">
          <span>المجموع الفرعي</span>
          <span>{subtotal} ج.م</span>
        </div>

        <div className="flex items-center justify-between text-sm font-bold text-gray-900">
          <span>المجموع الإجمالي</span>
          <span>{total} ج.م</span>
        </div>
      </section>

      <p className="text-xs text-gray-400 text-right mt-5">
        الشحن والضرائب محسوبة عند الدفع
      </p>

      {/* Buttons */}
      <div className="flex items-center justify-between mt-5 gap-4">
        <button
          className="
            bg-[#7DCCDA]
            text-white
            text-sm
            px-8
            py-2
            rounded-md
            hover:opacity-90
            transition
          "
        >
          الدفع
        </button>

        <button
          className="
            bg-[#7DCCDA]
            text-white
            text-sm
            px-7
            py-2
            rounded-md
            hover:opacity-90
            transition
          "
        >
          تحديث السلة
        </button>
      </div>
    </div>
  );
};

export default Coupon;