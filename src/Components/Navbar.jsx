import { CiSearch } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import PupLogin from "../Components/PupLogin";
import Search from "../Components/Search";
import { CiShop } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
    const isLoggedIn = false;

  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-between text-white px-4 md:px-8 lg:px-12 py-6 md:py-8 bg-gray-50 gap-3">
      <div className="relative flex items-center gap-4 md:gap-5 p-2 md:p-4 text-gray-600 order-2 md:order-1 ">

  
  <Link to="/cart" className="cursor-pointer">
    <FiShoppingCart />
  </Link>


  <button className="cursor-pointer">
    <FaRegHeart />
  </button>


  <div className="relative">
    <button
      onClick={() => setShowProfile(!showProfile)}
      className="cursor-pointer"
    >
      <RxPerson />
    </button>

  </div>

  <div className="relative">
    <button
      onClick={() => setShowSearch(!showSearch)}
      className="cursor-pointer"
      >
      <CiSearch />
    </button>
  </div>
      {showProfile && (
        <div className="absolute left-0 top-full mt-2 z-50">
          <PupLogin isLoggedIn={isLoggedIn} />
          </div>
      )}
    {showSearch && (
      <div className="absolute left-0 md:left-7 top-full z-50 mt-3 w-[calc(100vw-2rem)] max-w-[300px]">
        <div className="rounded-lg bg-[#7DCCDA] p-5 shadow-lg">
          <Search />
        </div>
      </div>
    )}

</div>

      <div className="flex items-center justify-center order-1 md:order-2 w-full md:w-auto">
        <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs md:text-sm text-gray-600">
          <li><Link to="/products">اتصل بنا</Link></li>
          <li><Link to="/products">المدونة</Link></li>
          <li><Link to="/products">الشروط والأحكام</Link></li>
          <li><Link to="/products">نبذه عنا</Link></li>
          <li><Link to="/products">الخدمات</Link></li>
          <li><Link to="/Products">المنتجات</Link></li>
          <li className="text-[#7DCCDA]"><Link to="/">الرئيسية</Link></li>
        </ul>

        <div className="flex items-center gap-1 mx-10">
      <div className="w-8 h-8 rounded-xl bg-[#7DCCDA] flex items-center justify-center">
        <CiShop className="text-white text-2xl" />
      </div>

      <p className="text-sm text-gray-800">
        Smart <br />
        Shop
      </p>
    </div>
      </div>


    </div>
    </>
  )
}

export default Navbar;