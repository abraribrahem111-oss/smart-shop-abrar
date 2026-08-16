import hero from "../assets/hero.png";
import Button from "./Button";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { TbPointFilled } from "react-icons/tb";

const Hero = () => {
    return (
     <>
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-5 md:px-10 lg:px-16 py-8 md:py-10 bg-gray-50 gap-8">
  <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px] shrink-0">
    <div className="absolute inset-0 bg-[#7DCCDA] rounded-[40%] rotate-12"></div>
      <div className="absolute w-[260px] h-[260px] sm:w-[330px] sm:h-[330px] lg:w-[400px] lg:h-[400px] bg-gray-200 rounded-full top-4 left-2"></div>

    <img
      src={hero}
      alt="hero"
      className="absolute bottom-0 z-10 w-full h-full object-contain"
    />
  </div>

  {/* النص */}
  <div className="flex flex-col items-end text-right gap-4 justify-center">

    <p className="text-gray-500 text-sm">
      براندات نسائية عالمية
    </p>

    <h1 className="text-5xl font-bold leading-relaxed">
      أحدث أدوات الجمال
    </h1>

    <p className="text-gray-500">
      براندات نسائية عالمية
    </p>

    <Button
      text="استكشف الآن"
      type="button"
      className="mt-3"
    />

  </div>


</div>
  <div className="flex justify-center items-center bg-gray-50">
<SlArrowLeft className="text-[#7DCCDA] bg-white w-8 h-8 rounded-full border p-2 hover:bg-[#7DCCDA] hover:text-white"/>

<div className="flex justify-center items-center text-gray-300 bg-white border rounded-2xl p-2 m-2">
  <TbPointFilled />
  <TbPointFilled />
  <TbPointFilled />
</div>

<SlArrowRight className="text-[#7DCCDA] bg-white w-8 h-8 border rounded-full p-2 hover:bg-[#7DCCDA] hover:text-white"/>
  </div>
     </>
    )
}

export default Hero;