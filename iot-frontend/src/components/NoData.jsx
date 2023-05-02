import React from 'react';
import { ContainerAnimationModal } from '../animation/Animacion';
import { TablaSinDatos } from '../styles/Usables';

export const NoData = () => {
  return (
    <ContainerAnimationModal>
      <TablaSinDatos>
      <div>
          <h2>NO SE ENCONTRARON</h2>
          <h2>RESULTADOS</h2>
      </div>
    </TablaSinDatos> 
  </ContainerAnimationModal>
  ); 
};
