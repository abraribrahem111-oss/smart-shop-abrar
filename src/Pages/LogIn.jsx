import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

import { HiOutlineLockClosed } from "react-icons/hi2";
import { MdOutlineMail } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

import { useState } from "react";

import Button from "../Components/Button"
import imglogin from "../assets/imglogin.jpg";
import imglogin2 from "../assets/imglogin2.jpg";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const inputStyle ="w-full border-b border-gray-200 py-2 pr-2 pl-8 text-sm outline-none focus:border-[#7DCCDA] transition"

  return (
  <>

      <div className="w-full max-w-6xl min-h-[650px] bg-white flex flex-col md:flex-row shadow-sm overflow-hidden m-auto">

        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-8 md:px-20">

          <h1 className="text-3xl font-bold text-black mb-16">
            Smart Shop
          </h1>

          {/* مهم: الـ div ده مش جوه حالة Login */}
          <div className="w-full max-w-sm text-right">

            {!isRegister ? (
              <>
                {/* ================= LOGIN ================= */}

                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  تسجيل الدخول
                </h2>

                <p className="text-xs text-gray-400 mb-8">
                  مرحباً بك مرة أخرى، قم بتسجيل الدخول إلى حسابك
                </p>

                <div className="mb-4">
                  <div className="relative">
                    <input
                      dir="rtl"
                      type="email"
                      placeholder="البريد الإلكتروني"
                      className={inputStyle}
                    />

                    <span className="absolute left-2 top-2 text-gray-300">
                      <MdOutlineMail />
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="relative">
                    <input
                      dir="rtl"
                      type="password"
                      placeholder="أدخل كلمة المرور"
                      className={inputStyle}
                    />

                    <span className="absolute left-2 top-2 text-gray-300">
                      <HiOutlineLockClosed />
                    </span>
                  </div>
                </div>

                <div className="flex flex-row text-left mb-6 justify-between mt-10">

                  <button className="text-[11px] text-[#7DCCDA] hover:underline">
                    هل نسيت كلمة المرور؟
                  </button>

                  <Button
                    className="rounded-sm hover:opacity-90 transition duration-300"
                    text="تسجيل الدخول"
                  />

                </div>

                <div className="text-center mt-5">

                  <span className="text-xs text-gray-400">
                    ليس لديك حساب؟
                  </span>

                  <button
                    onClick={() => setIsRegister(true)}
                    className="text-xs text-[#7DCCDA] mr-1 hover:underline"
                  >
                    إنشاء حساب
                  </button>

                </div>
              </>
            ) : (
              <>
                {/* ================= REGISTER ================= */}

                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  إنشاء حساب
                </h2>

                <p className="text-xs text-gray-400 mb-8">
                  أنشئ حسابك الآن واستمتع بتجربة التسوق
                </p>

                <div className="mb-4 relative">
                  <input
                    dir="rtl"
                    type="text"
                    placeholder="الاسم"
                    className={inputStyle}
                  />
                  <span className="absolute left-2 top-2 text-gray-300">
                      <IoMdPerson />
                    </span>
                </div>

                <div className="mb-4 relative">
                  <input
                    dir="rtl"
                    type="email"
                    placeholder="البريد الإلكتروني"
                    className={inputStyle}
                  />
                  <span className="absolute left-2 top-2 text-gray-300">
                      <MdOutlineMail />
                    </span>
                </div>

                <div className="mb-4 relative">
                  <input
                    dir="rtl"
                    type="password"
                    placeholder="كلمة المرور"
                    className={inputStyle}
                  />
                  <span className="absolute left-2 top-2 text-gray-300">
                      <HiOutlineLockClosed />
                    </span>
                </div>

                <button className="w-full bg-[#7DCCDA] text-white py-3 rounded-md">
                  إنشاء حساب
                </button>

                <div className="text-center mt-5">

                  <span className="text-xs text-gray-400">
                    لديك حساب بالفعل؟
                  </span>

                  <button
                    onClick={() => setIsRegister(false)}
                    className="text-xs text-[#7DCCDA] mr-1 hover:underline"
                  >
                    تسجيل الدخول
                  </button>

                </div>
              </>
            )}

            {/* ================= SOCIAL ================= */}

            <div className="text-center mt-5">

              <p className="text-center text-xs text-gray-500 mb-4">
                أو سجل الدخول عبر
              </p>

              <div className="flex justify-center gap-3">

                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#E60023] text-white flex items-center justify-center"
                >
                  <FaPinterestP />
                </a>

                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#0A66C2] text-white flex items-center justify-center"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#55ACEE] text-white flex items-center justify-center"
                >
                  <FaTwitter />
                </a>

              </div>

            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 min-h-[500px] relative">

          <img
            src={imglogin}
            alt="Smart Shop"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col">

            <button
              onClick={() => setIsRegister(false)}
              className={`text-xs px-5 py-3 rounded-r-md ${
                !isRegister
                  ? "bg-[#7DCCDA] text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              تسجيل الدخول
            </button>

            <button
              onClick={() => setIsRegister(true)}
              className={`text-xs px-5 py-3 rounded-r-md ${
                isRegister
                  ? "bg-[#7DCCDA] text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              إنشاء حساب
            </button>

          </div>

        </div>

      </div>

  </>
);
};

export default Login;