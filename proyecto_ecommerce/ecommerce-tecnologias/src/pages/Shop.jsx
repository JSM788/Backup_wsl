import x from "./Shop.module.css";
import Header from "../components/Header";
import DiscountHeader from "../components/DiscountHeader";
import AsideCheckout from "../components/AsideCheckout";
import Footer from "../components/Footer";
import Information from "../components/Information";
import DeliveryMethod from "../components/DeliveryMethod";
import Pay from "../components/Pay";
import Confirmation from "../components/Confirmation";
import Confirm from "../components/Confirm";


function Shop() {
  return (
    <>
      <DiscountHeader />
      <Header />
      <div className="main-container">
        {/* <CheckoutSteps /> */}
        <p className="arrow_return"> ← Regresar</p>
        <div className="container">
          <main className="main">
            <h1 className="title_datos">Tienda</h1>
            <hr />
            <Information />
            <DeliveryMethod />
            <Pay />
            <Confirmation />
            <Confirm />
          </main>
          <AsideCheckout />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Shop;
