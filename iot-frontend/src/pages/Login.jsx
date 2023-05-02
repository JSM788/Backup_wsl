import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png"
import LoginImg from "../assets/login.png"

import { AuthContext } from "../context/auth/AuthProvider";
import {ContenedorLogin,LogoBox,MainBox,Box1,Box2,Sesion,Form,FormBox,ErrorFormLogin} from '../styles/LoginStyle'



export const Login = ({ authLogin }) => {
  
  const navigate = useNavigate();

  //Context
  const {
    iniciarSesion,
    mensaje,
    autenticado,
    ResetError,
    errorLogin,
  } = useContext(AuthContext);

  useEffect(() => {
    if (autenticado) {
      authLogin();
      navigate("sistema");
    }
    if (errorLogin) {
      ResetError();
    }
  }, [autenticado, navigate, errorLogin, ResetError]);

  //state para iniciar sesion
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState("");

  //extraer usuario
  const { email, password } = usuario;
  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //validar que no haya campos vacios
    if (email.trim() === "" || password.trim() === "") {
      setError(true);
      setErrorMensaje("Todos los campos son obligatorios");
      setTimeout(() => {
        setError(false);
      }, 5000);
      return;
    }
    if (password.length < 6) {
      setError(true);
      setErrorMensaje("Password es incorrecta");
      setTimeout(() => {
        setError(false);
        setErrorMensaje("");
      }, 5000);
      return;
    }

    iniciarSesion({ email, password });
  };

  const AnimationLogin = {
    hidden: {
      opacity: 0,
      scale: 0.1
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 2  
      }
    }
  }

  return (
      <ContenedorLogin
        key="login"
        variants={AnimationLogin}
        initial="hidden"
        animate="show"
      >
      <LogoBox>
        <img src={Logo} alt="logo" />    
      </LogoBox>
      <MainBox>
        <Box1>
          <h3>¡Bienvenido!</h3>
          <p>
            Aquí podrás gestionar y monitorear la salud de tus colaboradores
          </p>
          <img className="login_img" src={LoginImg} alt="LoginImg" />
        </Box1>
        <Box2>
          <Sesion>
            <h3>Inicia sesión en Valhalla</h3>
            <p>Ingrese su Cuenta: </p>
            <Form>
              <FormBox>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Usuario"
                value={email}
                onChange={handleChange}
              />
              <i className="far fa-user-circle" aria-hidden="true"></i>
              </FormBox>
              <FormBox>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={handleChange}
              />
              <i className="fas fa-lock" aria-hidden="true"></i>
              </FormBox>
              <FormBox>
                <input
                  className="btn"
                  type="submit"
                  value="Ingresar"
                  onClick={handleSubmit}
                />
              </FormBox>
              
            {errorLogin ? (
                <ErrorFormLogin>
                  <h3 className="errorMensaje"> <i className="fas fa-exclamation-circle" aria-hidden="true"></i>&nbsp;&nbsp; {mensaje}</h3>
                </ErrorFormLogin>
              ) : null}
              {error ? (
                <ErrorFormLogin>
                  <h3 className="errorMensaje"> <i className="fas fa-exclamation-circle" aria-hidden="true"></i>&nbsp;&nbsp;{errorMensaje}</h3>
                </ErrorFormLogin>
              ) : null}
              
            </Form>
          </Sesion>
        </Box2>
      </MainBox>
      </ContenedorLogin>
  );
};
