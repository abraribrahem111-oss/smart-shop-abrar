import { FaXTwitter } from "react-icons/fa6";

import lacoste from "../assets/lacoste.png";
import vans from "../assets/vans.jpg";
import vivienneWestwood from "../assets/vivienne-westwood.png";
import underarmour from "../assets/under armour.png";

import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";

const BottomSection = () => {
    return(
        <>
        <div className="py-8">

        <h2 className="text-center text-gray-700 text-sm mb-6">
          العلامات التجارية
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">

          <img
            src={lacoste}
            alt="Lacoste"
            className="w-20 h-auto object-contain opacity-60"
          />

          <img
            src={vans}
            alt="Vans"
            className="w-20 h-auto object-contain opacity-60"
          />

          <img
            src={vivienneWestwood}
            alt="The North Face"
            className="w-20 h-auto object-contain opacity-60"
          />

          <img
            src={underarmour}
            alt="Under Armour"
            className="w-20 h-auto object-contain opacity-60"
          />

          <img
            src={vans}
            alt="Vans"
            className="w-20 h-auto object-contain opacity-60"
          />

          <img
            src={lacoste}
            alt="Lacoste"
            className="w-20 h-auto object-contain opacity-60"
          />

        </div>
      </div>


      {/* ================= PRODUCTS ================= */}
      <div className="py-6 px-5 mb-15">

        <h2 className="text-center text-gray-800 font-bold text-lg mb-2">
          اختر إطلالتك
        </h2>

        <div className="w-16 h-1 bg-[#7DCCDA] rounded mx-auto mb-8"></div>


        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="text-center">

            <div className="overflow-hidden rounded-md">
              <img
                src={product1}
                alt="ملابس"
                className="w-full h-[240px] sm:h-[280px] object-cover hover:scale-105 transition duration-300"
              />
            </div>

             <h1 className="text-xlg text-black font-semibold mt-4">مع أجمل صيحات الموضة والفاشون</h1>
            <p className="text-xs text-gray-700 mt-2">
                أطلاله فريده مع افضل تشكيله ملابس رجالي
             </p>

          </div>


          {/* Card 2 */}
          <div className="text-center">

            <h1 className="text-xlg text-black font-semibold my-2"> أستمتعي بأجواء مبهره في الخروجات</h1>
            <p className="text-xs text-gray-700 mb-4">
             مع باقة من أجمل الملابس البناتي المودرن
            </p>

            <div className="overflow-hidden rounded-md">
              <img
                src={product2}
                alt="ملابس"
                className="w-full h-[280px] object-cover hover:scale-105 transition duration-300"
              />
            </div>


          </div>


          {/* Card 3 */}
          <div className="text-center">

            <div className="overflow-hidden rounded-md">
              <img
                src={product3}
                alt="أزياء"
                className="w-full h-[280px] object-cover hover:scale-105 transition duration-300"
              />

            <h1 className="text-xlg text-black font-semibold mt-4"> أشتري اللي يخليك شيك</h1>
            <p className="text-xs text-gray-700 mt-2">
             مع أحدث واجمل ملابس الشباب الحديثة
            </p>

            </div>


          </div>

        </div>

      </div>
    </>
    )
}

export default BottomSection;