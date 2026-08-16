import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Login from "../Pages/Login"

const PupLogin = ({ isLoggedIn }) => {

  const user = {
    name: "Abrar Ibrahem",
    email: "abrar@gmail.com",
  };

  return (
    <div className="absolute top-full left-0 mt-2 w-52 max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-lg border border-gray-100 p-4 z-50">

      {!isLoggedIn ? (
        <>
        <div className="flex flex-rows items-center gap-4" dir="rtl">
            <CgProfile className="text-[#7DCCDA]"/>
          <Link
            to="/login"
            className="text-black py-2 mb-2 text-sm hover:text-[#7DCCDA]"
          >
            تسجيل الدخول
          </Link>
          </div>

          <div className="flex flex-rows items-center gap-4" dir="rtl">
            <CgProfile className="text-[#7DCCDA]"/>
          <Link
            to="/login"
            className="text-black py-2 mb-2 text-sm hover:text-[#7DCCDA]"
          >
            انشاء حساب
          </Link>
          </div>
        </>
      ) : (
        <>
          <div className="border-b pb-3 mb-3">
            <p className="font-semibold text-gray-800">
              {user.name}
            </p>

            <p className="text-sm text-gray-500">
              {user.email}
            </p>
          </div>

          <Link
            to="/profile"
            className="block text-gray-700 py-2 hover:text-[#7DCCDA]"
          >
            حسابي
          </Link>

          <button
            className="w-full text-right text-red-500 py-2"
          >
            تسجيل الخروج
          </button>
        </>
      )}

    </div>
  );
};

export default PupLogin;