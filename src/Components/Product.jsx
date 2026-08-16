import { Link } from "react-router-dom";

import { FaHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

import blouse from "../assets/1.jpg";
import dress from "../assets/فستان.jpg";
import short from "../assets/شورت.jpg";
import shirt from "../assets/قميص.jpg";
import tShirt from "../assets/تيشيرت.jpg";
import shoze from "../assets/شوز.jpg";
import gazma from "../assets/جزمة.jpg";
import bag from "../assets/شنطه.jpg";

export const productData = [
  {
    id: 1,
    img: blouse,
    price: "500",
    sale: "550",
    name: "بلوزة بيضاء قطنيه",
    class: "حريمي"
    },
    {
      id: 2,
      img: dress,
      price: "1200",
      sale: "1400",
      name: "فستان ابيض صيفي",
      class: "حريمي"
    },
    {
      id: 3,
      img: short,
      price: "400",
      sale: "550",
      name: "شورت جينز اطفالي",
      class: "اطفالي"
    },
    {
      id: 4,
      img: shirt,
      price:"350",
      sale: "500",
      name: "قميص اسود رجالي",
      class: "رجالي"
    },
    {
      id: 5,
      img: tShirt,
      price: "450",
      sale: "500",
      name: "تي-شيرت اصفر صيفي",
      class: "اطفالي"
    },
    {
      id: 6,
      img: shoze,
      price: "800",
      sale: "1000",
      name: "شوز ابيض ",
      class: "بناتي"
    },
    {
      id: 7,
      img: gazma,
      price: "900",
      sale: "1100",
      name: "جزمة كلاسيك أسود",
      class: "رجالي"
    },
    {
      id: 8,
      img: bag,
      price: "1500",
      sale: "1750",
      name: "شنطة برجندي تشانل",
      class: "اكسسوارات"
    }
  ]
  const Product = ({ products }) => {
  return (
    <>
      {(products || productData).map((product) => (
                <div key={product.id}>
    <div className="flex flex-col justify-center items-center mb-10" dir="rtl">

      <div className="relative">
        <FaHeart className="absolute top-3 right-3 text-gray-500 text-xl cursor-pointer z-10 hover:text-red-500" />
        <Link to={`/product/${product.id}`}>
      <img
      src={product.img}
      alt={product.name}
      className="w-full max-w-[200px] h-56 sm:h-60 rounded object-cover cursor-pointer hover:scale-105 transition duration-300"/>
      </Link>
      </div>

      <div className="flex items-center justify-between w-full gap-3 px-2">

        <div className="flex">
          
          <FaStar className="text-gray-500"/>
          <FaStar className="text-[#FFDF00]"/>
          <FaStar className="text-[#FFDF00]"/>
          <FaStar className="text-[#FFDF00]"/>
          <FaStar className="text-[#FFDF00]"/>
        </div>

        <p className="text-[#7DCCDA] items-center justify-center flex flex-col"> 
          {product.price} <br/>
          <del className="text-xs text-[#7DCCDA] "> {product.sale} </del>
        </p>

      </div>

        <p className="w-full text-sm text-gray-600 mb-2 px-2 sm:px-4">
          {product.name} 
          </p>
       <div className="flex flex-wrap justify-start w-full gap-1 px-2 sm:px-4">
          <p className="text-gray-600 border px-1">xL</p>
          <p className="text-gray-600 border px-1">L</p>
          <p className="text-gray-600 border px-1">M</p>
          <p className="text-gray-600 border px-1">S</p>
          <p className="text-gray-600 border px-1">XS</p>
        </div>
    </div>
    </div>
      ))
      }
      
    </>
  )
}

export default Product