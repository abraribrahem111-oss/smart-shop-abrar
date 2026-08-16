import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <footer className="bg-[#55A8B5] text-white mt-8 rounded-t-md">

        <div className="max-w-5xl mx-auto px-5 py-6 text-center">

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-5 text-sm mb-5">

            <a href="#" className="hover:text-gray-200 transition">
              الرئيسية
            </a>

            <a href="#" className="hover:text-gray-200 transition">
              المنتجات
            </a>

            <a href="#" className="hover:text-gray-200 transition">
              السلة
            </a>

            <a href="#" className="hover:text-gray-200 transition">
              تتبع طلبك
            </a>

            <a href="#" className="hover:text-gray-200 transition">
              الشروط والأحكام
            </a>

            <a href="#" className="hover:text-gray-200 transition">
              اتصل بنا
            </a>

          </div>


          {/* Social Icons */}
          <div className="flex justify-center items-center gap-4 mb-5">

            <a
              href="#"
              className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>

            <a
              href="#"
              className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center hover:scale-110 transition"
            >
              <FaYoutube />
            </a>

            <a
              href="#"
              className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-8 h-8 bg-sky-400 rounded-full flex items-center justify-center hover:scale-110 transition"
            >
              <FaXTwitter />
            </a>

          </div>


          <p className="text-sm mb-4">
            ابقَ على تواصل
          </p>


          <p className="text-[10px] opacity-80">
            جميع الحقوق محفوظة © 2025
          </p>

        </div>

      </footer>
      </>
  )
}

export default Footer