import "./Checkout4.css";
import AsideCheckout from "../../components/AsideCheckout";
import Header from "../../components/Header";
import CheckoutSteps from "../../components/CheckoutSteps";
import DiscountHeader from "../../components/DiscountHeader";
import Footer from "../../components/Footer";
import { tarjetas } from "../../helpers/tarjetas.js";

function Checkout4() {
  return (
    <>
      <DiscountHeader />
      <Header />
      <div className="main-container">
        <CheckoutSteps />
        <p className="arrow_return"> ← Regresar</p>
        <div className="container">
          <main className="main">
            <h1 className="title_pagar">Pagar</h1>
            <form className="form4">
              <fieldset className="form4_fieldset1">
                {tarjetas.map((item) => {
                  return <img src={item} width="100px" height="30px" />;
                })}
              </fieldset>

              <hr className="hr_envio" />

              <fieldset className="form4_fieldset2">
                <div className="form4_data--row1">
                  <label className="form4_label">
                    Nombre del titular de la tarjeta
                  </label>
                  <input
                    className="form4_input"
                    type="text"
                    placeholder="Escribe tu texto"
                  />
                </div>

                <div className="form4_data--row2">
                  <label className="form4_label">Numero de Tarjeta</label>
                  <input
                    className="form4_input"
                    type="number"
                    placeholder="Escribe tu texto"
                  />
                </div>

                <div className="form4_data--row3">
                  <div className="form4_data_row3--input1">
                    <label className="form4_label">N. de Vencimiento</label>
                    <input
                      className="form4_input"
                      type="number"
                      placeholder="Escribe tu texto"
                    />
                  </div>
                  <div className="form4_data_row3--input2">
                    <label className="form4_label">CVV</label>
                    <input
                      className="form4_input"
                      type="number"
                      placeholder="Escribe tu texto"
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset className="form4_fieldset3">
                <button className="button_pagar">Pagar ahora</button>
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

export default Checkout4;
