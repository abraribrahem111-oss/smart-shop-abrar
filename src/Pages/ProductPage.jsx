import Navbar from "../Components/Navbar";
import Product from "../Components/Product";
import Footer from "../Components/Footer";
import Shoping from "../Components/Shoping";
import ProductDetails from "../Components/ProductDetails";
import ProductEvaluation from "../Components/ProductEvaluation";

const ProductPage = () => {
  return (
    <>
    <div>
      <Navbar />
      <Shoping />
      <ProductDetails />
      <ProductEvaluation />
      <div>
        <h2 className="text-center text-gray-800 font-bold text-lg mb-2">
         منتجات مشابهه
        </h2>

        <div className="w-16 h-1 bg-[#7DCCDA] rounded mx-auto mb-8"></div>
<div className="grid grid-cols-4 gap-4 ">
        <Product />
        </div> 

      </div>
      <Footer />

    </div>
    </>
  )
}

export default ProductPage;