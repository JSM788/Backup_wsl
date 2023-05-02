import "./Checkout.css";
import AsideCheckout from "../components/AsideCheckout";
import ArticleCheckout from "../components/ArticleCheckout";
import Header from "../components/Header";
// import CheckoutSteps from "../components/CheckoutSteps";
import DiscountHeader from "../components/DiscountHeader";
import Footer from "../components/Footer";


function Checkout() {
  let arreglo = [1, 2];

  return (
    <>
      <DiscountHeader />
      <Header />
      <div className="main-container">
      {/* <CheckoutSteps /> */}
        <p className="title_list">Lista de Carrito de compras</p>
        <div className="container">
          <main className="main">
            <section className="section">
              {arreglo?.length > 0 &&
                arreglo.map((e, i) => {
                  return <ArticleCheckout key={i} />;
                })}
            </section>
          </main>
          <AsideCheckout />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Checkout;
