import "./Checkout2.css";
import AsideCheckout from "../../components/AsideCheckout";
import Header from "../../components/Header";
import CheckoutSteps from "../../components/CheckoutSteps";
import DiscountHeader from "../../components/DiscountHeader";
import Footer from "../../components/Footer";

function Checkout2() {
  let arreglo = [1, 2];

  return (
    <>
      <DiscountHeader />
      <Header />
      <div className="main-container">
        <CheckoutSteps />
        <p className="arrow_return"> ← Regresar</p>
        <div className="container">
          <main className="main">
            <h1 className="title_datos">Datos Personales</h1>
            <form className="form2">
              <fieldset className="form2_fieldset1">
                <div className="form2_data">
                  <label className="form2_label">Nombres</label>
                  <input className="form2_input" type="text" placeholder="Escribe tu texto" />
                </div>
                <div className="form2_data">
                  <label className="form2_label">Apellidos</label>
                  <input className="form2_input" type="text" placeholder="Escribe tu texto" />
                </div>
                <div className="form2_data">
                  <label className="form2_label">Email</label>
                  <input className="form2_input" type="email" placeholder="Escribe tu texto" />
                </div>
                <div className="form2_data">
                  <label className="form2_label">Telefono</label>
                  <input className="form2_input" type="phone" placeholder="Escribe tu texto" />
                </div>
                <div className="form2_data">
                  <label className="form2_label">Tipo de documento</label>
                  <input className="form2_input" type="number" placeholder="Escribe tu texto" />
                </div>
                <div className="form2_data">
                  <label className="form2_label">Numero</label>
                  <input className="form2_input" type="number" placeholder="Escribe tu texto" />
                </div>
              </fieldset>
              <fieldset>
                <button className="button_continue">Continuar</button>
              </fieldset>
            </form>
          </main>
          <AsideCheckout />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Checkout2;
