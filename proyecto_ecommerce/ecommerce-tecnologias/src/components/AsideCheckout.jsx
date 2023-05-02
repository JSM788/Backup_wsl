import React from "react";
import "./css/AsideCheckout.css";
import ProtectedBuy from "../svgComponents/ProtectedBuy"

const AsideCheckout = () => {
  return (
    <aside className="aside">
      <section className="aside_section">
        <span className="aside_section_title">Total del Pedido</span>
        <div className="aside_section_info">
          <hr className="aside_section_hr" />
          <span className="aside_section_span span_subtotal">
            <p>Sub Total</p>
            <p>$0.00</p>
          </span>
          <span className="aside_section_span span_envio">
            <p>Costo de envío</p>
            <p>$0.00</p>
          </span>
          <hr className="aside_section_hr" />
          <span className="aside_section_span span_subtotal">
            <p>Sub Total</p>
            <p>$0.00</p>
          </span>
          <span className="aside_section_span span_IGV">
            <p>IGV</p>
            <p>$0.00</p>
          </span>
          <span className="aside_section_span span_envio">
            <p>Costo de envío</p>
            <p>$0.00</p>
          </span>
          <hr className="aside_section_hr" />
          <span className="aside_section_span span_total">
            <p className="total">Total</p>
            <p>$0.00</p>
          </span>
        </div>
        <button className="aside_section_button--continue">Continuar</button>
      </section>
      <div className="compra_protegida">
    <ProtectedBuy style={{marginTop:"2px"}}/>
        <p className="protectedbuy_parrafo">
          Compra Protediga, recibe el producto que esperabas o te lo devolvemos
        </p>
      </div>
    </aside>
  );
};

export default AsideCheckout;
