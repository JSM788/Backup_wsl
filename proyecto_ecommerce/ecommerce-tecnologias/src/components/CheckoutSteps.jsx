import React from "react";
import "./css/CheckoutSteps.css";

function CheckoutSteps() {
  return (
    <div className="checkoutsteps">
      <ul className="checkoutstep_ul">
        <div className="checkoutstep_div">
          <hr className="checkoutstep_hr hr_first" />
          <li className="checkoutstep_li--number">1</li>
          <hr className="checkoutstep_hr" />
        </div>
        <li className="checkoutstep_li--name">Carrito</li>
      </ul>
      <hr className="checkoutstep_hr" />
      <ul className="checkoutstep_ul">
        <div className="checkoutstep_div">
          <hr className="checkoutstep_hr" />
          <li className="checkoutstep_li--number">2</li>
          <hr className="checkoutstep_hr" />
        </div>
        <li className="checkoutstep_li--name">Informacion</li>
      </ul>
      <hr className="checkoutstep_hr" />
      <ul className="checkoutstep_ul">
        <div className="checkoutstep_div">
          <hr className="checkoutstep_hr" />
          <li className="checkoutstep_li--number">3</li>
          <hr className="checkoutstep_hr" />
        </div>
        <li className="checkoutstep_li--name">Envio</li>
      </ul>
      <hr className="checkoutstep_hr" />
      <ul className="checkoutstep_ul">
        <div className="checkoutstep_div">
          <hr className="checkoutstep_hr" />
          <li className="checkoutstep_li--number li_number--4">4</li>
          <hr className="checkoutstep_hr hr_end" />
        </div>
        <li className="checkoutstep_li--name">Pago</li>
      </ul>
    </div>
  );
}

export default CheckoutSteps;
