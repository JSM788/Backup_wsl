import React, { useContext } from 'react';
import { ColaboradorContext } from '../context/colaboradores/ColaboradorProvider';
import {ErrorFormLogin} from '../styles/LoginStyle'
export const ErrorFormulario = () => {
  
    const {errorForm , resetearErrores,errorFormulario  } = useContext(ColaboradorContext); 
    if (errorForm) {
        setTimeout(() => {
            resetearErrores();
        }, 4000);
    }
  
  return <>
          {errorForm ? (
              <ErrorFormLogin>
              <h3><i className="fas fa-exclamation-circle" aria-hidden="true"></i>&nbsp;&nbsp;{errorFormulario}</h3>
          </ErrorFormLogin>
          ): null}
        </>;
};
