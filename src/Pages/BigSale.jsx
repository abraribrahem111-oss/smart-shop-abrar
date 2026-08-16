import Button from "../Components/Button";
import Boy from "../assets/Boy.png";
import Girl from "../assets/Girl.png";

const BigSale = () => {
    return(
        <>
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#BDE6FC] overflow-hidden px-4">
        <div className="w-full md:w-[25%] flex justify-center">
            <img 
            src={Boy} 
            alt="Boy Model"
            className="w-70 h-100 bottom=0 left=0"
            />
        </div>

        <div className="w-full md:w-[50%] text-center my-10 md:my-20 items-center flex flex-col gap-6 md:gap-10">
            <p>
                أكبر خصم على الإطلاق
            </p>

            <h1 className="text-[#9363B5] text-4xl sm:text-5xl lg:text-6xl">
                أحدث ملابس الأطفال
            </h1>

           <div className="flex justify-center items-center text-2xl sm:text-3xl lg:text-4xl gap-4 sm:gap-7 font-bold">

            <div className="text-[#9363B5]">
                <p>00</p>
                <p>ثانية</p>
            </div>

            <div>
                <p>00</p>
                <p>دقيقة</p>
            </div>

            <div>
                <p>00</p>
                <p>ساعة</p>
            </div>

            <div>
                <p>00</p>
                <p>يوم</p>
            </div>

            </div>

            <Button
            text="تسوق الآن"
            className="
            bg-[#9363B5]
            hover:bg-purple-300
            "/>

        </div>

        <div className="w-full md:w-[25%] flex justify-center">
            <img 
            src={Girl} 
            alt="Girl Model"
            className="w-70 h-100 bottom=0 left=0"
             />
        </div>

        </div>
        </>

    )
}

export default BigSale;