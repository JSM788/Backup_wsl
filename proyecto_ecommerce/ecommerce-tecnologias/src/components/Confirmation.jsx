import React from "react";
import x from "./css/Confirmation.module.css";
import Check from "../svgComponents/Check";

function Confirmation() {
  return (
    <div className={x.container}>
      <section className={x.section1}>
        <h1 className={x.title_section1}>¡Muchas Gracias por su compra!</h1>
        <Check />
      </section>
      <hr className={x.hr} />
      <section className={x.section2}>
        <h1 className={x.title_section2}>Su pedido fue realizado con éxito</h1>
        <h3>Se ha enviado una confirmacion de pedido</h3>
        <div>
          <div className={x.detail}>
            <p>Numero de orden:</p>
            <p>Q00059834740</p>
          </div>
          <div className={x.detail}>
            <p>Datos del Pedido:</p>
            <p>16 de Marzo 2023 a las 10:23 AM GMT + 3</p>
          </div>
          <div className={x.detail}>
            <p>Hemos enviado los detalles de confirmacion del pedido a:</p>
            <p>example@gmail.com</p>
          </div>
        </div>
      </section>
      <hr className={x.hr} />
      <section className={x.section3}>
        <h1>Envío</h1>
        <h3>Datos de envío</h3>
        <div>
          <p>Smith Joe</p>
          <p>124 Calle argentina 10</p>
          <p>Menlo park</p>
          <p>example@gmail.com</p>
          <p>(345) 256-3467</p>
        </div>
        <h3>Costo de envío</h3>
        <div>
          <p>Envío gratis</p>
          <p>Salida el dia Lunes 16 Marzo</p>
        </div>
      </section>
      <hr className={x.hr} />
      <section className={x.section3}>
        <h1>Pago</h1>
        <h3>Datos de envío</h3>
        <p>Exp:</p>
        <h3>Detalles de la factura</h3>
        <p>Smith Joe</p>
        <p>124 Calle argentina 10</p>
        <p>Menlo park</p>
      </section>
      <hr className={x.hr} />
      <section className={x.section4}>
        <button className={x.button_finalizar}>Finalizar pedido</button>
      </section>
    </div>
  );
}

export default Confirmation;
