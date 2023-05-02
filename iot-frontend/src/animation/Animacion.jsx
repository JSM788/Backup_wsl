import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const AnimatePageMain = {
  hidden: {
    opacity: 0,
    y: "-500px",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  }
};

const AnimatePageModal = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  }
};

const AnimatePageDetalles = {
  hidden: {
    opacity: 0,
    y: "200px",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  }
};

const Contenedor = styled(motion.div)`
  
`;
export const ContainerAnimationPage = ({ children }) => {
  return (
      <Contenedor
          variants={AnimatePageMain}
          initial="hidden"
          animate="show"
      >{children}</Contenedor>
  );
};

export const ContainerAnimationModal = ({ children }) => {
  return (
      <Contenedor 
          variants={AnimatePageModal}
          initial="hidden"
          animate="show"
      >{children}</Contenedor>
  );
};

export const ContainerAnimationDetalles = ({ children }) => {
  return (
      <Contenedor 
          variants={AnimatePageDetalles}
          initial="hidden"
          animate="show"
      >{children}</Contenedor>
  );
};

export const AnimationDetallesTablas = ({ children }) => {
  return (
      <Contenedor 
          variants={AnimatePageDetalles}
          initial="hidden"
          animate="show"
      >{children}</Contenedor>
  );
};
export const AnimationAtencionoUrgencias = ({ children }) => {
  return (
      <Contenedor 
          variants={AnimatePageModal}
          initial="hidden"
          animate="show"
      >{children}</Contenedor>
  );
};

export const AnimacionModalMedidas = ({ children }) => {
  return (
    <AnimatePresence>
      <Contenedor 
          variants={AnimatePageModal}
          initial="hidden"
          animate="show"
          exit="exit"
      >{children}</Contenedor>
    </AnimatePresence>
);
}