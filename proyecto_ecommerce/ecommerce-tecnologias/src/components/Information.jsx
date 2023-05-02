import React from "react";
import x from "./css/Information.module.css";

function Information() {
  return (
    <div className={x.container}>
      <h1 className={x.title}>Información</h1>
      <form>
        <fieldset>
          <div className={x.row1}>
            <div className={x.row1_input}>
              <label htmlFor="name" className={x.label}>Nombres</label>
              <input type="text" className={x.input} id="name" />
            </div>
            <div className={x.row1_input}>
              <label htmlFor="lastname" className={x.label}>Apellidos</label>
              <input type="text" className={x.input} id="lastname" />
            </div>
          </div>
          <div >
            <div className={x.row2}>
            <label htmlFor="email" className={x.label}>Email</label>
            <input type="email" className={x.input} id="email" />
            </div>
          </div>
          <div className={x.row3}>
            <div className={x.row3_input}>
              <label htmlFor="phone" className={x.label}>Teléfono</label>
              <input type="number" className={x.input} id="phone" />
            </div>
            <div className={x.row3_input}>
              <label htmlFor="zip" className={x.label}>Código Zip</label>
              <input type="number" className={x.input} id="zip" />
            </div>
          </div>
        </fieldset>
        <fieldset className={x.validation}>
          <div className={x.terms}>
            <input type="checkbox" name="opcion1" value="valor1"></input>
            <p>
              Acepto los <strong>Términos de Servicio</strong> y{" "}
              <strong>Politica de Privacidad</strong>
            </p>
          </div>
          <p>Este sitio esta protegido por reCAPTCHA</p>
        </fieldset>
        <fieldset className={x.button}>
          <button className={x.button_guardar}> Guardar</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Information;
