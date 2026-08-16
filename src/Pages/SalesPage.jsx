import { CiDeliveryTruck } from "react-icons/ci";
import { GoDeviceMobile } from "react-icons/go";
import { LuWalletMinimal } from "react-icons/lu";
import { GoGift } from "react-icons/go";
import SaleKids from "../assets/sale-kids.png";
import SaleMens from "../assets/sale-mens.png";

const SalesPage = () => {
    return (
    <div dir="rtl" lang="ar" className="mx-4 sm:mx-8 lg:mx-12 my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex justify-center items-center">
                <CiDeliveryTruck className="h-10 w-10 border rounded text-[#7DCCDA] p-1 mx-2"/>
                <p>
                    توصيل مجاني<br/>
                    <span className="text-gray-400">للطلبات اعلى من 200 جنيه</span>
                </p>
            </div>
            <div className="flex justify-center items-center">
                <GoDeviceMobile className="h-10 w-10 border rounded text-[#7DCCDA] p-1 mx-2"/>
                <p>
                    دعم فني <br/>
                    <span className="text-gray-400">دعم على مدار الساعة</span>
                </p>
            </div>
            <div className="flex justify-center items-center">
                <LuWalletMinimal className="h-10 w-10 border rounded text-[#7DCCDA] p-1 mx-2"/>
                <p>
                    إسترجاع أموال<br/>
                    <span className="text-gray-400">استرداد امن لاموالك او الاستبدال</span>
                </p>
            </div>
            <div className="flex justify-center items-center">
                <GoGift className="h-10 w-10 border rounded text-[#7DCCDA] p-1 mx-2"/>
                <p>
                    عروض حصرية <br/>
                    <span className="text-gray-400">خصومات كبيرة على منتجاتنا</span>
                </p>
            </div>
        </div>
<hr className="text-[#7DCCDA] mt-10"/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 my-8 lg:my-12">
            <div>
                <img
      src={SaleKids}
      alt="SaleKids"
      className="w-full max-w-[500px] h-auto object-contain"
    />
    </div>
            <div className="flex justify-between items-center m-15">
                <img
      src={SaleMens}
      alt="SaleMens"
      className="w-full max-w-[500px] h-auto object-contain"
    />
            </div>
        </div>
    </div>
    )
}

export default SalesPage;