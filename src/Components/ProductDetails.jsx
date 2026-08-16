import { useParams } from "react-router-dom";
import { productData } from "../Components/Product";
import { FaStar } from "react-icons/fa";
import { FaHeart,  FaXTwitter} from "react-icons/fa6";
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import Button from "./Button"
import { useState, useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

import { CartContext } from "../Context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useContext(CartContext);

  const product = productData.find(
    (item) => item.id === Number(id)
  );

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

   if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          المنتج غير موجود
        </h1>
      </div>
    );
  }

  return (
    <div dir="rtl" className="mx-4 sm:mx-6 lg:mx-12 flex flex-col lg:flex-row gap-6 lg:gap-10">
      <div className="w-full lg:w-1/2 m-0 lg:m-6 flex flex-col items-center">
      <img
        src={product.img}
        alt={product.name}
        className="w-full max-w-[500px] h-auto aspect-square object-cover border"
      />

      <div className="flex flex-wrap justify-center gap-2 mt-5">
      <img src={product.img} className="w-20 h-20 border"/>
      <img src={product.img} className="w-20 h-20 border"/>
      <img src={product.img} className="w-20 h-20 border"/>
      <img src={product.img} className="w-20 h-20 border"/>
      <img src={product.img} className="w-20 h-20 border"/>
      </div>

      </div>

      <div className="w-full lg:w-1/2 m-0 lg:m-6">
      <p className="text-black font-bold text-2xl">{product.name}</p>

      <div className="text-gray-600 text-sm flex flex-row gap-5 my-4">
      <p>{product.price}ج.م</p>
      <p><del>{product.sale}ج.م</del></p>
      </div>

      <div className="flex">
          
          <FaStar className="text-[#FFDF00]"/>
          <FaStar className="text-[#FFDF00]"/>
          <FaStar className="text-[#FFDF00]"/>
          <FaStar className="text-[#FFDF00]"/>
          <FaStar className="text-[#FFDF00]"/>
          <p className="text-sm items-center">(50)</p>

        </div>

        <p className="text-gray-600 text-sm my-5">بساطة الجينز، وأناقة اللوك المثالي ✨ <br/>
شورت جينز أساسي في دولاب طفلك لكل إطلالة مميزة.</p>

      <div>
        <p className="font-bold text-xl my-3">اللون:</p>
        <div className="flex flex-wrap gap-3">
                <button className="w-4 h-4 rounded-full bg-black border-2 border-white ring-1 ring-gray-300" />
                <button className="w-4 h-4 rounded-full bg-red-500 border-2 border-white ring-1 ring-gray-300" />
                <button className="w-4 h-4 rounded-full bg-yellow-400 border-2 border-white ring-1 ring-gray-300" />
                <button className="w-4 h-4 rounded-full bg-gFreen-500 border-2 border-white ring-1 ring-gray-300" />
                <button className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white ring-1 ring-gray-300" />
                <button className="w-4 h-4 rounded-full bg-pink-500 border-2 border-white ring-1 ring-gray-300" />
        </div>
      </div>  

        <p className="font-bold text-xl my-3">الوزن:</p>
      <div className="flex flex-row gap-3">
        <p className="border-1 rounded text-gray-600 p-1 hover:border-blue-300">2 كيلو</p>
        <p className="border-1 rounded text-gray-600 p-1 hover:border-blue-300">2 كيلو</p>
        <p className="border-1 rounded text-gray-600 p-1 hover:border-blue-300">2 كيلو</p>
      </div>

    <div className="flex flex-row my-5 gap-6 items-center">
      <div className="flex items-center border border-gray-300 rounded-md w-fit">
      <button
        onClick={decreaseQuantity}
        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100"
      >
        <FaMinus size={10} />
      </button>

      <span className="w-8 text-center text-sm">
        {quantity}
      </span>

      <button
        onClick={increaseQuantity}
        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100"
      >
        <FaPlus size={10} />
      </button>
    </div>

      <Button
  text="اضف للسلة"
  className="w-30 h-7 p-2 text-sm items-center flex"
  onClick={() => addToCart(product, quantity)}
/>

    </div>

    <div className="flex flex-row items-center gap-4">
      <FaHeart className="text-gray-300 text-xl cursor-pointer z-10 hover:text-red-500" />
     <p>أضف إلى المفضلة</p>
    </div>

    <Button text="إشتري الآن" className="w-full my-5 rounded-xl"/>

    <p className="">شارك عبر مواقع التواصل</p>
    <div className="flex items-center gap-4 my-2">

            <a
              href="#"
              className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>

            <a
              href="#"
              className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center hover:scale-110 transition"
            >
              <FaYoutube />
            </a>

            <a
              href="#"
              className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-6 h-6 bg-sky-400 rounded-full flex items-center justify-center hover:scale-110 transition"
            >
              <FaXTwitter />
            </a>

          </div>
      </div>

    </div>
  );
}

export default ProductDetails;