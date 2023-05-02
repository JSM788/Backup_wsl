import React from "react";
import x from "./css/DeliveryMethod.module.css";

function DeliveryMethod() {
  return (
    <div className={x.container}>
      <hr />
      <h1 className={x.deliverymethod}>Metodo de Envío</h1>
      <section className={x.section}>
        <div className={x.boxes}>
          <div class={x.box}>
            <input type="radio" className={x.radio}></input>
            <span class="text">Delivery</span>
          </div>
          <div class={x.box}>
            <input type="radio" className={x.radio}></input>
            <span class="text">Mi Ubicacion Actual</span>
          </div>
        </div>
        <div className={x.save_address}>
          <p className={x.title_address}>Mis domicilios guardados</p>
          <div className={x.box_address}>
            <input type="radio" className={x.radio}></input>
            <span class="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus earum provident tenetur maxime.
            </span>
          </div>
        </div>
      </section>
      <form>
        <h1 className={x.new_address}>Domicilio Nuevo</h1>
        <fieldset className={x.fieldset}>
          <div>
            <label htmlFor="city" className={x.label}>Ciudad</label>
            <input type="text" className={x.input} id="city"/>
          </div>
          <div>
            <label htmlFor="floor" className={x.label}>Piso / Departamento</label>
            <input type="text" className={x.input} id="floor"/>
          </div>
          <div>
            <label htmlFor="address1" className={x.label}>Direccion 1</label>
            <input type="text" className={x.input} id="address1"/>
          </div>
          <div>
            <label htmlFor="address2" className={x.label}>Direccion 2 Referencia</label>
            <input type="text" className={x.input} id="address2"/>
          </div>
          <div>
            <label htmlFor="zip" className={x.label}>Codigo Zip</label>
            <input type="text" className={`${x.input} ${x.input_zip}`} id="zip"/>
          </div>
        </fieldset>
        <fieldset className={x.button}>
          <button className={x.save_button}>Guardar</button>
        </fieldset>
      </form>
      <div className={x.save_information}>
        <input type="checkbox" className={x.checkbox}/>
        <p>Guardar mi informacion para mi proxima compra</p>
      </div>
    </div>
  );
}

export default DeliveryMethod;
