import React from "react";
import x from "./css/Pay.module.css";
import { tarjetas } from "../helpers/tarjetas";

function Pay() {
  return (
    <div className={x.container}>
      <h1 className={x.title}>Pago</h1>
      <p className={x.title_card}>Tarjeta de Credito o Debito</p>
      <fieldset className={x.cards_container}>
        {tarjetas.map((item) => {
          return (
            <figure className={x.img_container}>
              <img src={item} className={x.img_card} />
            </figure>
          );
        })}
      </fieldset>
      <form>
        <fieldset>
          <div className={x.row1}>
            <div className={x.row1_input}>
              <label htmlFor="card" className={x.label}>
                Numero de Tarjeta
              </label>
              <input type="text" className={x.input} id="card" />
            </div>
          </div>
          <div className={x.row2}>
            <div className={x.row2_input}>
              <label htmlFor="date" className={x.label}>
                Fecha de expiracion
              </label>
              <input type="text" className={x.input} id="date" />
            </div>
            <div className={x.row2_input}>
              <label htmlFor="code" className={x.label}>
                Codigo de seguridad
              </label>
              <input type="text" className={x.input} id="code" />
            </div>
          </div>
        </fieldset>
        <hr className={x.hr}/>
        <fieldset className={x.total}>
          <h1 className={x.total_pedido}>Total del Pedido</h1>
          <p className={x.total_price}>$0.00</p>
        </fieldset>
        <fieldset className={x.button}>
          <button className={x.button_pay}>Pagar ahora $0.00</button>
        </fieldset>
        <hr className={x.hr}/>
      </form>
    </div>
  );
}

export default Pay;
