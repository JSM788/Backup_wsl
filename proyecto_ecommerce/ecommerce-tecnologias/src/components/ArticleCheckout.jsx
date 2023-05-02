import React from "react";
import { BsTrash } from "react-icons/bs";
const ArticleCheckout = () => {
  return (
    <div className="container_article">
      <article className="section_article">
        <figure className="section_product">
          <img
            className="section_product--product"
            src="https://http2.mlstatic.com/D_NQ_NP_2X_659520-MLM51338788281_082022-F.webp"
          />
        </figure>
        <div className="section_details">
          <p className="section_detail section_parrafo ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            voluptates. Magnam vel pariatur nostrum reiciendis repudiandae
            corrupti qui vero, soluta natus
          </p>
          <span className="section_detail section_span">$0.00</span>
          <div className="section_detail section_buttons">
            <button className="section_button button_less">-</button>
            <button className="section_button button_o">O</button>
            <button className="section_button button_add">+</button>
            <button className="section_button button_save">
              Guardar para mas tarde
            </button>
            <button className="section_button button_share">Compartir</button>
          </div>
        </div>
        <div className="section_button_trash">
          <BsTrash className="button_trash" />
        </div>
      </article>
      <hr className="checkout_hr" />
    </div>
  );
};

export default ArticleCheckout;
