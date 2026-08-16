import { FaStar } from "react-icons/fa";
import person from "../assets/person.jpg"
import Button from "../Components/Button"
import Product from "../Components/Product"
const ProductEvaluation = () => {
    return(
        <>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mx-4 sm:mx-8 lg:mx-12">
        <p className="text-center text-gray-500">تقييم المنتج </p>
        <p className="text-center text-gray-500">معلومات إضافية</p>
        <p className="text-center text-gray-500">الوصف</p>
        </div>
        <hr className="text-gray-300 mx-15 my-5"/>
            <p className="text-gray-700" dir="rtl">10 تقييمات</p>
        <div dir="rtl" className="mx-4 sm:mx-8 lg:mx-12 flex flex-col lg:flex-row gap-8">
            <div className="flex flex-col my-7 gap-5"> {/*التقييمات*/}

              <div className="flex flex-col sm:flex-row gap-3">
                <img 
                src={person} 
                alt={person} 
                className="h-25 w-25 rounded-full object-cover p-2"/>

                <div className="w-full max-w-[400px]">
                    <h2 className="text-gray-600 font-bold my-2">منتج رائع، والتغليف والماتريال جيدة جدًا</h2>
                    <p className="text-gray-500">اختيار مثالي لإطلالة أنيقة ومريحة، بتصميم عصري يناسب مختلف الأوقات والمناسبات.
خامة مريحة وتفاصيل بسيطة تمنحكِ مظهراً أنيقاً وسهولة في التنسيق مع قطعكِ المفضلة.</p>
                    <div className="flex mt-4">
                      <FaStar className="text-[#FFDF00]"/>
                      <FaStar className="text-[#FFDF00]"/>
                      <FaStar className="text-[#FFDF00]"/>
                      <FaStar className="text-[#FFDF00]"/>
                      <FaStar className="text-[#FFDF00]"/>
                     </div>
                    <div className="flex flex-row gap-4 text-sm text-gray-500">
                        <p>ابرار ابراهيم</p>
                        <p>22 ديسمبر 2026</p>
                    </div>
                </div>
              </div>

              <div className="flex flex-row">
                <img 
                src={person} 
                alt={person} 
                className="h-25 w-25 rounded-full object-cover p-2"/>

                <div className="w-100">
                    <h2 className="text-gray-600 font-bold my-2">منتج رائع، والتغليف والماتريال جيدة جدًا</h2>
                    <p className="text-gray-500">اختيار مثالي لإطلالة أنيقة ومريحة، بتصميم عصري يناسب مختلف الأوقات والمناسبات.
خامة مريحة وتفاصيل بسيطة تمنحكِ مظهراً أنيقاً وسهولة في التنسيق مع قطعكِ المفضلة.</p>
                    <div className="flex mt-4">
                      <FaStar className="text-[#FFDF00]"/>
                      <FaStar className="text-[#FFDF00]"/>
                      <FaStar className="text-[#FFDF00]"/>
                      <FaStar className="text-[#FFDF00]"/>
                      <FaStar className="text-[#FFDF00]"/>
                     </div>
                    <div className="flex flex-row gap-4 text-sm text-gray-500">
                        <p>ابرار ابراهيم</p>
                        <p>22 ديسمبر 2026</p>
                    </div>
                </div>
              </div>

              <div className="flex flex-row">
                <img 
                src={person} 
                alt={person} 
                className="h-25 w-25 rounded-full object-cover p-2"/>

                <div className="w-100">
                    <h2 className="text-gray-600 font-bold my-2">منتج رائع، والتغليف والماتريال جيدة جدًا</h2>
                    <p className="text-gray-500">اختيار مثالي لإطلالة أنيقة ومريحة، بتصميم عصري يناسب مختلف الأوقات والمناسبات.
خامة مريحة وتفاصيل بسيطة تمنحكِ مظهراً أنيقاً وسهولة في التنسيق مع قطعكِ المفضلة.</p>
                    <div className="flex mt-4">
                      <FaStar className="text-[#FFDF00]"/>
                      <FaStar className="text-[#FFDF00]"/>
                      <FaStar className="text-[#FFDF00]"/>
                      <FaStar className="text-[#FFDF00]"/>
                      <FaStar className="text-[#FFDF00]"/>
                     </div>
                    <div className="flex flex-row gap-4 text-sm text-gray-500">
                        <p>ابرار ابراهيم</p>
                        <p>22 ديسمبر 2026</p>
                    </div>
                </div>
              </div>
            </div> 

            <div dir="rtl" className="p-10"> {/*اضف تقييم*/}
                <h2 className="mb-2 text-lg">اضف تقييم</h2>
                <div className="flex flex-row items-center gap-4 mb-6">
               <div> <p>تقييمك:</p> </div>
                <div className="flex items-center gp-4 cursor-pointer">
                      <FaStar className="text-gray-200 hover:text-yellow-300"/>
                      <FaStar className="text-gray-200 hover:text-yellow-300"/>
                      <FaStar className="text-gray-200 hover:text-yellow-300"/>
                      <FaStar className="text-gray-200 hover:text-yellow-300"/>
                      <FaStar className="text-gray-200 hover:text-yellow-300"/>
                </div>
                </div>

                <form className="flex flex-col gap-2">
                    <input
                type="text"
                placeholder="عنوان التقييم"
                required
                className="w-120 px-4 py-1 border border-gray-300 rounded-full outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
              />
                    <input
                type="text"
                placeholder="اكتب تقييمك هنا"
                required
                className="w-120 h-40 px-4 py-1 border border-gray-300 rounded-2xl outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
              />
                    
                    <div className="flex flex-row gap-5 justify-between">
                    <input 
                type="text"
                required
                placeholder="اسمك"
                className="w-[80] px-4 py-1 border border-gray-300 rounded-full outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                />
                    <input 
                type="text"
                required
                placeholder="بريدك الإلكتروني"
                className="w-[80] px-4 py-1 border border-gray-300 rounded-full outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                />
                
                    </div>
                    <Button text="أضف الآن" className="w-fit"/>
                </form>
            </div>
        </div>
        </>
    )
};

export default ProductEvaluation;
