import React from "react";
import x from "./css/Confirm.module.css";

function Confirm() {
  return (
    <div className={x.container}>
      <h1>Orden de Confirmacion</h1>
      <hr className={x.hr}/>
      <section className={x.section1}>
        <div className={x.info1}>
          <div className={x.item}>
            <p className={x.title_item}>Item</p>
            <div className={x.item_details}>
              <img src="" style={{ width: "100px", height: "100px" }} />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo id, cumque iste eligendi consequatur
              </p>
            </div>
          </div>
        </div>
        <div className={x.info2}>
          <div className={x.info2_amount}>
            <p className={x.title_amount}>Cantidad</p>
            <div className={x.amount_number}>
              <p>1</p>
            </div>
          </div>
          <div className={x.info2_send}>
            <p className={x.title_send}>Envío</p>
            <div className={x.send_number}>
              <p>$0.00</p>
            </div>
          </div>
          <div className={x.info2_price}>
            <p className={x.title_price}>Precio</p>
            <div className={x.price_number}>
              <p>$0.00</p>
            </div>
          </div>
        </div>
      </section>
      <hr className={x.hr}/>
      <section className={x.section2}>
        <div className={x.information}>
          <div className={x.header_information}>
            <p className={x.title}>Information</p>
            <button><strong>Editar</strong></button>
          </div>
          <hr className={x.hr}/>
          <div>
            <p>Nombre y Apellido</p>
            <p>nombre@apellido.com</p>
            <p>Direccion</p>
            <p>+ 42 434756723</p>
          </div>
        </div>
        <div className={x.send}>
          <div className={x.header_send}>
            <p className={x.title}>Envío</p>
            <button><strong>Editar</strong></button>
          </div>
          <hr className={x.hr}/>
          <div>
            <p>710 maind</p>
            <p>Apt. 413</p>
            <p>Matucana, CA 843</p>
            <p>Mexico</p>
            <p>(345)355-661</p>
          </div>
        </div>
      </section>
      <section className={x.section3}>
        <div className={x.header_pay}>
          <p className={x.title}>Pago</p>
          <button><strong>Editar</strong></button>
        </div>
        <hr className={x.hr}/>
        <figure>
          <img src="" style={{ width: "50px", height: "30px" }} />
          <p>Visa Card ending in 12345</p>
        </figure>
      </section>
      <section className={x.section4}>
        <p className={x.title}>Total a pagar</p>
        <hr className={x.hr}/>
        <p>$ 3234.85</p>
      </section>
      <section className={x.section5}>
        <button className={x.button_pay}>Pagar pedido</button>
      </section>
    </div>
  );
}

export default Confirm;
