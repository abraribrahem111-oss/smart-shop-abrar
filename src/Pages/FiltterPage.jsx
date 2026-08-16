import { useState } from "react";

import Product from "../Components/Product";

import blouse from "../assets/1.jpg";
import dress from "../assets/فستان.jpg";
import short from "../assets/شورت.jpg";
import shirt from "../assets/قميص.jpg";
import tShirt from "../assets/تيشيرت.jpg";
import shoze from "../assets/شوز.jpg";
import gazma from "../assets/جزمة.jpg";
import bag from "../assets/شنطه.jpg";

const FiltterPage = () => {

  const data = [
    {
      id: 1,
      img: blouse,
      price: "$500",
      sale: "$550",
      name: "بلوزة بيضاء قطنيه",
      class: "حريمي"
    },
    {
      id: 2,
      img: dress,
      price: "$1200",
      sale: "$1400",
      name: "فستان ابيض صيفي",
      class: "حريمي"
    },
    {
      id: 3,
      img: short,
      price: "$400",
      sale: "$550",
      name: "شورت جينز اطفالي",
      class: "اطفالي"
    },
    {
      id: 4,
      img: shirt,
      price: "$350",
      sale: "$500",
      name: "قميص اسود رجالي",
      class: "رجالي"
    },
    {
      id: 5,
      img: tShirt,
      price: "$450",
      sale: "$500",
      name: "تي-شيرت اصفر صيفي",
      class: "اطفالي"
    },
    {
      id: 6,
      img: shoze,
      price: "$800",
      sale: "$1000",
      name: "شوز ابيض",
      class: "بناتي"
    },
    {
      id: 7,
      img: gazma,
      price: "$900",
      sale: "$1100",
      name: "جزمة كلاسيك أسود",
      class: "رجالي"
    },
    {
      id: 8,
      img: bag,
      price: "$1500",
      sale: "$1750",
      name: "شنطة برجندي تشانل",
      class: "اكسسوارات"
    }
  ];


  // 1️⃣ التصنيف المختار
  const [selectedClass, setSelectedClass] = useState("all");


  // 2️⃣ لما المستخدم يضغط على تصنيف
  const handleFilter = (category) => {
    console.log(category);
    setSelectedClass(category);
  };


  // 3️⃣ فلترة المنتجات
  const filteredData =
    selectedClass === "all"
      ? data
      : data.filter((product) => product.class === selectedClass);


  return (
    <>
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 justify-center my-8 lg:my-12 px-4">


      {/* التصنيفات */}
      <div className=" flex flex-wrap items-center justify-center gap-4 p-4 bg-white rounded-xl">
        <table className="border rounded-full">
          <tbody>
            <tr className="bg-[#7DCCDA]">
              <td className="p-4">
               <p> تسوق حسب التصنيف</p>
              </td>
            </tr>

            <tr
              className="border cursor-pointer"
              onClick={() => handleFilter("رجالي")} >
              <td className="p-4">
               <p> رجالي</p>
              </td>
            </tr>

            <tr
              className="border cursor-pointer"
              onClick={() => handleFilter("حريمي")} >
              <td className="p-4">
               <p> حريمي</p>
              </td>
            </tr>


            <tr
              className="border cursor-pointer"
              onClick={() => handleFilter("اطفالي")}>
              <td className="p-4">
               <p> اطفالي</p>
              </td>
            </tr>


            <tr
              className="border cursor-pointer"
              onClick={() => handleFilter("اكسسوارات")}>
              <td className="p-4">
               <p> اكسسوارات</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center mb-10">

          <Product products={filteredData} />

      </div>
      </div>
    </>
  );
};

export default FiltterPage;