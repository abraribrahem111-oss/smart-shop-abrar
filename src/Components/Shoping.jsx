import { Link } from "react-router-dom";
import shoping from "../assets/shopingMan.png"
const Shoping = () => {
    return(
        <>
       <div className="bg-gradient-to-r from-blue-100 to-[#7DCCDA] flex flexs-rows justify-content" dir="rtl">
        <img 
        src={shoping}
        alt="shoping Man" 
        className="w-50 h-40 sm:h-52 md:h-64 "/>
        <div className="flex flex-col justify-center items-center p-15 m-auto">
  <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white my-4 md:my-6 text-center">
    تسوق أحدث المنتجات العصرية
  </h1>

  <Link to="/" className="text-xl text-white">الرئيسية</Link>
  </div>
</div>
        </>
    )
}

export default Shoping;