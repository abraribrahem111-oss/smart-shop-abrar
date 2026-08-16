import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import BottomSection from "../Components/BottomSection";
import Footer from "../Components/Footer";
import SalesPage from "./SalesPage";
import ProductsSection from "./ProductsSection";
import BigSale from "./BigSale";
import FiltterPage from "./FiltterPage";

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <SalesPage />
    <ProductsSection />
    <BigSale />
    <FiltterPage />
    <BottomSection />
    <Footer />
    </>
  )
}

export default Home;