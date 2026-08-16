import Product from "../Components/Product";

const ProductsSection = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
    <h1 className="text-center text-gray-800 font-bold text-2xl"> أحدث المنتجات  </h1>
    <div className="w-20 h-1 bg-[#7DCCDA] mt-2"> </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 sm:px-6 lg:px-10 my-8">
      <Product />
    </div>

    </>
  )
}

export default ProductsSection;