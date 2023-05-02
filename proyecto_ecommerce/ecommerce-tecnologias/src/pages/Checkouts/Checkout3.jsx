import "./Checkout3.css";
import AsideCheckout from "../../components/AsideCheckout";
import Header from "../../components/Header";
import CheckoutSteps from "../../components/CheckoutSteps";
import DiscountHeader from "../../components/DiscountHeader";
import Footer from "../../components/Footer";

function Checkout3() {
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
            <h1 className="title_envio">Envio</h1>
            <form className="form3">
              <fieldset>
                <div className="form3_data--row1">
                  <div className="form3_data_row1--input1 ">
                    <label className="form3_label">Provincia</label>
                    <input
                      className="form3_input"
                      type="text"
                      placeholder="Escribe tu texto"
                    />
                  </div>
                  <div className="form3_data_row1--input2">
                    <label className="form3_label">Distrito</label>
                    <input
                      className="form3_input"
                      type="text"
                      placeholder="Escribe tu texto"
                    />
                  </div>
                </div>
                <div className="form3_data--row2">
                  <label className="form3_label ">Ciudad</label>
                  <input
                    className="form3_input"
                    type="email"
                    placeholder="Escribe tu texto"
                  />
                </div>
                <div className="form3_data--row3">
                  <label className="form3_label">Direccion</label>
                  <input
                    className="form3_input"
                    type="phone"
                    placeholder="Escribe tu texto"
                  />
                </div>
                <div className="form3_data--row4">
                  <label className="form3_label">Direccion 2</label>
                  <input
                    className="form3_input"
                    type="number"
                    placeholder="Escribe tu texto"
                  />
                </div>
                <div className="form3_data--row5">
                  <label className="form3_label">Direccion Referencia</label>
                  <input
                    className="form3_input"
                    type="number"
                    placeholder="Escribe tu texto"
                  />
                </div>
                <div className="form3_data--row6">
                  <label className="form3_label">Codigo Zip</label>
                  <input
                    className="form3_input"
                    type="number"
                    placeholder="Escribe tu texto"
                  />
                </div>
                <div className="form3_data--row7">
                  <label className="form3_label">Telefono</label>
                  <input
                    className="form3_input"
                    type="number"
                    placeholder="Escribe tu texto"
                  />
                </div>
              </fieldset>

              <fieldset className="form3_fieldset2">
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

export default Checkout3;
