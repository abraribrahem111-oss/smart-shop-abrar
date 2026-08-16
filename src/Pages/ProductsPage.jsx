import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Shoping from "../Components/Shoping";
import { useState } from "react";
import Product, { productData } from "../Components/Product";

import {
  FiSliders,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const ProductsPage = () => {
 // States
  const [category, setCategory] = useState("الكل");
  const [maxPrice, setMaxPrice] = useState(1750);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [sort, setSort] = useState("default");
  const [page, setPage] = useState(1);
  const [selectedBrands, setSelectedBrands] = useState([]);

  //Brandss
  const brands = [
  "ZARA",
  "H&M",
  "Nike",
  "Adidas",
  "Puma",
  "Gucci",
  "Prada",
  "Louis Vuitton",
];
  // Categories

  const categories = [
    "الكل",
    "حريمي",
    "رجالي",
    "اطفالي",
    "بناتي",
    "اكسسوارات",
  ];


  // Sizes
  const sizes = [
    "XS",
    "S",
    "M",
    "L",
    "XL",
  ];

  // Toggle Brands
  const toggleBrand = (brand) => {
  setPage(1);

  setSelectedBrands((prev) => {
    if (prev.includes(brand)) {
      return prev.filter((item) => item !== brand);
    }

    return [...prev, brand];
  });
};
  // Toggle Sizes

  const toggleSize = (size) => {

    setPage(1);

    setSelectedSizes((prev) => {

      if (prev.includes(size)) {
        return prev.filter((item) => item !== size);
      }

      return [...prev, size];

    });

  };

  // Filter Products
  let filteredProducts = productData.filter((product) => {

    const categoryMatch =
      category === "الكل" ||
      product.class === category;


    const priceNumber =
      Number(product.price.replace("$", ""));


    const priceMatch =
      priceNumber <= maxPrice;


    return categoryMatch && priceMatch;

  });


  // Sort
  if (sort === "low") {

    filteredProducts.sort(
      (a, b) =>
        Number(a.price.replace("$", "")) -
        Number(b.price.replace("$", ""))
    );

  }

  if (sort === "high") {

    filteredProducts.sort(
      (a, b) =>
        Number(b.price.replace("$", "")) -
        Number(a.price.replace("$", ""))
    );

  }


  // Pagination
  const productsPerPage = 6;

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const startIndex =
    (page - 1) * productsPerPage;

  const currentProducts =
    filteredProducts.slice(
      startIndex,
      startIndex + productsPerPage
    );


  // Reset
  const resetFilters = () => {

    setCategory("الكل");
    setMaxPrice(1750);
    setSelectedSizes([]);
    setSort("default");
    setPage(1);
  };

  return (
    <>
    <Navbar />
    <Shoping />

    <div className="min-h-screen px-4 sm:px-6 lg:px-10">
      <main className="max-w-7xl mx-auto px-0 sm:px-2 py-6 md:py-10">
        <div className="flex flex-col lg:flex-row gap-8">
        
          <section className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-7">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  أحدث المنتجات
                </h2>

                <p className="text-sm text-gray-400 mt-1">
                  {filteredProducts.length} منتج
                </p>

              </div>

              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => {

                    setSort(e.target.value);

                    setPage(1);

                  }}
                  className="appearance-none bg-white border border-gray-200 rounded-lg py-2.5 pr-4 pl-10 text-sm text-gray-600 outline-none cursor-pointer focus:border-[#7DCCDA]"
                >

                  <option value="default">
                    ترتيب حسب
                  </option>
                  <option value="low">
                    السعر من الأقل للأعلى
                  </option>
                  <option value="high">
                    السعر من الأعلى للأقل
                  </option>
                </select>

                <FiChevronDown
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={16}/>
              </div>
            </div>


            {currentProducts.length > 0 ? (

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8">
                <Product products={currentProducts} />
              </div>

            ) : (

              <div className="bg-white rounded-xl p-16 text-center">
                <h2 className="font-bold text-xl text-gray-700">
                  لا توجد منتجات
                </h2>
                <p className="text-gray-400 mt-2">
                  جرب تغيير الفلاتر
                </p>

                <button
                  onClick={resetFilters}
                  className="mt-5 bg-[#7DCCDA] text-white px-6 py-2 rounded-lg"
                >
                  إعادة ضبط الفلاتر
                </button>
              </div>
            )}


            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-10">

                <button
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                  className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 disabled:opacity-30">
                  <FiChevronRight size={16} />
                </button>


                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((number) => (

                  <button
                    key={number}
                    onClick={() => setPage(number)}
                    className={`w-9 h-9 rounded-full text-sm transition ${
                      page === number
                        ? "bg-[#7DCCDA] text-white"
                        : "bg-white border border-gray-200 text-gray-600 hover:border-[#7DCCDA]"
                    }`}
                  >
                    {number}
                  </button>
                ))}

                <button
                  disabled={page === totalPages}
                  onClick={() => setPage(page + 1)}
                  className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 disabled:opacity-30"
                >

                  <FiChevronLeft size={16} />
                </button>
              </div> )}
          </section>


          <aside className="w-full lg:w-[260px] order-first lg:order-last" dir="rtl">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-5">
                <button
                  onClick={resetFilters}
                  className="text-xs text-[#65b8c6] hover:underline" >
                  مسح الكل
                </button>


              <div className="pb-6 border-b border-gray-100">
                <h3 className="font-bold text-gray-800 mb-4">
                  التصنيفات
                </h3>
                <div className="space-y-3">
                  {categories.map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setCategory(item);
                        setPage(1);
                      }}
                      className={`w-full flex justify-between items-center text-sm transition ${
                        category === item
                          ? "text-[#5ab4c3] font-semibold"
                          : "text-gray-500 hover:text-[#5ab4c3]"
                      }`}>
                      <span>
                        {item}
                      </span>

                      {category === item && (
                        <span className="w-2 h-2 bg-[#7DCCDA] rounded-full" />
                      )}
                    </button>
                  ))}
                </div>
              </div>


              <div className="py-6 border-b border-gray-100">
                <h3 className="font-bold text-gray-800 mb-5">
                  السعر
                </h3>
                <input
                  type="range"
                  min="0"
                  max="1750"
                  step="50"
                  value={maxPrice}
                  onChange={(e) => {

                    setMaxPrice(
                      Number(e.target.value)
                    );
                    setPage(1);
                  }}
                  className="w-full accent-[#7DCCDA]"
                />

                <div className="flex justify-between text-xs text-gray-400 mt-3">
                  <span>
                    $0
                  </span>
                  <span className="text-[#5ab4c3] font-semibold">
                    ${maxPrice}
                  </span>
                </div>
              </div>


              <div className="py-6 border-b border-gray-100">
                <h3 className="font-bold text-gray-800 mb-4">
                  المقاسات
                </h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`px-3 py-1.5 text-xs border rounded transition ${
                        selectedSizes.includes(size)
                          ? "bg-[#7DCCDA] text-white border-[#7DCCDA]"
                          : "border-gray-200 text-gray-500 hover:border-[#7DCCDA]"
                      }`}>
                      {size}
                    </button>
                  ))}
                </div>
              </div>


              <div className="pt-6">
                <h3 className="font-bold text-gray-800 mb-4">
                  اللون
                </h3>
                <div className="flex flex-wrap gap-3">
                  <button className="w-5 h-5 rounded-full bg-black border-2 border-white ring-1 ring-gray-300" />
                  <button className="w-5 h-5 rounded-full bg-red-500 border-2 border-white ring-1 ring-gray-300" />
                  <button className="w-5 h-5 rounded-full bg-yellow-400 border-2 border-white ring-1 ring-gray-300" />
                  <button className="w-5 h-5 rounded-full bg-gFreen-500 border-2 border-white ring-1 ring-gray-300" />
                  <button className="w-5 h-5 rounded-full bg-blue-500 border-2 border-white ring-1 ring-gray-300" />
                  <button className="w-5 h-5 rounded-full bg-pink-500 border-2 border-white ring-1 ring-gray-300" />

                </div>
              </div>

        <div className="py-6 border-b border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4">
    الماركات العالمية
       </h3>

  <div className="space-y-3">
    {brands.map((brand) => (
      <label
        key={brand}
        className="flex items-center gap-3 cursor-pointer group">
        <input
          type="checkbox"
          checked={selectedBrands.includes(brand)}
          onChange={() => toggleBrand(brand)}
          className="w-4 h-4 accent-[#7DCCDA] cursor-pointer"
        />

        <span className="text-sm text-gray-500 group-hover:text-[#5ab4c3] transition">
          {brand}
        </span>
      </label>
    ))}
  </div>
</div>

            </div>
          </aside>
        </div>

      <div>
        <h2 className="text-center text-gray-800 font-bold text-lg mb-2">
         منتجات مشابهه
        </h2>

        <div className="w-16 h-1 bg-[#7DCCDA] rounded mx-auto mb-8"></div>
          <div className="grid grid-cols-4 gap-4 ">
        <Product />
        </div> 

      </div>
      </main>
    </div>
    <Footer />
</>
  );
};

export default ProductsPage;